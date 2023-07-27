import { getDomainCookies } from "./accessToken.js";
import jsforce from "jsforce";
import axios from 'axios';
import throttle from 'lodash/throttle';

import Swal from "sweetalert2";
//const base64Img = require('base64-img');

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
		conn.sobject(name).update(data, function (err, rets) {
			if (err) { return console.error(err); }
			for (var i = 0; i < rets.length; i++) {
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


export function exportToTrello(boardData, listData, cardData, apiKey, token) {
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
							
							Swal.fire("Good job!", "Project Exported to trello Succesfly!", "success");
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




export function requestSF(url) {
	return new Promise((resolve, reject) => {
		if (conn) {
			conn.request(url, function (err, ret) {
				console.log(ret);
				resolve(ret);

			});
		} else {
			reject(new Error("Connection not established."));
		}
	});
}

export async function fetchAndDisplayImage(attachmentId) {
	//console.log("1");
	if (conn) {
		try {
			//console.log("2");
			// Fetch the image attachment body from Salesforce
			const attachment = await conn.sobject("Attachment").retrieve(attachmentId, ["Body", "ContentType"]);
			if (attachment && attachment.Body) {
				// Convert the binary image data to base64
				const base64Data = Buffer.from(attachment.Body, 'base64').toString('base64');
				// Display the base64 data in the console
				console.log('Base64 Image Data: ', base64Data);

				// Display the image on the HTML page using the base64 data
				base64Img.img(`data:${attachment.ContentType};base64,${base64Data}`, './', 'image', (err, filePath) => {
					if (err) {
						console.error('Error saving image:', err);
					} else {
						console.log('Image file path:', filePath);
						// Now you can use the image file path (filePath) to display the image in your HTML page
						// For example, you can set the image source attribute in the <img> tag.
						// Example in Vue.js: this.imageSrc = filePath;
					}
				});
			} else {
				console.error('Attachment not found or empty.');
			}
		} catch (error) {
			console.error('Error fetching image:', error);
		}
	} else {
		reject(new Error('Connection not established.'));
	}

}

export function getImageUrl(attachmentId) {
	try {

		if (conn) {
			// Construct the image URL
			const imageUrl = `${conn.instanceUrl}/servlet/servlet.FileDownload?file=${attachmentId}`;
			return imageUrl;
		} else {
			reject(new Error("Connection not established."));
		}
	} catch (error) {
		console.error('Error fetching image URL:', error);
		return null;
	}

}


export function ChatGpt(message) {
	const openAiApiKey = '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';
	const openAiEndpoint = 'https://api.openai.com/v1';

	// Throttle the ChatGPT API call to 1 request per 5 seconds (adjust as needed)
	const throttledChatGptApiCall = throttle(chatGptApiCall, 5000);

	// Function to handle the ChatGPT API call
	function chatGptApiCall(message) {
		return new Promise((resolve, reject) => {
			// Make the API call to ChatGPT
			axios.post(`${openAiEndpoint}/completions`, {
				model: "text-davinci-003",
				prompt: message,
				max_tokens: 150
			}, {
				headers: {
					'Authorization': `Bearer ${openAiApiKey}`,
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					// Handle the API response here
					const chatGptResponse = response.data.choices[0].text;
					console.log('ChatGPT Response:', chatGptResponse);
					resolve(chatGptResponse);
				})
				.catch(error => {
					console.error('Error calling ChatGPT API:', error);
					reject("Error");
				});
		});
	}


	// Call the throttled ChatGPT API function here with the message
	return throttledChatGptApiCall(message);
}
export function callGpt35TurboAPI(message,openAiApiKey) {
	console.log("callGpt35TurboAPI " + message)
	return new Promise((resolve, reject) => {
		const openAiEndpoint = 'https://api.openai.com/v1/chat/completions'; // Endpoint for GPT-3.5-turbo model
		
		axios
			.post(
				openAiEndpoint,
				{


					"model": "gpt-3.5-turbo",
					"messages": [{ "role": "user", "content": message }]
				},
				{
					headers: {
						Authorization: `Bearer ${openAiApiKey}`,
						'Content-Type': 'application/json',
					},
				}
			)
			.then(response => {
				// Handle the API response here
				const chatGptResponse = response.data.choices[0].message.content;
				console.log('ChatGPT Response:', chatGptResponse);
				resolve(chatGptResponse);
			})
			.catch(error => {
				console.error('Error calling ChatGPT API:', error);
				reject("Error");
			});
	});
}
