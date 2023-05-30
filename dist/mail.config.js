"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
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
//# sourceMappingURL=mail.config.js.map