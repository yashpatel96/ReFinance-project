require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();

const db = client.db("Refinance");
// .collection("Refinance_Stock")

module.exports = client;
