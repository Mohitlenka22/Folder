import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// DB schema
const userSchema =mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confpassword:{type:String,required:true},
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    jobs:[
        {
            role:{
                type:String,
                required:true
            },
            user:[
                {
                  name:{
                      type:String,
                      required:true
                  }
                }
            ],
            link :{
                type:String,
                required:true
            },
            insights:{
                type:String,
                required:true
            }
        }
    ]

});

userSchema.pre('save',async function(next){
       if (this.isModified('password')){

           this.password = await bcrypt.hash(this.password,12);
           this.confpassword =await bcrypt.hash(this.confpassword,12);
           next();  
       }
});

userSchema.methods.generateAuthToken = async function()
{
    try {
    let token=jwt.sign({_id:this.id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
    this.save();
    return token;
    }
    catch(err){
      console.log(err);
    }
}

const User = mongoose.model('users',userSchema);

export default User;

