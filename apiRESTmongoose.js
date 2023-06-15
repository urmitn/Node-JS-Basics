const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());

app.post("/", async (req, resp) => {
  let data = new Product(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.listen(3000);
