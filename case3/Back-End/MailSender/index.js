const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", (req, res) => {
  const { fullName, subject, email, phoneNumber, message } = req.body;

  const mailOptions = {
    from: "noreply",
    to: "daffadwi2003@gmail.com",
    subject: `Contact Form Submission: ${subject}`,
    text: `You have received a new message from your contact form:\n\n
      Name: ${fullName}\n
      Email: ${email}\n
      Phone Number: ${phoneNumber}\n
      Message: ${message}\n`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent: " + info.response });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
