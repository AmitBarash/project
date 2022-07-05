const express = require('express');
const path = require('path');
const res = require('express/lib/response');
const app = express();

app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname , 'public')));

app.listen(3000 , () => {
    console.log('server is listening on port 3000');
});
app.get('/' , (req , res) => {
    res.status(200).render('homePage');
});
app.get('/about' , (req , res) => {
    res.status(200).render('about');
});
app.get('/events' , (req , res) => {
    res.status(200).render('events');
});
app.get('/products' , (req , res) => {
    const object = req.query;
    // const link1;
    // const img1;
    // const foodName1;
    // const price1;
    // const descrption1;
    res.status(200).render('products');
});
app.use((req , res) => {
    res.status(404).send("404 page");
});