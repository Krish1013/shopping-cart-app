const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  status: { type: String, default: "ACTIVE" }
});

module.exports = mongoose.model("Item", itemSchema);
