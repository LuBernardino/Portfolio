const express = require("express");
const cors = require('cors')
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

require('dotenv').config();

const app = express();
const PORT = 443;

app.use(cors({
    origin:  process.env.APP_URL
}));

app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, title, text } = req.body;

  // Configurar o transporte de e-mail usando nodemailer (ajuste com suas credenciais de e-mail)
  const transporter = nodemailer.createTransport({
    service: process.env.PROVIDER,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Configurar o e-mail de destino (seu e-mail)
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: title,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${text}`,
  };

  try {
    // Enviar e-mail
    await transporter.sendMail(mailOptions);
    console.log("E-mail enviado com sucesso");
    res.status(200).json({ message: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar e-mail", error);
    res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);