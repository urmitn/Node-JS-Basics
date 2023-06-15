const express = require("express");
const sqlConnection = require("./configmysql");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  sqlConnection.query("select * from products", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body;
  sqlConnection.query(
    "INSERT INTO products SET ?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      resp.send(result);
    }
  );
});

app.put("/:id", (req, resp) => {
  const data = [req.body.model, req.body.brand, req.body.price, req.params.id];
  sqlConnection.query(
    "UPDATE products SET model=?, brand=?, price=? where product_id=?",
    data,
    (error, result, fields) => {
      if (error) throw error;
      resp.send(result);
    }
  );
});

app.delete("/:id", (req, resp) => {
  sqlConnection.query(
    "DELETE FROM products where product_id=" + req.params.id,
    (error, result) => {
      if (error) throw error;
      resp.send(result);
    }
  );
});

app.listen(3000);
