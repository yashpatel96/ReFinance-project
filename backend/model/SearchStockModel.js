const db = require("./DBModel").collection("Refinance_Stock");

const searchStockModel = async (search_query) => {
	try {
		return await db
			.aggregate([
				{
					$search: {
						index: "forSearch",
						compound: {
							must: [
								{
									text: {
										query: search_query,
										path: ["symbol", "description"],
										fuzzy: {
											maxEdits: 2,
											prefixLength: 4,
										},
									},
								},
							],
						},
					},
				},
				{
					$limit: 10,
				},
				{
					$project: {
						symbol: 1,
						description: 1,
					},
				},
			])
			.toArray();
	} catch (error) {
		console.error(error);
		return error;
	}
};

module.exports = searchStockModel;
