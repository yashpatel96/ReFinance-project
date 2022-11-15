const { countNews, addHomeNewsDataToDB } = require("../../model/HomeNewsDataModel");
const { getUserRole } = require("../../model/UserDataModel");

class addHomeNews {
	constructor(newsToAdd) {
		this.newsToAdd = newsToAdd;
	}

	checkUserIsAdmin = async () => {
		return await getUserRole(this.newsToAdd.user_email);
	};

    checkNewsDoesNotExist = async () => {
        return await countNews(this.newsToAdd.news_title, this.newsToAdd.news_link)
    }

	addHomeNewsData = async () => {
		if ((await this.checkUserIsAdmin()) && (await this.checkNewsDoesNotExist())) {
			const result = await addHomeNewsDataToDB(this.newsToAdd);
			return result;
		}
		return console.log("false in add here");
	};
}

const addPassedHomeNewsData = async (req, res) => {
	const reqBody = req.body;
	const addData = new addHomeNews(reqBody);
	const result = await addData.addHomeNewsData();

	if (await getUserRole(addData.user_email)) {
		return res.json(result);
	}
	return res.status(400).json("User is not admin to add new Home News to db");
};

module.exports = addPassedHomeNewsData;
