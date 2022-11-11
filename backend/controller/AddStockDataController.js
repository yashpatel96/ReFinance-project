class addStock {

}

const addStockData = (req, res) => {
  const reqBody = req.body;
  const stockName = reqBody.stockName;
  const stockToAdd = reqBody.stockToAdd;
  //const result = new addStock(stockName, stockToAdd);
	res.send(`The stock symbol: ${stockName} has been added to the database!`);
}

module.exports = addStockData;
