import { getDomainCookies } from "./accessToken.js";
import jsforce from "jsforce";

//import { URL, AccessToken, PackageName } from "../constants";


async function ConnexionSFTest() {
	const cc = await getDomainCookies();
	//console.log(cc);
	conn = new jsforce.Connection({
		instanceUrl: 'https://' + process.env.VUE_APP_SALES_URL,
		accessToken: process.env.VUE_APP_ACCESS_TOKEN
	});
	return conn;

}

let conn = ConnexionSFTest();


// async function ConnexionSF() {
// 	const cc =  await getDomainCookies();
// 	console.log(cc);
// 	conn = new jsforce.Connection({
// 		instanceUrl : 'https://'+cc[0],
// 		accessToken : cc[1]
// 		});
//     return conn;

// }

// let conn = ConnexionSF();






export function executeQuery(query) {
	return new Promise((resolve, reject) => {
		if (conn) {
			conn.query(query, function (err, result) {
				if (err) {
					reject(err);
				} else {
					if (result.records.length) {
						let data = result.records.map((currentItem) => {
							let obj = Object.assign({}, currentItem);
							delete obj.attributes;
							return obj;
						});
						resolve(data);
					} else {
						resolve([]);
					}
				}
			});
		} else {
			reject(new Error('Connection not established.'));
		}
	});
}

export function createSObject2(name, data) {
	return new Promise((resolve, reject) => {
	  if (conn) {
		conn.sobject(name).create(data, function (err, ret) {
		  if (err || !ret.success) {
			reject(err || new Error("Record creation failed."));
		  } else {
			console.log("Created record id: " + ret.id);
			resolve(ret.id);
		  }
		});
	  } else {
		reject(new Error("Connection not established."));
	  }
	});
  }

export function createSObject(name, data) {

	if (conn) {
		conn.sobject(name).create(data, function (err, ret) {
			if (err || !ret.success) { return console.error(err, ret); }
			console.log("Created record id : " + ret.id);
		});

	} else {
		reject(new Error('Connection not established.'));
	}
}

export function deleteSObject(name, id) {
	if (conn) {
		conn.sobject(name).destroy(id, function (err, ret) {
			if (err || !ret.success) { return console.error(err, ret); }
			console.log('Deleted Successfully : ' + ret.id);
		});
	} else {
		reject(new Error('Connection not established.'));
	}
}


export function updateSObjects(name, data) {
	if (conn) {
		conn.sobject(name).update(data, function(err, rets) {
			if (err) { return console.error(err); }
			for (var i=0; i < rets.length; i++) {
			  if (rets[i].success) {
				//console.log("Updated Successfully : " + rets[i].id);
			  }
			}
		  });

	} else {
		reject(new Error('Connection not established.'));
	}


}


export function ToolingPackage() {
	return new Promise((resolve, reject) => {

		conn.then(() => {
			conn.tooling.query("select Id ,SubscriberPackage.Name from InstalledSubscriberPackage", function (err, result) {
				if (err) {
					reject(err);
				} else {
					if (result.records.length) {
						let c = checkPackageName(result);

						resolve(c);
					} else {
						resolve(false);
					}
				}
			});
		});
	});
}


export function toolingQuery(query) {
	return new Promise((resolve, reject) => {
		if (conn) {
			conn.tooling.query(query, function (err, result) {
				if (err) {
					reject(err);
				} else {
					if (result.records.length) {
						let data = result.records.map((currentItem) => {
							let obj = Object.assign({}, currentItem);
							delete obj.attributes;
							return obj;
						});
						resolve(data);
					} else {
						resolve([]);
					}
				}
			});
		} else {
			reject(new Error('Connection not established.'));
		}
	});
}

function checkPackageName(jsonData) {

	const parsedData = jsonData;
	const records = parsedData.records;

	for (let i = 0; i < records.length; i++) {
		const record = records[i];
		const packageName = record.SubscriberPackage.Name;

		if (packageName === process.env.VUE_APP_PACKAGE_NAME) {

			return true; // Package name found
		}
	}

	return false; // Package name not found
}

export async function getLastDebugLogUserId() {
	try {
		const cc = await ConnexionSFTest(); // Get the Salesforce connection
		const apexBody = "system.debug(UserInfo.getUserId());";

		const res = await new Promise((resolve, reject) => {
			cc.tooling.executeAnonymous(apexBody, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});

		const logs = await new Promise((resolve, reject) => {
			cc.tooling.sobject("ApexLog")
				.find({ RequestIdentifier: res.id })
				.sort({ StartTime: -1 })
				.limit(1)
				.execute((err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
		});

		if (logs.length > 0) {
			const lastLog = logs[0];
			return lastLog.LogUserId;
		} else {
			throw new Error("No debug logs found.");
		}
	} catch (err) {
		console.error(err);
		throw err;
	}
}


export function exportToTrello(boardData, listData, cardData) {
	const apiKey = '093fb7c15e6f37e30c5b5f1e4f743e3a';
	const token = 'ATTA66ee805783e590f1d38a02c85b9e2ab3790b56864e5212601265d098db7c6f78465A868C';
	const endpoint = 'https://api.trello.com/1';

	axios.post(`${endpoint}/boards`, boardData, {
		params: {
			key: apiKey,
			token: token
		}
	})
		.then(boardResponse => {
			const boardId = boardResponse.data.id;

			// Create lists
			const listPromises = listData.map(list => {
				return axios.post(`${endpoint}/lists`, { ...list, idBoard: boardId }, {
					params: {
						key: apiKey,
						token: token
					}
				});
			});

			axios.all(listPromises)
				.then(listResponses => {
					const listIds = listResponses.map(response => response.data.id);

					// Create cards
					const cardPromises = cardData.map(card => {
						const listIndex = card.listIndex;
						const listId = listIds[listIndex];
						return axios.post(`${endpoint}/cards`, { ...card, idList: listId }, {
							params: {
								key: apiKey,
								token: token
							}
						});
					});

					axios.all(cardPromises)
						.then(cardResponses => {
							// Handle success response
							console.log('Board, lists, and cards created successfully:', boardResponse.data, listResponses.map(res => res.data), cardResponses.map(res => res.data));
						})
						.catch(error => {
							// Handle error response while creating cards
							console.error('Error creating cards:', error);
						});
				})
				.catch(error => {
					// Handle error response while creating lists
					console.error('Error creating lists:', error);
				});
		})
		.catch(error => {
			// Handle error response while creating the board
			console.error('Error creating board:', error);
		});
}