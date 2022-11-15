const db = require("./DBModel").collection("Refinance_User");
const bcrypt = require("bcrypt");

const getUserRole = async (user_email) => {
	if (await db.count({ email: user_email, role: "admin" })) {
		return true;
	}
	return false;
	// Can add first Name and last Name to be sure
	// return await db.count({ email: userEmail, role: "admin"}) === 1 ? true : false;
};

const checkUserInDB = async (user_email) => {
	return (await db.count({ email: user_email })) === 0;
	// Can add first Name and last Name to be sure
	// return await db.count({ email: userEmail, role: "admin"}) === 1 ? true : false;
};

const HashPasword = async (user_password) => {
	return await bcrypt.hash(user_password, 12);
};

const getUserPassword = async (user_email) => {
	try {
		return await db.findOne(
			{ email: user_email },
			{
				projection: {
					password: 1,
				},
			}
		);
	} catch (e) {
		return false;
	}
};

const comparePassword = async (user_email, user_password) => {
	const res = await getUserPassword(user_email);
	const isMatch = await bcrypt.compare(user_password, res.password);
	return isMatch;
};

const getUserDataFromDB = async (user_email) => {
	try {
		return await db.findOne(
			{ email: user_email },
			{
				projection: {
					email: 1,
					firstname: 1,
					avatar: 1,
					role: 1,
					favourites: -1,
				},
			}
		);
	} catch (e) {
		return false;
	}
};

const addUserToDBND = async (userToAdd) => {
	const hashedPassword = await HashPasword(userToAdd.user_password);
	userToAdd.user_password = hashedPassword;
	try {
		return await db.insertOne({
			email: userToAdd.user_email,
			firstname: userToAdd.user_firstname,
			lastname: userToAdd.user_lastname,
			password: userToAdd.user_password,
			avatar: userToAdd.user_avatar,
			role: "user",
			favourites: [],
		});
	} catch (e) {
		console.error(e);
		return false;
	}
};

module.exports = {
	getUserRole,
	checkUserInDB,
	getUserDataFromDB,
	getUserPassword,
	comparePassword,
	addUserToDBND,
};
