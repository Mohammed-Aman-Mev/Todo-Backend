const express = require("express");

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (res, req) => {
  res.json({
    message: "hellow from backend",
  });
});

app.listen(port, () => {
  console.log(`server is runing at port:${port}`);
});
