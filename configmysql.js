const mysql = require("mysql");
const sqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
});

sqlConnection.connect((err) => {
  if (err) {
    console.warn("error in connection");
  }
});

module.exports = sqlConnection;
