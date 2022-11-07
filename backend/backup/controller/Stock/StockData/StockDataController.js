const stock = require("./ClassStock");

const getStock = async (stockData) => {
	if(await stockData.checkStockExist() == 1){
		return await stockData.getStock();
	}
	else{
		const error = "Error Occured, stock does not exist";
		return error;
	}
};

const addStock = async (stockData) => {
	if(await stockData.checkStockExist() == -1){
		return await stockData.addStock();
	}
	else{
		const error = "Error Occured, stock already exists";
		return error;
	}
};

const removeStock = async (stockData) => {
	if(await stockData.checkStockExist() == 1){
		return await stockData.removeStock();
	}
	else{
		const error = "Error Occured, stock does not exist";
		return error;
	}
};

const stockData = async (stockName, action) => {
	const stockData = new stock(stockName);
	if (action === "getData") {
		return await getStock(stockData);
	} else if (action === "addStock") {
		return await addStock(stockData);
	} else if (action === "removeStock") {
		return await removeStock(stockData);
	}
};

module.exports = stockData;

/* 
const getIndices = (req, res) => {
  res.json(
    "User: Deep",
  )
}

module.exports = {
  getIndices
}
*/
