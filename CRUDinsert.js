const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
async function insertdata() {
  try {
    const database = client.db("Demo");
    const collection = database.collection("Products");
    const doc = [
      { name: "IQoo 7", brand: "iQoo" },
      { name: "F 15", brand: "Oppo" },
    ];

    const result = await collection.insertMany(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
insertdata().catch(console.dir);
