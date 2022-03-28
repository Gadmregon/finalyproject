const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "test";

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
      const result = bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
          email: email,
          password: hash,
          isBlocked: false,
          isAdmin: false,
        });

        const token = jwt.sign({ email: result.email, id: result.id }, secret, {
          expiresIn: "1h",
        });

        res.status(201).json({ result, token });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const candidate = await User.findOne({ where: { email } }).catch(
        (err) => {
          console.log(err);
        }
      );

      if (!candidate)
        return res.status(404).json({ message: "User doesn't exist" });

      const isPasswordCorrect = await bcrypt.compare(
        password,
        candidate.password
      );

      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { email: candidate.email, id: candidate.id },
        secret,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: candidate, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
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
