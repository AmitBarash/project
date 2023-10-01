const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use('/fa', express.static(__dirname + '/node_modules/font-awesome/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://amitbar2005:barnashiko2005@purplemacaronbakery.sq1i3fx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

    const newsLetterCollection = client.db("purpleMacaronBakery").collection("newsLetterUser");
    function sendMail(emailAddress , name) {
        let nodemailer = require('nodemailer');


        let smtpConfig = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'amit.ba2017@leyada.net',
                pass: process.env.PASSWORD
            }
        };
        let transporter = nodemailer.createTransport(smtpConfig);

        let mailOptions = {
        from: 'amit.ba2017@leyada.net',
        to: emailAddress,
        subject: 'Sending Email using Node.js',
        text: 'Hi ' + name + '!Thank you for joining us!'
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    }
    app.listen(3000 , () => {
        console.log('server is listening on port 3000');
    });
    app.get('/' , (req , res) => {
        res.status(200).render('homePage');
    });
    app.get('/about' , (req , res) => {
        res.status(200).render('about');
    });
    app.post('/about-post' , (req , res) => {
            newsLetterCollection.insertOne(req.body);
            sendMail(req.body.emailAddress , req.body.firstName);
        
        res.redirect('/about');
    });
    app.get('/events' , (req , res) => {
        res.status(200).render('events');
    });
    app.get('/products' , (req , res) => {
        res.status(200).render('products');
    });
    app.get('/cart' , (req , res) => {
        res.status(200).render('cart');
    })
    app.use('*' , (req , res) => {
        res.status(404).send("404 page");
    });
    client.close();
});
