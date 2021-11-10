const { Router } = require('express');
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
router.post('/send-mail', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'buster.buckridge58@ethereal.email',
            pass: 'Xzd7zmqXdkjMWDS54P'
        }
    });


    const mailOptions = {
        from: '',
        to: '',
        subject: '',
        text: '',
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.menssage);
        } else {
            console.log('Email enviado');
            res.status(200).jsonp(reqbody);
        }
    });
});


module.exports = router;