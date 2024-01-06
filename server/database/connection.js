const mongoose = require("mongoose");

const mongoDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is Connected: ${con.connection.host}`);
  } catch (err) {
    console.log(`Error while connection to database: ${err}`);
    process.exit(1);
  }
};

module.exports = mongoDb;
