const express = require("express");
const router = express.Router();
const getSearchData = require("../controller/Search/SearchStockController");

router.get("/", getSearchData);

module.exports = router;
