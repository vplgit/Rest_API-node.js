import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  contact: { type: String, unique: true },
  birthDate: String,
  username: String,
  password: String,
});
export const User = mongoose.model("User", userSchema);
