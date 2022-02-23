const express = require("express");
const app = express();

app.get("/hello", (req, res, next) => {
  res.send("Hello");
  console.log("lox");
});

app.listen(4000, () => {
  console.log("Great");
});
