//const { countStock, checkFieldExist, findData, updateData } = require("../../model/UserDataModel");
const { getUserDataFromDB, comparePassword } = require("../../model/UserDataModel");

class loginUser {
	constructor({ user_email }) {
		this.user_email = user_email;
	}

	getUserData = async () => {
		return await getUserDataFromDB(this.user_email);
	};
}

const getUserDatas = async (req, res) => {
	const reqBody = req.body;
	const getData = new loginUser(reqBody);

	return res.json(await getData.getUserData());
	//return res.status(400).json("User is not admin to add new stock to the db");
	//.status(200)
};

module.exports = getUserDatas;
