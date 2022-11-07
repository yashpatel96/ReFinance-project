const db = require('../model/DBModel').collection("Refinance_Stock");

const checkFieldNotExist = async (stockName, fieldName) => {
	const res = await db.count({ symbol: stockName, [fieldName]: null });
	return res;
};

const getDataApi = async (link) => {
	return await axios
		.get(link)
		.then((response) => {
			//console.log("res", response.data);
			return response.data;
		})
		.catch((err) => console.log(err));
};

const updateStock = async (stockName) => {

}

const getStock = async (stockName) => {
    const isNotField = await checkFieldNotExist(stockName, fieldName);
	if (isNotField === 1) {
		return await updateData(stockName, fieldName);
	}
}

const checkStockExist = async (stockName) => {
	const res = await db.count({ symbol: stockName });
	return res;
};

const addStock = async (stockName) => {
    const isNotStock = await checkStockExist(stockName);
	if (isNotStock === 1) {
		return await updateData(stockName, fieldName);
	}
}

const removeStock = async (stockName) => {
    const isNotStock = await checkStockExist(stockName);
	if (isNotStock === 1) {
		return await updateData(stockName, fieldName);
	}
}

const stockData = async (stockName, action) => {

    if (action === 'getData'){
        return await getStock(stockName);
    }
    else if (action === 'addStock'){
        return await addStock(stockName);
    }
    else if (action === 'removeStock'){
        return await removeStock(stockName);
    }
}

module.exports = stockData;


/* 
const getIndices = (req, res) => {
  res.json(
    "User: Deep",
  )
}

module.exports = {
  getIndices
}
*/

