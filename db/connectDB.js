const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://localhost:27017/ticket_booking`
    );
    console.log(
      `MongoDB Connected: ${conn.connection.host}/${conn.connection.port}/${conn.connection.name}`
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
