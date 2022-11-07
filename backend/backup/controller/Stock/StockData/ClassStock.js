const db = require("../model/DBModel").collection("Refinance_Stock");

class stock {
	constructor(stockName) {
		this.stockName = stockName;
	}

	checkStockExist = async () => {
		const res = await db.count({ symbol: stockName });
		return (res > 0 ? 1 : -1);
	};

	getDataApi = async (link) => {
		return await axios
			.get(link)
			.then((response) => {
				//console.log("res", response.data);
				return response.data;
			})
			.catch((err) => console.log(err));
	};

	updateStock = async () => {
		
	};

	getStock = async () => {
		const isNotField = await checkFieldNotExist(stockName, fieldName);
		if (isNotField === 1) {
			return await updateData(stockName, fieldName);
		}
	};

	addStock = async () => {
		const isNotStock = await checkStockExist(stockName);
		if (isNotStock === 1) {
			return await updateData(stockName, fieldName);
		}
	};

	removeStock = async () => {
		const isNotStock = await checkStockExist(stockName);
		if (isNotStock === 1) {
			return await updateData(stockName, fieldName);
		}
	};
}

module.exports = stock;
