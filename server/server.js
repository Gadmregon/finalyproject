const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3500;
const db = require("./models");

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

const start = async () => {
  try {
    await db.sequelize.sync().then(() => {
      app.listen(port, () => {
        console.log(`App listen on port ${port}`);
      });
    });
  } catch (e) {
    console.log("Server error", e.message);
  }
};

start();
