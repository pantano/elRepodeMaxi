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

//Handlebars
app.get('/', (req, res)=>{
    res.render('home',{
       titulo: 'AIM Service'
    });
});

app.get('/productos',(req, res)=>{
    res.render('productos',{
        titulo:'AIM Service: Nuestros Productos',
        encabezado: 'NUESTROS PRODUCTOS',
        nombre:'Productos'
    });
});

app.get('/servicios',(req, res)=>{
    res.render('servicios',{
        titulo:'AIM Service: Nuestros Servicios',
        encabezado: 'NUESTROS SERVICIOS',
        nombre:'Servicios'
    });
});

app.get('/formacion',(req, res)=>{
    res.render('formacion',{
        titulo:'AIM Service: Formación',
        encabezado: 'FORMACIÓN',
        nombre:'Formación'
    });
});

app.get('/contacto',(req, res)=>{
    res.render('contacto',{
        titulo:'AIM Service: Contactanos',
        encabezado: 'CONTACTO',
        nombre:'contacto'
    });
});

app.get('/nosotros',(req, res)=>{
    res.render('nosotros',{
        titulo:'AIM Service: Quienes Somos',
        encabezado: 'QUIENES SOMOS',
        nombre:'Nosotros'
    });
});
app.get('/email-enviado',(req, res)=>{
    res.render('enviado',{
        titulo:'AIM Service',
    });
});



//Server Listening
app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
});