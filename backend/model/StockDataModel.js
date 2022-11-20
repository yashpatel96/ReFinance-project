const db = require("./DBModel").collection("Refinance_Stock");

const countStock = async (stockName) => {
	return await db.countDocuments({ symbol: stockName });
};

const checkFieldExist = async (stockName, fieldName) => {
	return await db.countDocuments({ symbol: stockName, [fieldName]: { $exists: true } });
};

const findData = async (stockName, fieldName) => {
	return await db.findOne(
		{ symbol: stockName },
		{
			projection: {
				description: 1,
				currency: 1,
				mic: 1,
				type: 1,
				[fieldName]: 1,
			},
		}
	);
};

const findStockInfo = async (stockName) => {
	return await db.findOne(
		{ symbol: stockName },
		{
			projection: {
				description: 1,
				currency: 1,
				mic: 1,
				type: 1,
			},
		}
	);
};

const updateData = async (stockName, fieldName, result) => {
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

const addStockDataToDB = async (stockToAdd) => {
	try {
		await db.insertOne({
			currency: stockToAdd.currency,
			description: stockToAdd.description,
			mic: stockToAdd.mic,
			type: stockToAdd.type,
			symbol: stockToAdd.symbol,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
	return true;
};

const findStockToRemove = async (stockName, type, currency) => {
	return (await db.countDocuments({ symbol: stockName, type: type, currency: currency })) === 1;
};

const removeStockDataFromDB = async (stockToRemove) => {
	try {
		await db.deleteOne({
			currency: stockToRemove.currency,
			type: stockToRemove.type,
			symbol: stockToRemove.symbol,
		});
	} catch (e) {
		console.error(e);
		return e;
	}
	return true;
};

module.exports = {
	countStock,
	checkFieldExist,
	findData,
	updateData,
	addStockDataToDB,
	removeStockDataFromDB,
	findStockToRemove,
	findStockInfo,
};
