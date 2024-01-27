import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://Web3:3rzxdUBUrio96jjh@cluster0.1x8ryso.mongodb.net/?retryWrites=true&w=majority")
}

export default connectDB;