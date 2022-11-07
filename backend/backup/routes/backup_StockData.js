const express = require("express");
const router = express.Router();
const { getStock } = require("../controller/Stock/StockDataController");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
require("dotenv").config();
const db = client.db("Refinance").collection("stock");
const stockName = "CAL";

router.get("/", async (req, res) => {
	const result = await db.findOne({ symbol: stockName });
	return res.json(result);
});

const stockName1 = "PNTG";
router.get("/hello", async (req, res) => {
	const result = await db.findOne({ symbol: stockName1 });
	return res.json(result);
});

router.get("/test", getStock);

module.exports = router;
