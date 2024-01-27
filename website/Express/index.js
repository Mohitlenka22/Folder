const express = require('express');
const  fs  = require('fs');
const path = require('path');

const app = express();

const port = 800;
// for Serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded())

//set the template engine as pug
app.set('view engine','pug');

//set views
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    const con = "This is best framework"
    const params = {'title':'NETCET','content':con}
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    text=req.body.hall
    date=req.body.dob
    let outputtowrite=`The Hall no: ${text} and DOB: is ${date}`
    fs.writeFileSync('data.txt',outputtowrite)
    const params = {'message':'Your Form has been submitted successfully!!'}
    res.status(200).render('index.pug',params)

})

//our pug endpoints
// app.get('/demo',(req,res)=>{
//     res.status(200).render('demo',{title: "hey"  ,message:"hello there is pug!"})
// })


// app.get("/",(req,res)=>{
//     res.send("my web")
// });

app.listen(port,()=>{
    console.log(`The application started successfully on ${port}`)
})