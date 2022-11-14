const db = require("./DBModel").collection("Refinance_News");

const userExists = async (user_email, password) => {
	return (await db.count({ email: user_email, password: password })) === 1;
};

const getUser = async (user_email, user_password) => {
	try {
		return await db.findOne(
			{ email: user_email, password: user_password },
			{
				projection: {
					email: 1,
					firstname: 1,
					avatar: 1,
					role: 1,
				},
			}
		);
	} catch (e) {
		return false;
	}
};

const getUserRole = async (user_email) => {
	if (await db.count({ email: user_email, role: "admin" })) {
		return true;
	}
	return false;
	// Can add first Name and last Name to be sure
	// return await db.count({ email: userEmail, role: "admin"}) === 1 ? true : false;
};

module.exports = {
	getUserRole,
	getUser,
};
