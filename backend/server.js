const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


app.use("/users", require("./routes/userRoutes"));

app.use("/carts", require("./routes/cartRoutes"));
app.use("/orders", require("./routes/orderRoutes"));
