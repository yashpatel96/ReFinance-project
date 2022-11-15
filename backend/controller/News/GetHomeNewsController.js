const { getHomeNews } = require("../../model/HomeNewsDataModel");

const getHomeNewsData = async (req, res) => {
	const result = await getHomeNews();
	return res.json(result);
};

module.exports = getHomeNewsData;
