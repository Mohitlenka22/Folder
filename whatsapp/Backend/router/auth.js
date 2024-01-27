import express from "express";
import bcrypt from "bcryptjs";
import User from "../model/userSchema.js";
import authenticate from "../middlewares/authenticate.js";
import cookieParser from "cookie-parser";


const router = express.Router();


router.post("/register", async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        res.status(404).send("Please FIll feilds");
    }
    try {
        const newuser = await User.findOne({ email: email });
        if (!newuser && (password == cpassword)) {
            const user = User({ name, email, password, cpassword });
            const response = await user.save();
            if (response) {
                res.status(200).send(response);
                console.log(user);
            }
            else {
                res.status(404);
            }
        }
        else {
            res.status(422).send("User already exists");
        }
    }
    catch (err) {
        console.log(err.name);
    }

});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422);
    }
    try {
        const loginUser = await User.findOne({ email: email });
        const response = await bcrypt.compare(password, loginUser.password);
        const token = await loginUser.generateAuthtoken();
        console.log(token);
        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 86400000)
        });

        if (response) {
            res.status(200).send("Successfully Loggedin");
        }
        else {
            res.status(404).send("Invalid Credentials");
        }
        
    }
    catch (err) { console.log(err.name); }

});

router.get("/getdata", authenticate, async (req, res) => {
    res.status(200).send(req.rootUser);
    console.log(req.rootUser);

});

router.patch("/postmsg", async (req, res) => {
    const { name, message } = req.body;
    const msgres = await User.findOneAndUpdate({ name: name }, { $push: { "messages": { message: message } } });
    if (msgres) {
        res.status(200).send(msgres);
    }
    else {
        res.status(422).send("Error");
    }
});

export default router;