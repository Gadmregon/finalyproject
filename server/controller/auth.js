const { User } = require("../models");
const bcrypt = require("bcrypt");

class auth {
  async reg(req, res) {
    const { email, password } = req.body;

    try {
      const candidate = await User.findOne({ where: { email } }).catch(
        (err) => {
          console.log(err);
        }
      );
      if (candidate) {
        return res.status(400).json({ message: "email exists" });
      }
      bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
          email: email,
          password: hash,
          isBlocked: false,
          isAdmin: false,
        });

        res.json("registered successfully");
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Reg error" });
    }
  }

  async login(req, res) {
    try {
    } catch (error) {}
  }

  async users(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}

module.exports = new auth();
