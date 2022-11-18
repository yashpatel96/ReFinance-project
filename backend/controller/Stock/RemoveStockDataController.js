const { findStockToRemove, removeStockDataFromDB } = require("../../model/StockDataModel");
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
		if (
			(await this.checkUserIsAdmin()) &&
			(await findStockToRemove(this.stockToRemove.symbol, this.stockToRemove.type, this.stockToRemove.currency))
		) {
			const result = await removeStockDataFromDB(this.stockToRemove);
			console.log(result)
			return result;
		}
		return error;
	};
}

const removeStockData = async (req, res) => {
	const reqBody = req.body;
	const removeData = new removeStock(reqBody);
	//console.log(await removeData.removeStockData());
	try {
		await removeData.removeStockData();
		return res.status(200).json({ status: "ok" });
	} catch {
		return res.status(400).json("Error Occured, Stock has not been removed from database");
	}
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
