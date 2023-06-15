const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  db = result.db("Demo");
  collection = db.collection("Products");
  let response = await collection.find({}).toArray();

  console.log(response);
}

getData();