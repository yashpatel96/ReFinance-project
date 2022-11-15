const express = require("express");
const port = process.env.PORT || "5000";
const cors = require("cors");
require("dotenv").config();
const StockDataRoutes = require("./routes/StockDataRoutes");
const UserDataRoutes = require("./routes/UserDataRoutes");
const NewsDataRoutes = require("./routes/NewsDataRoutes");
const SearchDataRoutes = require("./routes/SearchDataRoutes");
const FavDataRoutes = require("./routes/FavouritesDataRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send("WHATABYTE: Food For Devs");
});

app.use("/stock", StockDataRoutes);
app.use("/user", UserDataRoutes);
app.use("/homenews", NewsDataRoutes);
app.use("/search", SearchDataRoutes);
app.use("/fav", FavDataRoutes);

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
