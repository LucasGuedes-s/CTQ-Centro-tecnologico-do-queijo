const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
        user: "lucasguedes2908@gmail.com",
        pass: "@lucasguedes123"
    }
}); 

transporter.sendMail({
    from: "Lucas Guedes <lucasguedes2908@gmail.com>",
    to: "l.guedes@escolar.ifrn.edu.br",
    subject: "Olá, Estou enviando esse email",
    text: "Consegui!!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})