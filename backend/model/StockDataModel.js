const db = require("./DBModel").collection("Refinance_Stock");

const countStock = async (stockName) => {
	return await db.count({ symbol: stockName });
};

const checkFieldExist = async (stockName, fieldName) => {
	return await db.count({ symbol: stockName, [fieldName]: { $exists: true } });
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
	try{
		await db.insertOne( { 
			currency: stockToAdd.currency,
			description: stockToAdd.description,
			mic: stockToAdd.mic,
			type: stockToAdd.type, 
			symbol: stockToAdd.symbol,
		});
	}	
	catch (e) {
		console.error(e);
		return false;
	 };
	return true;
}

const removeStockDataFromDB = async (stockToAdd) => {
	try{
		await db.deleteOne( { 
			currency: stockToAdd.currency,
			type: stockToAdd.type, 
			symbol: stockToAdd.symbol,
		});
	}	
	catch (e) {
		console.error(e);
		return false;
	 };
	return true;
}

module.exports = {
	countStock,
	checkFieldExist,
	findData,
	updateData,
	addStockDataToDB,
	removeStockDataFromDB,
};
