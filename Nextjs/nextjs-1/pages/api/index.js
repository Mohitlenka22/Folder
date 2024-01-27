import User from "../../models/userSchema";

const handler =async (req, res)=>{
    const {name, email} = req.body;
    let p = await User({name, email})
    p.save();
}

export default handler;