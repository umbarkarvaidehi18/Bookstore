import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
    console.log(
      "database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("error in connecting database");
    process.exit(1);
  }
};

export default connectdb;
