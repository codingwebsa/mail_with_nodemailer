require("dotenv").config();
const nodemailer = require("nodemailer");

(async function run() {
  console.log("running...");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER_EMAIL,
      pass: process.env.MAIL_USER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Codingwebsa" <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    subject: "Testing mailing with nodemailer",
    text: `
        Mail from test
    `, // plain text body
    html: `
        <b>Mail from test</b>
    `, // html body
  });
})();
