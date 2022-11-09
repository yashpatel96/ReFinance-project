const db = require("./DBModel").collection("Refinance_Stock");

const countStock = async (stockName) => {
	return await db.count({ symbol: stockName });
};

const checkFieldExist = async (stockName, fieldName) => {
	return await db.count({ symbol: stockName, [fieldName]: { $exists: true } });
};

const findData = async (stockName) => {
	return await db.findOne({ symbol: stockName });
};

const updateData = async (stockName, fieldName) => {
	return await db.updateOne(
		{ symbol: stockName },
		{
			$set: {
				[fieldName]: { result, LastUpdated: new Date(Date.now()) },
			},
		},
		{ upsert: true }
	);
};

module.exports = {
	countStock,
	checkFieldExist,
	findData,
	updateData,
};
