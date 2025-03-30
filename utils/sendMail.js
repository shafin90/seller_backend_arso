const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "shafin90", // Your email
        pass: "password", // App password
    }
})

const sendMail = async (email, text, subject) => {
    try {
        await transporter.sendMail({
            from: "shafinahnam89@gmail.com",
            to,
            subject,
            text,
        });
    } catch (error) {
        console.log('something went wrong while sending mail', error)
    }
}

module.exports = { sendMail }