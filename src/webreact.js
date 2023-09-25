var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/websitedb');
var cors = require("cors");
var multer = require('multer');
var upload = multer();


app.use(cors());
app.use(upload.array());

var aboutSchema = mongoose.Schema({
    para: String
});
var contactSchema = mongoose.Schema({
    address: String,
    phone: String,
    email: String,
    linkedin: String
});

var About = mongoose.model("About",aboutSchema);
var Contact = mongoose.model("Contact",contactSchema);

app.use(bodyParser.urlencoded({limit:'50mb' , extended: true}));
app.use(bodyParser.json({limit:'50mb' ,extended: true}));

app.get('/about',function(req,res){
    About.find({}).then((response) =>{
        //console.log(response);
        res.json(response);
    })
});
app.get('/contact',function(req,res){
    Contact.find({}).then((response) =>{
        //console.log(response);
        res.json(response);
    })
});

app.post('/contact',(req,res)=>{
    const formData = req.body;
    console.log(formData);
        
    var mailID = formData.email;
    var yourname = formData.name;
    var subj = formData.subject;
    var mesag = formData.message;

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "cceb14ec27cb5e",
          pass: "aa5e0910e550d5"
        }
      });
    
    var mailoptions = {
        from: mailID,
        to: 'nashvakabeer17@gmail.com',
        subject: subj,
        text:'Name: '+ yourname + ' Message: '+ mesag,
    };
    
    transport.sendMail(mailoptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.json({message: "Email Sent Successfully"})
})


app.listen(8080);