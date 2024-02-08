const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ name: name });
    const existingEmail = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken." });
    }

    if (existingEmail) {
      return res.status(400).json({ error: "this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPass,
    });

    return res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
      $or: [{ email: username }, { name: username }],
    });

    if (!user) {
      return res.json({
        message: "No user found",
      });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.json({
          error: err,
        });
      }
      if (result) {
        let token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res.json({
          message: "Login Successful!",
          token,
        });
      } else {
        res.json({
          message: "Password wrong!",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
