const express = require("express");
const router = express.Router();
const stockData = require("../controller/StockDataController");

router.get("/", async(req, res) => {
    const stockName = req.query.stockName;
    const action = req.query.action;
    return res.json(await stockData(stockName, action));
});

/* router.get("/home", async (req, res) => {
    const stockName = req.query.stockName;
    const action = req.query.action;
    const home = "home";
    return res.json(await stockData(stockName, action, home));
}); */


module.exports = router;