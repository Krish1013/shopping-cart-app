const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Signup
router.post("/", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    username: req.body.username,
    password: hashed
  });
  res.send(user);
});

// Login
router.post("/login", async (req, res) => {
  console.log("LOGIN REQUEST:", req.body);
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid username/password");

  if (user.token) {
    return res.status(403).send("You cannot login on another device");
  }

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).send("Invalid username/password");

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  user.token = token;
  await user.save();

  res.send({ token });
});

// Logout
router.post("/logout", async (req, res) => {
  const user = await User.findOne({ token: req.headers.authorization });
  if (!user) return res.send("Logged out");

  user.token = null;
  await user.save();
  res.send("Logged out");
});

module.exports = router;
