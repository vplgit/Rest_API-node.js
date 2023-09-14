import mongoose from "mongoose";
require("dotenv").config(".env");
const mongoDbUrl: string =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/User_mgmt";
export const connectDb = () => {
  try {
    mongoose.connect(mongoDbUrl);
    const db = mongoose.connection;

    db.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    db.on("error", (err) => {
      console.log("MongoDB connection error:", err);
    });

    db.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.log("Error :", error);
  }
};
