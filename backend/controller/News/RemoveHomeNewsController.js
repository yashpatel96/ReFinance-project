const { countNews, removeHomeNewsDataFromDB } = require("../../model/HomeNewsDataModel");
const { getUserRole } = require("../../model/UserDataModel");

class removeHomeNews {
	constructor(newsToRemove) {
		this.newsToRemove = newsToRemove;
	}

	checkUserIsAdmin = async () => {
		const res = await getUserRole(this.newsToRemove.user_email);
		return res;
	};

	checkNewsDoesNotExist = async () => {
		const res = await countNews(this.newsToRemove.news_title, this.newsToRemove.news_link);
		return res;
	};

	removeHomeNewsData = async () => {
		if ((await this.checkUserIsAdmin()) && !(await this.checkNewsDoesNotExist())) {
			const result = await removeHomeNewsDataFromDB(this.newsToRemove);
			return result;
		}
		return error;
	};
}

const removePassedHomeNewsData = async (req, res) => {
	const reqBody = req.body;
	const removeData = new removeHomeNews(reqBody);
	try {
		await removeData.removeHomeNewsData();
		return res.status(200).json({ status: "ok" });
	} catch {
		return res.status(400).json("Not Added to Home News");
	}
	
};

module.exports = removePassedHomeNewsData;
