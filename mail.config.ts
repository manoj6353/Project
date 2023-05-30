import * as nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "manoj.bajiya.2023@gmail.com",
    pass: "iylmlwplnjjbuifw",
  },
});

module.exports = { transport };
