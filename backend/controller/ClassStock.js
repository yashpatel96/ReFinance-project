const db = require("../model/DBModel");

class stock {
	constructor(stockName) {
		this.stockName = stockName;
	}

	getDataApi = async (link) => {
		return await axios
			.get(link)
			.then((response) => {
				//console.log("res", response.data);
				return response.data;
			})
			.catch((err) => console.log(err));
	};

	checkStockExist = async () => {
		const res = await db.count({ symbol: stockName });
		return res > 0;
	};

	checkFieldNotExist = async () => {
		const res = await db.count({ symbol: this.stockName, stockData: { $exists: true } });
		return res === 0;
	};

	getStockData = async () => {
		const dataLink = `https://finnhub.io/api/v1/quote?symbol=${this.stockName}&token=${process.env.FINHUB_API_KEY}`;
		return await getDataApi(dataLink);
	};

	searchStockData = async () => {
		const res = await db.findOne({ symbol: this.stockName });
		return res; // res[stockData]
		//, { projection: {currency: 1, description: 1}}
		//, projection: {stockData: 1}
	};

	addStockData = async () => {};

	getStockData = () => {};
}

const stockData = async (stockName) => {
	try {
		const result = new stock(stockName);
		return res.json(await result.getStockData());
	} catch (error) {
		console.error("error", error);
		return error;
	}
};



module.exports = stockData;

/* addData = async (data) => {
    if(!this.checkStockExist()){
      return await 
    }
    else {
      return "Error Occured";
    }
  };

	removeData = (data = "") => {}; */

/* 

class graph {
	constructor(stockName) {
		this.stockName = stockName;
	}

	getDataAPI = async (link) => {
		return await axios
			.get(link)
			.then((response) => {
				//console.log("res", response.data);
				return response.data;
			})
			.catch((err) => console.log(err));
	};

	checkStockExist = async () => {
		const res = await db.count({ symbol: stockName });
		return res > 0;
	};

	checkFieldExist = async () => {
		const res = await db.count({ symbol: stockName, candle: null });
		return res;
	};

	getNewGraphData = async () => {
		const startDate = Math.floor(Date.now() / 1000 - 432000);
		const endDate = Math.floor(Date.now() / 1000);
		const dataLink = `https://finnhub.io/api/v1/stock/candle?symbol=${this.stockName}&resolution=5&from=${startDate}&to=${endDate}&token=${process.env.FINHUB_API_KEY}`;
		return await getDataApi(dataLink);
	};

	searchData = async () => {
		const res = await db.findOne({ symbol: this.stockName });
		return res; // res[candle]
		//, { projection: {currency: 1, description: 1}}
		//, projection: {candle:1}
	};

	addGraph = async () => {
		const result = await this.getNewGraphData;
		if (result !== {} || result !== "" || result !== null) {
			await db.updateOne(
				{ symbol: stockName },
				{
					$set: {
						candle: { result, LastUpdated: new Date(Date.now()) },
					},
				},
				{ upsert: true }
			);
		}
		const res = await this.searchData;
		return res;
	};

	getGraphData = async () => {
		if (this.checkStockExist && !this.checkFieldExist) {
			return await this.addGraph;
		}

		const result = await this.searchData;
		const FIVE_MINUTE_DELAY = 300000;
		const LastUpdatedUnix = Math.floor(new Date(result[candle].LastUpdated).getTime());
		const fiveMinuteDelayUnix = Math.floor(Date.now() - FIVE_MINUTE_DELAY);

		if (LastUpdatedUnix <= fiveMinuteDelayUnix) {
			return await this.addGraph;
		}

		return result;
	};
}

const graphData = async (stockName) => {
	try {
		const result = new graph(stockName);
		return result.getGraphData;
	} catch (error) {
		console.error("error", error);
		return error;
	}
};

module.exports = graphData;


*/
