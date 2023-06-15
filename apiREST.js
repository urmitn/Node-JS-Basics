const express = require("express");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb");

const app = express();
const port = 3000;

app.use(express.json());

const uri = "mongodb://127.0.0.1:27017";
const dbName = "Demo";

// GET api

app.get("/", async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection("Products");

    const data = await collection.find().toArray();
    res.json(data);

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST api

app.post("/", async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection("Products");

    const newDocument = req.body;

    const result = await collection.insertOne(newDocument);
    console.log("Document inserted:", result.insertedId);

    await client.close();

    res.status(201).json({ message: "Document inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// PUT api

app.put("/:model", async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection("Products");

    const newDocument = req.body;

    const result = await collection.updateOne(
      { model: req.params.model },
      { $set: req.body }
    );

    await client.close();

    res.status(201).json({ message: "Document updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// DELETE api

app.delete("/:id", async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection("Products");

    const result = await collection.deleteOne({
      _id: new mongodb.ObjectId(req.params.id),
    });

    await client.close();

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
