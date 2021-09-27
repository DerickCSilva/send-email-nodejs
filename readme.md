# Envio de e-mail com Node.js

Desenvolvido no intuito de descobrir e praticar como funciona o envio de e-mails usando Nodejs.

---
## Iniciando na sua máquina
Siga os passos abaixo
- Instale as dependências do projeto:
```
npm install
```

Configurações necessárias:
- Na variável transporter:

```js
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'seu@email.com',
        pass: 'sua_senha'
    }
});
```

1. host, port e secure: Dependendo de qual e-mail será disparado a mensagem, precisa passar o host certo. Mas é simples, pesquiser no nosso grande amigo, Google: "Credenciais smtp ..." Nos três pontinhos, você coloca de qual provedor os e-mails está sendo disparados.

Exemplos de alguns provedores: <i>Gmail, Outlook, Yahoo, etc... </i>

2. auth: Onde fica os dois atributos essencias, <i>user</i> que é o endereço de e-mail no qual será disparado e <i>pass</i> a senha desse e-mail.
---
- Na função .sendMail():
O parâmetro que é passado para essa função, é um objeto com algumas informações.
```js
{
    from: 'Nome Sobrenome <seu@email.com>',
    to: 'email@destinatário.com, ...',
    subject: 'Título do e-mail',
    text: 'Texto a ser enviado',
    html: "Aqui pode ser enviado <b>códigos</b> em <i>HTML</i>" // Se tiver HTML, não é enviado o campo de cima
}
```
1. Atributo "from" por padrão você coloca o nome e entre menor e maior (<>) coloca o e-mail mocado no atributo "user" da variável transporter.

2. No atributo "to" fica os endereços de destino (que receberam o e-mail encaminhado). Nesse campo pode ser passado mais de um endereço da seguinte forma:
```js
...
to:  'email@destinatário.com, email@destinatário.com, ...',
...
```

3. Atributo "subject" é o título da mensagem.

4. "text" ou "html" é a mensagem que vai ser enviada ao(s) destinatário(s). Apenas uma que vai ser enviada, então escolha uma das duas.

---

Basicamente, é isso. Até!