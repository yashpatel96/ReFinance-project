//const { countStock, checkFieldExist, findData, updateData } = require("../../model/UserDataModel");
const { addUserToDBND, checkUserInDB } = require("../../model/UserDataModel");

class SignupUser {
	constructor(UserData) {
		this.UserData = UserData;
		this.user_email = UserData.user_email;
		this.user_firstname = UserData.user_firstname;
		this.user_lastname = UserData.user_lastname;
		this.user_avatar = UserData.user_avatar;
	}

	checkUserExist = async () => {
		return await checkUserInDB(this.user_email);
	};

	addUserData = async () => {
		/* const userExist = await this.checkUserExist();
		console.log("User", userExist); */
			return await addUserToDBND(this.UserData);
	};
}

const getUserDatas = async (req, res) => {
	const reqBody = req.body;
	const getData = new SignupUser(reqBody);
	
	return res.json(await getData.addUserData());
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
