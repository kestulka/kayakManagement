const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`database sucessfully connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
