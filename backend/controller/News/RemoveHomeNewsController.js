const { countNews, removeHomeNewsDataFromDB } = require("../../model/HomeNewsDataModel");
const { getUserRole } = require("../../model/UserDataModel");

class removeHomeNews {
	constructor(newsToRemove) {
		this.newsToRemove = newsToRemove;
	}

	checkUserIsAdmin = async () => {
		const res = await getUserRole(this.newsToRemove.user_email);
        return res
	};

    checkNewsDoesNotExist = async () => {
        const res = await countNews(this.newsToRemove.news_title, this.newsToRemove.news_link);
        return res;
    }

	removeHomeNewsData = async () => {
		if ((await this.checkUserIsAdmin()) && !(await this.checkNewsDoesNotExist())) {
			const result = await removeHomeNewsDataFromDB(this.newsToRemove);
			return result;
		}
		return console.log("false in remove here");
	};
}

const removePassedHomeNewsData = async (req, res) => {
	const reqBody = req.body;
	const removeData = new removeHomeNews(reqBody);
	const result = await removeData.removeHomeNewsData();

	if (await getUserRole(removeData.user_email)) {
		return await res.json(result);
	}
	return res.status(400).json("User is not admin to remove the Home News from the db");
};

module.exports = removePassedHomeNewsData;
