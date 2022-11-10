const { countStock, checkFieldExist, findData, updateData } = require("../../model/StockDataModel");
const axios = require("axios");

class graph {
	constructor(stockName) {
		this.stockName = stockName;
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
		const res = await checkFieldExist(this.stockName, "candle");
		return res === 0;
	};

	getNewGraphData = async () => {
		const startDate = Math.floor(Date.now() / 1000 - 432000);
		const endDate = Math.floor(Date.now() / 1000);
		const dataLink = `https://finnhub.io/api/v1/stock/candle?symbol=${this.stockName}&resolution=5&from=${startDate}&to=${endDate}&token=${process.env.FINHUB_API_KEY}`;
		return await this.getDataApi(dataLink);
	};

	searchData = async () => {
		const res = await findData(this.stockName);
		return res; // res[candle]
		//, { projection: {currency: 1, description: 1}}
		//, projection: {candle:1}
	};

	addGraph = async () => {
		const result = await this.getNewGraphData();
		if (result !== {} || result !== "" || result !== null) {
			await updateData(this.stockName, "candle", result);
		}
		const res = await this.searchData();
		return res;
	};

	getGraphData = async () => {
		if ((await this.checkStockExist()) && (await this.checkFieldNotExist())) {
			return await this.addGraph();
		} else if (!this.checkStockExist()) {
			return console.error("error, stock doesn't exist", error);
		}

		const result = await this.searchData();
		const FIVE_MINUTE_DELAY = 300000;
		const LastUpdatedUnix = Math.floor(new Date(result["candle"].LastUpdated).getTime());
		const fiveMinuteDelayUnix = Math.floor(Date.now() - FIVE_MINUTE_DELAY);

		if (LastUpdatedUnix <= fiveMinuteDelayUnix) {
			return await this.addGraph();
		}

		return result;
	};
}

const graphData = async (req, res) => {
	try {
		const stockName = req.query.id;
		//const action = req.query.action;
		const result = new graph(stockName);
		return res.json(await result.getGraphData());
	} catch (error) {
		console.error("error", error);
		return error;
	}
};

module.exports = graphData;
