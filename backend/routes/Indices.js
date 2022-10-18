const express = require("express");
const router = express.Router();
//const axios = require("axios");
const { getIndices } = require("../controller/IndicesController");

router.get("/", getIndices);

module.exports = router;
