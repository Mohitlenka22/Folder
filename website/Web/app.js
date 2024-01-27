const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){

        res.end(home);
    }
  else if(url == '/about'){

        res.end(about);
    }
   else if(url == '/contact'){

        res.end(contact);
    }
   else if(url == '/services'){

        res.end(services);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 NOT FOUND</h1>");

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

const express = require('express');
const path = require('path');

const app = express();


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
    fs.writeFileSync('output.txt',outputtowrite)
    const params = {'message':'Your Form has been submitted successfully!!'}
    res.status(200).render('index.pug',params)

})

app.listen(port,()=>{
    console.log(`The application started successfully on ${port}`)
})