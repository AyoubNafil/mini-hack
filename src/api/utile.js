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
				console.log("Updated Successfully : " + rets[i].id);
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