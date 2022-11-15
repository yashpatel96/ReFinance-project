const express = require("express");
const router = express.Router();
const addFavouritesData = require("../controller/Favourites/AddFavouritesController");
const removeFavouritesData = require("../controller/Favourites/RemoveFavouritesController");

router.post("/addfav", addFavouritesData);
router.post("/removefav", removeFavouritesData);


/* 
router.post("/addstock", addStockData);
router.post("/", StockDataController);
router.remove("/", StockDataController); */

module.exports = router;
