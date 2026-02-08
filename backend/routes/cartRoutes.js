const router = require("express").Router();
const auth = require("../middleware/auth");
const Cart = require("../models/Cart");

router.post("/", auth, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user._id });

  if (!cart) {
    cart = await Cart.create({
      userId: req.user._id,
      items: []
    });
  }

  cart.items.push(req.body.itemId);
  await cart.save();

  res.send(cart);
});

router.get("/", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  res.send(cart);
});

module.exports = router;
