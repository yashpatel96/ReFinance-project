const express = require("express");
const router = express.Router();
//const axios = require("axios");
const { getIndices } = require("../controller/IndicesController");
router.get("/", getIndices);
/* router.post("/", getIndices);
router.get("/", getIndices);
router.update("/", getIndices);
router.delete("/", getIndices); */

module.exports = router;
