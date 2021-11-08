const path = require('path');
const express = require('express');
const hbs = require('hbs');
const mysql = require('mysql');
const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Contenido estático
app.use(express.static('public'));
// app.use('/assets', express.static (__dirname +'/public'));


//Handlebars
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('home',{
       titulo: 'AIM Service'
    }
    );
});

app.get('/productos',(req, res)=>{
    res.render('productos',{
        titulo:'AIM Service: Nuestros Productos'
    }
    );
});

app.get('/servicios',(req, res)=>{
    res.render('servicios',{
        titulo:'AIM Service: Nuestros Servicios'
    }
    );
});

app.get('/formacion',(req, res)=>{
    res.render('formacion',{
        titulo:'AIM Service: Formación'
    }
    );
});

app.get('/contacto',(req, res)=>{
    res.render('contacto',{
        titulo:'AIM Service: Contactanos'
    }
    );
});

app.get('/nosotros',(req, res)=>{
    res.render('nosotros',{
        titulo:'AIM Service: Quienes Somos'
    }
    );
});

hbs.registerPartials(__dirname +'/views/partials/');



//Conexión base de datos
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'aim-service'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Conexión establecida...');

});




//Server Listening
app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
})