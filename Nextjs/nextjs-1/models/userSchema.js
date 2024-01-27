import mongoose from "mongoose";
import connectDB from "../connect";

const userSchema = new mongoose.Schema({
    name : String,
    email : String
});

connectDB()

export default mongoose.model("users", userSchema);
