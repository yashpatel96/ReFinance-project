//const { countStock, checkFieldExist, findData, updateData } = require("../../model/UserDataModel");
const { getUserDataFromDB, comparePassword } = require("../../model/UserDataModel");

class loginUser {
	constructor({ user_email, user_password }) {
		this.user_email = user_email;
		this.user_password = user_password;
	}

	checkPasswordMatchWithDB = async () => {
		return await comparePassword(this.user_email, this.user_password);
	};

	getUserData = async () => {
		if (await this.checkPasswordMatchWithDB()) {
			return await getUserDataFromDB(this.user_email, this.user_password);
		}
		return false;
	};

	/* addUser = async () => {
		return await addUserToDBND(this.user_email, this.user_password);
	} */
}

const getUserDatas = async (req, res) => {
	const reqBody = req.body;
	const getData = new loginUser(reqBody);

	console.log("checking", await getData.getUserData());

	const stockName = reqBody.user_password;
	const userEmail = reqBody.user_email;
	return await res.json(`The stock pass: ${stockName} has been added to the database, userEmail=${userEmail}!`);
	//return res.status(400).json("User is not admin to add new stock to the db");
	//const hello = Object.keys(stockToAdd).map((key, index) => {return stockToAdd[key]});
	// console.log(hello)
	//const result = new addStock(stockName, stockToAdd);
	//.status(200)
};

module.exports = getUserDatas;
