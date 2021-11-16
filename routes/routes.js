const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');


//Conexión base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aiello_maximiliano'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida...');
});

// Select
router.get('/productos', (req, res) => {
    let sql = "SELECT * FROM aimproductos";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('productos', {
            results: results,
            titulo:'AIM Service: Nuestros Productos',
            encabezado: 'NUESTROS PRODUCTOS',
            nombre:'Productos'
        });
    });
}); 

//Handlebars
router.get('/', (req, res)=>{
    res.render('home',{
       titulo: 'AIM Service'
    });
});

router.get('/servicios',(req, res)=>{
    res.render('servicios',{
        titulo:'AIM Service: Nuestros Servicios',
        encabezado: 'NUESTROS SERVICIOS',
        nombre:'Servicios'
    });
});

router.get('/formacion',(req, res)=>{
    res.render('formacion',{
        titulo:'AIM Service: Formación',
        encabezado: 'FORMACIÓN',
        nombre:'Formación'
    });
});

router.get('/contacto',(req, res)=>{
    res.render('contacto',{
        titulo:'AIM Service: Contactanos',
        encabezado: 'CONTACTO',
        nombre:'contacto'
    });
});

router.get('/nosotros',(req, res)=>{
    res.render('nosotros',{
        titulo:'AIM Service: Quienes Somos',
        encabezado: 'QUIENES SOMOS',
        nombre:'Nosotros'
    });
});


// Nodemailer
router.post('/send-email', (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const mensaje = req.body.mensaje;

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e23a2b531ccf5a",
          pass: "f28a21fbd4b4c4"
        }
      });

    const mailOptions = {
        from: `${correo}`,
        to: 'naranjaspintadas@gmail.com',
        subject: `${nombre} a través de AIM-Service.com`,
        text: `${mensaje}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.menssage);
        } else {
            console.log('Email enviado');
            res.render('enviado', {
                titulo: 'Gracias por contactarnos',
                nombre: 'Consulta enviada'
            });
            res.status(200).jsonp(reqbody);
        }
    });
});



module.exports = router;