var client = require("./DBModel");
const db = client.db("Refinance"); //.collection("Refinance_Stock")

const StockSchema = db.model("Refinance_Stock", {
	currency: String,
	description: String,
	displaySymbol: String,
	figi: String,
	isin: String,
	null: String,
	mic: String,
	shareClassFIGI: String,
	symbol: String,
	symbol2: String,
	type: String,
	candle: Object,
	news: Object,
	LastUpdated: Date,
	change: String,
	open: String,
	percent_change: String,
});

module.exports = StockSchema;
