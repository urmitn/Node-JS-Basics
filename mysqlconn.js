const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
});

// con.connect((err) => {
//   if (err) {
//     console.warn("not connect");
//   } else {
//     console.warn("connected!!!");
//   }
// });

con.query("select * from products",(err,result)=>{
  if(err)
  {
    console.warn("some error")
  }
  else{
    console.warn(result)
  }
})
