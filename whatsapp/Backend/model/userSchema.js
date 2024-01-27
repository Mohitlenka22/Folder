import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({

    name: { type: String },
    email: { type: String },
    password: { type: String },
    cpassword: { type: String },
    tokens: [
        {
            token: { type: String }
        }
    ],
    messages:[
        {
            message :{type:String},
        }
    ]
});

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
        next();
    }
});

UserSchema.methods.generateAuthtoken = async function () {
    let token = await jwt.sign({ _id: this._id }, "qwerty");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;

}

const User = mongoose.model("whatusers", UserSchema);


export default User;