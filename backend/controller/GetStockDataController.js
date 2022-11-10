const { countStock, checkFieldExist, findData, updateData } = require("../model/StockDataModel");
const axios = require("axios");

class getStock {
	constructor(stockName, fieldName) {
		this.stockName = stockName;
		this.fieldName = fieldName;
	}

	getDataApi = async (link) => {
		return await axios
			.get(link)
			.then((response) => {
				return response.data;
			})
			.catch((err) => console.log(err));
	};

	checkStockExist = async () => {
		const res = await countStock(this.stockName);
		return res > 0;
	};

	checkFieldNotExist = async () => {
		const res = await checkFieldExist(this.stockName, this.fieldName);
		return res === 0;
	};

	searchData = async () => {
		const res = await findData(this.stockName, this.fieldName);
		return res; // res[candle]
		//, { projection: {currency: 1, description: 1}}
		//, projection: {candle:1}
	};

	getNewCompanyData = async () => {
		//const basic_financial = `https://finnhub.io/api/v1/stock/metric?symbol=${stockName}&metric=all&token=${process.env.FINHUB_API_KEY}`;
		const dataLink = `https://finnhub.io/api/v1/quote?symbol=${this.stockName}&token=${process.env.FINHUB_API_KEY}`;
		return await this.getDataApi(dataLink);
	};

	getNewNewsData = async () => {
		const startDate = new Date(Date.now() - 604800).toISOString().slice(0, 10);
		const endDate = new Date().toISOString().slice(0, 10);
		const dataLink = `https://finnhub.io/api/v1/company-news?symbol=${this.stockName}&from=${startDate}&to=${endDate}&token=${process.env.FINHUB_API_KEY}`;
		return await this.getDataApi(dataLink);
	};

	getNewGraphData = async () => {
		const startDate = Math.floor(Date.now() / 1000 - 432000);
		const endDate = Math.floor(Date.now() / 1000);
		const dataLink = `https://finnhub.io/api/v1/stock/candle?symbol=${this.stockName}&resolution=5&from=${startDate}&to=${endDate}&token=${process.env.FINHUB_API_KEY}`;
		return await this.getDataApi(dataLink);
	};

	addCurrentStockData = async () => {
		let result;
		switch (this.fieldName) {
			case "data":
				result = await this.getNewCompanyData();
				break;
			case "news":
				result = await this.getNewNewsData();
				break;
			case "candle":
				result = await this.getNewGraphData();
				break;
			default:
				console.log("Error Occured getting new data, Try Again!");
				break;
		}
		console.log(await result);
		if (result !== {} && result !== "" && result !== null && result !== []) {
			await updateData(this.stockName, this.fieldName, result);
		}

		const res = await this.searchData();
		return res;
	};

	findStockData = async () => {
		if ((await this.checkStockExist()) && (await this.checkFieldNotExist())) {
			return await this.addCurrentStockData();
		} else if (!this.checkStockExist()) {
			return console.error("error, stock doesn't exist", error);
		}

		const result = await this.searchData();
		const FIVE_MINUTE_DELAY = 300000;
		const LastUpdatedUnix = Math.floor(new Date(result[this.fieldName].LastUpdated).getTime());
		const fiveMinuteDelayUnix = Math.floor(Date.now() - FIVE_MINUTE_DELAY);

		if (LastUpdatedUnix <= fiveMinuteDelayUnix) {
			return await this.addCurrentStockData();
		}

		return result;
	};
}

const getStockData = async (req, res) => {
		const stockName = req.query.id;
		const fieldName = req.query.field;
		if (stockName !== "" && stockName !== undefined && fieldName !== "" && fieldName !== undefined) {
			const result = new getStock(stockName, fieldName);
			return res.json(await result.findStockData());
		}
		return res.status(400).json({400: "Cannot fetch the request check the parameters in the URL"});
};

module.exports = getStockData;
