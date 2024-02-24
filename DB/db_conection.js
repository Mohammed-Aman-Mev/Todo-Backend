const mongoose = require("mongoose");
require("dotenv").config();

const dbConnnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`data base is connected at:${connection.connection.host}`);
  } catch (error) {
    console.error(`Something went wrong in db connection:${error}`);
  }
};

module.exports = dbConnnect;
