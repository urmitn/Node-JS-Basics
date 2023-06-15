const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    const database = client.db("Demo");
    const collection = database.collection("Products");
    const result = await collection.updateOne(
      { name: "A 34" },
      {
        $set: {
          name: "S 23",
        },
      }
    );
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
