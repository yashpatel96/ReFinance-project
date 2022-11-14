const { countStock, addStockDataToDB } = require("../../model/StockDataModel");
const { getUserRole } = require("../../model/UserDataModel");
//const axios = require("axios");

class addStock {
	constructor(stockToAdd) {
		this.stockToAdd = stockToAdd;
	}

	checkUserIsAdmin = async () => {
		return await getUserRole(this.stockToAdd.user_email);
	};

	addStockData = async () => {
		if ((await this.checkUserIsAdmin()) && (await countStock(this.stockToAdd.symbol)) === 0) {
			const result = await addStockDataToDB(this.stockToAdd);
			return result;
		}
		return false;
	};
}

const addStockData = async (req, res) => {
	const reqBody = req.body;
	const addData = new addStock(reqBody);
	console.log(await addData.addStockData());

	const stockName = reqBody.symbol;
	const userEmail = reqBody.user_email;
	if (await getUserRole(userEmail)) {
		return await res.json(`The stock symbol: ${stockName} has been added to the database, userEmail=${userEmail}!`);
	}
	return res.status(400).json("User is not admin to add new stock to the db");
	//const hello = Object.keys(stockToAdd).map((key, index) => {return stockToAdd[key]});
	// console.log(hello)
	//const result = new addStock(stockName, stockToAdd);
	//.status(200)
};

module.exports = addStockData;

/* 
{
  "symbol": "AAPLs",
  "currency": "USD",
	"description": "MY new Stock",
	"mic": "XYSE",
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
