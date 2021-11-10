const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');


//Conexión base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aim-service'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida...');
});

// Nodemailer
router.post('/send-email', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'benton.kling24@ethereal.email',
            pass: 'xdzZyUAwxh8ZttVE2Q'
        }
    });

    const mailOptions = {
        from: 'fulano',
        to: 'benton.kling24@ethereal.email',
        subject: 'testeando',
        text: 'hola que tal, ',
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.menssage);
        } else {
            console.log('Email enviado');
            res.status(200).jsonp(reqbody);
            
        }
    res.redirect('/email-enviado');
    });
});



module.exports = router;