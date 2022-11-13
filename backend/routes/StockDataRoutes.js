const express = require("express");
const router = express.Router();
const getStockData = require("../controller/Stock/GetStockDataController");
const addStockData = require("../controller/Stock/AddStockDataController");
const removeStockData = require("../controller/Stock/RemoveStockDataController");

router.get("/", getStockData);
router.post("/addstock", addStockData);
router.post("/removestock", removeStockData);
/* router.post("/", StockDataController);
router.remove("/", StockDataController); */

module.exports = router;
