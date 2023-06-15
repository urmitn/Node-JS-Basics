const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function deletedata() {
  try {
    const database = client.db("Demo");
    const collection = database.collection("Products");
    const query = { name: "V 17" };
    const result = await collection.deleteMany(query);
    if (result.deletedCount >= 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
deletedata().catch(console.dir);