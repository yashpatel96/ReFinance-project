const { countStock, removeStockDataFromDB } = require("../../model/StockDataModel");
const { getUserRole } = require("../../model/UserDataModel");
//const axios = require("axios");

class removeStock {
	constructor(stockToRemove) {
		this.stockToRemove = stockToRemove;
	}

	checkUserIsAdmin = async () => {
		return await getUserRole(this.stockToRemove.user_email);
	};

	removeStockData = async () => {
		if ((await this.checkUserIsAdmin()) && (await countStock(this.stockToRemove.symbol)) === 1) {
			const result = await removeStockDataFromDB(this.stockToRemove);
			return result;
		}
		return false;
	};
}

const removeStockData = async (req, res) => {
	const reqBody = req.body;
	const removeData = new removeStock(reqBody);
	console.log(await removeData.removeStockData());

	const stockName = reqBody.symbol;
	const userEmail = reqBody.user_email;
	if (await getUserRole(userEmail)) {
		return await res.json(`The stock symbol: ${stockName} has been added to the database, userEmail=${userEmail}!`);
	}
	return res.status(400).json("User is not admin to add new stock to the db");
};

module.exports = removeStockData;

/* 
{
  "symbol": "AAPLs",
  "currency": "USD",
	"type": "COMMON STOCK",
  "user_email": "ref@test.com"
}
*/

/*    
  this.currency = stockToAdd.currency;
  this.description = stockToAdd.description;
  this.mic = stockToAdd.mic;
  this.type = stockToAdd.type; 
  this.symbol = stockToAdd.symbol;
  this.user_email = stockToAdd.userEmail; 
*/
