import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

const authenticate  = async(req,res,next)=>{
    let token  = await req.cookies.jwttoken;
    const verifytoken = jwt.verify(token,"qwerty");
    const rootUser = await User.findOne({_id:verifytoken._id,"tokens.token":token});
    if(!rootUser){throw new Error("Not found")};
    
    req.token = token;
    req.USERID = rootUser._id;
    req.rootUser = rootUser;

    next();
}

export default authenticate;