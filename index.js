const express = require("express");
const dbConnnect = require("./DB/db_conection");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

// database connection

dbConnnect();

app.get("/", (res, req) => {
  req.json({
    message: "hellow from backend",
  });
});

app.listen(port, () => {
  console.log(`server is runing at port:${port}`);
});
