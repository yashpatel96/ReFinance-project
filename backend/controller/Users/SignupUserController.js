//const { countStock, checkFieldExist, findData, updateData } = require("../../model/UserDataModel");
const { addUserToDBND, checkUserInDB } = require("../../model/UserDataModel");

class SignupUser {
	constructor(UserData) {
		this.UserData = UserData;
		this.user_email = UserData.user_email;
		this.user_password = UserData.user_password;
		this.user_cpassword = UserData.user_cpassword;
		this.user_firstname = UserData.user_firstname;
		this.user_lastname = UserData.user_lastname;
		this.user_role = "user";
		this.user_avatar = UserData.user_avatar;
	}

	checkUserExist = async () => {
		return await checkUserInDB(this.user_email);
	};

	validateFields = () => {
		const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
		const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
		const regName = /^[a-zA-Z]+$/;
		let testResult = true;

		if (!regEmail.test(this.user_email)) {
			testResult = false;
		}
		if (!regPassword.test(this.user_password) || this.user_password !== this.user_cpassword) {
			testResult = false;
		}

		if (!regName.test(this.user_firstname)) {
			testResult = false;
		}

		if (!regName.test(this.user_lastname)) {
			testResult = false;
		}

		return testResult;
	};

	checkFieldIsEmpty = () => {
		//return this.user_email || this.user_password || this.user_firstname || this.user_lastname || this.user_role || this.user_avatar;
		return !this.user_email || !this.user_password || !this.user_firstname || !this.user_lastname || !this.user_role || !this.user_avatar;
	};

	addUserData = async () => {
    console.log("H1",!this.checkFieldIsEmpty())
    console.log("H2",this.validateFields())
		if (!this.checkFieldIsEmpty() && this.validateFields()) {
			await addUserToDBND(this.UserData);
		}
		return "false in add user";
	};
}

const getUserDatas = async (req, res) => {
	const reqBody = req.body;
	const getData = new SignupUser(reqBody);

	console.log("checking", await getData.addUserData());

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

/* 
{
  "user_email": "refadd@test.com",
  "user_password": "Hello123@",
  "user_cpassword": "Hello123@",
  "user_firstname": "Sign",
  "user_lastname": "Up",
  "user_avatar": "https://cdn-icons-png.flaticon.com/512/966/966492.png?w=740&t=st=1668203046~exp=1668203646~hmac=d9aa684377dc167df45bc614a56b93a816ea655712f066c75cecbcd12d195787"
}
 */