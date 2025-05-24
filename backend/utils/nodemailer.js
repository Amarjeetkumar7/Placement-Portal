import nodemailer from "nodemailer"


// for sending mail to register user by using nodemailer and account from brevo for sending mail 
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default transporter;