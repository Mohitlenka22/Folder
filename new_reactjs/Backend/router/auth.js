import express from "express";
import User from '../model/dbUsers.js';
// import db from '../server'

const router = express.Router();

// Using promises

// router.post('/register', (req, res) => {

//     const { name, email, password, confpassword } = req.body;

//     if (!name || !email || !password || !confpassword){
//         res.status(404).send('Not created');
//     }

//     User.findOne({email:email}).then((Userexist)=>{
//         if(Userexist){
//             res.status(500).send('Email already taken')
//         }
//         else{
//         const newuser = new User( { name, email, password, confpassword });
//         newuser.save().then((data)=>res.status(201).send(data)).catch(err=>res.status(500).send(err))
//         }
//     })
//     // another way of creating user
//     // const dbUser = req.body;

//     //   User.create(dbUser, (err, data) => {
//     //       if (err) {
//     //           res.status(500).send(err);
//     //       }
//     //       else {
//     //           res.status(201).send(data);
//     //       }
//     //   })

// });
router.get('/',(req,res)=>{
    User.findOne({name:"mern"},(err,docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log("erore");
        }
    })
})

//Using async
router.post('/register', async (req, res) => {
    const { name, email, password, confpassword,jobs} = req.body;
  console.log(jobs.length);
    if (!name || !email || !password || !confpassword) {
        res.status(404).send('Not created');
    }
    try {
        const find_response = await User.findOne({ email: email });

        if (find_response) {
            res.status(400).send('User already exists');
        }

        const newuser = new User({ name, email, password, confpassword,jobs });
           
        // Hashing see in dbusers
        
        const data = await newuser.save();
        res.status(201).send(data);

    } catch (err) {
      res.status(500).send(err.name);
    }

});

//login route

router.post('/login',async (req,res)=>{
   
    const {email,password}=req.body;

    if (!email,!password){
        res.status(500).send('plz fill fields');
    }
    try{
        const login_response= await User.findOne({email:email}); //login_response return all document with that mail
        console.log(login_response);
        if (login_response.email && login_response.password){
            const token = await login_response.generateAuthToken();
            res.status(200).send('loggedin') 
            res.cookie("jwt","swaroop");   
            console.log(token);
        }
        else{
            res.status(500).send('no details');

        }

    }catch(err){
            res.status(500).send('no details');
    }



})


export default router;