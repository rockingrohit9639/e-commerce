const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(() => console.log("Connection Success"))
  .catch((err) => console.log(err));
