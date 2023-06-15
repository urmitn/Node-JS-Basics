const express = require("express");
const sqlConnection = require("./configmysql");
const app = express();

app.get("/", (req, resp) => {
  sqlConnection.query("select * from products", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

app.listen(3000);
