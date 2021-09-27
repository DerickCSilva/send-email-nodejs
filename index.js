const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Se for Gmail, essa é a host
    port: 587,
    secure: false,
    auth: {
        user: 'seu@email.com',
        pass: 'sua_senha'
    }
});

transporter.sendMail({
    from: 'Nome Sobrenome <seu@email.com>',
    to: 'emailDo@destinatário.com, ...', // Pode ser adicionado quantos e-mails quiser (Separados por vírgulas) 
    subject: 'Título do e-mail',
    text: 'Texto a ser enviado',
    html: "Aqui pode ser enviado <b>códigos</b> em <i>HTML</i>" // Se tiver HTML, não é enviado o campo de cima
}).then(message => {
    let accept = message.accepted.map(user => user);
    
    console.log(`E-mail enviado com sucesso aos usuários: ${accept.toString()}.`);
}).catch(err => console.log(err));