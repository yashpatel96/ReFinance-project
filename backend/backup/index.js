const express = require("express");
const port = process.env.PORT || "5000";
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const News = require("./routes/News");
const Search = require("./routes/Search");
const StockData = require("./routes/backup_StockData");
const User = require("./routes/User");

app.get("/", (req, res) => {
	res.status(200).send("WHATABYTE: Food For Devs");
});

app.use("/news", News);
app.use("/search", Search);
app.use("/stock", StockData);
app.use("/user", User);

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
