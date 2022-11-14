const express = require("express");
const router = express.Router();
//const addStockData = require("../controller/AddStockDataController");
//const getStockData = require("../controller/GetStockDataController");
const getUserData = require("../controller/Users/LoginUserController");
const addUserData = require("../controller/Users/SignupUserController");

router.post("/", getUserData);
router.post("/signup", addUserData);


/* router.get("/", getStockData);
router.post("/addstock", addStockData);
router.post("/", StockDataController);
router.remove("/", StockDataController); */

module.exports = router;
