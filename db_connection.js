const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();

const mongoUrl = `${process.env.MONGO_URL}`;

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("mongoDB connected!");
  })
  .catch((error) => {
    console.log("mongoDB Connection error:", error);
});
