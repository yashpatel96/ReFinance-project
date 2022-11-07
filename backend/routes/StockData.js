const express = require("express");
const router = express.Router();
const stockData = require("../controller/StockDataController");

router.get("/", (req, res) => {
    
    const stockName = req.query.stockName;
    const action = req.query.action;
    return res.json(stockData(stockName, action));
});

module.exports = router;