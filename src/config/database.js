const mongoose = require("mongoose");

//Connecting to the Database
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shazzfazneem:BYFezpZ20vjrkxG8@developertinder.vmr4t8k.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
