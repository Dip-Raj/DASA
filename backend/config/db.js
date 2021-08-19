// Create connection
import express from "express";
import mysql from "mysql";

// create connection
// const db = mysql.createConnection({
//   host: "us-cdbr-east-04.cleardb.com",
//   user: "b702487e444bfb",
//   password: "483da5ae",
//   database: "heroku_47127d54d2fe52b",
//   multipleStatements: true,
// });
const db = mysql.createConnection({
  host: "qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "qzrzyozkpd5jpkje",
  password: "e54goc33haxx6zyc",
  database: "b9k1whctqj9c8e5j",
  multipleStatements: true,
});

// const db = mysql.createConnection(process.env.JAWSDB_URL);
// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});
export default db;
