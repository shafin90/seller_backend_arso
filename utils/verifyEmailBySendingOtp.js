const { generateOtp } = require("./generateOtp");
const { sendMail } = require("./sendMail");

const verifyEmailBySendingOtp = async (email) => {
    const otp = generateOtp();
    const subject = "Welcome from ARSO"
    const text = `jjjjjjjjjjjjjjjjjjjjjjjjjj  otp ${otp}`

    
    // send otp to the mail
    await sendMail(email, text, subject)

    // now,save the users dara {email,otp} in database for temporary time. lets say for 1 minute. after 1 minute if i find the otp !null then i will delete the user because the user didnt complete otpverification

    
}

module.exports = { verifyEmailBySendingOtp }