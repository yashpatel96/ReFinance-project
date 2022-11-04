const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
require("dotenv").config();
const db = client.db("Refinance").collection("stock");

const getStock = async (req, res) => {
	const api = new testingProxy();
  const result = await api.findValue("CAL");
	res.json(result);
};

function testing() {
	this.findValue = async function (stockName) {
		console.log("External call");
		const result = await db.findOne({ symbol: stockName });
		return result;
	};
}

function testingProxy() {
  this.api = new testing();
  this.cache = {};
	this.findValue = async function (stockName) {
    console.log("Before", this.cache);
    if(this.cache[stockName] == null){
      this.cache[stockName] = await this.api.findValue(stockName);
    }
    //console.log("After", this.cache);
    return this.cache[stockName];
/* 		console.log("External call");
		const result = await db.findOne({ symbol: stockName });
		return result; */
	};
}

/* 
router.get("/hello", async (req, res) => {
	const result = await db.findOne({ symbol: stockName });
	return res.json(result);
}); */

module.exports = {
	getStock,
};
