const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Demo");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const Create = async () => {
  const Product = mongoose.model("products", productSchema); //if you want to save in existing collection then add "collection name" at last
  let data = new Product({
    name: "max 10",
    price: 200,
    brand: "maxx",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};

const Update = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "max 100" },
    {
      $set: { price: 550, name: "max pro 6" },
    }
  );
  console.log(data);
};

const Delete = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "max 100" });
  console.log(data);
};
const Read = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "max 10" });
  console.log(data);
};

Read();
