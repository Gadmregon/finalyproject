const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const mysql = require("mysql2");

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
