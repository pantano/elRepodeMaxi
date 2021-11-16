require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT;

//Middlewares
app.use(express.static('public')); // contenido estático
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./routes/routes'));

//Settings
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

//Partials
hbs.registerPartials(__dirname +'/views/partials/');


//Server Listening
app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
});