const express = require("express");
const port = process.env.PORT || "5000";
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
	res.status(200).send("WHATABYTE: Food For Devs");
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
