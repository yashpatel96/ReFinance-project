const express = require("express");
const port = process.env.PORT || "5000";
const cors = require("cors");
const StockDataRoutes = require("./routes/StockDataRoutes");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
	res.status(200).send("WHATABYTE: Food For Devs");
});

app.use("/stock", StockDataRoutes);

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
