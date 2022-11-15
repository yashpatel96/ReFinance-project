const SearchStockModel = require("../../model/SearchStockModel");

const searchStockData = async (req, res) => {
	const result = await SearchStockModel(req.query.q);
	return res.send({ q: result });
};
module.exports = searchStockData;
