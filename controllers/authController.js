const { verifyEmailBySendingOtp } = require('../utils/verifyEmailBySendingOtp');
const { verifyPhoneNumberBySendingOtp } = require('../utils/verifyPhoneNumberBySendingOtp');



async function register(req, res) {
  try {
    // take input as mobile number or email to send otp -------registrationInput
    const { registrationInput } = req.body;

    // 1. ======if mobile number, then do mobile number otp verification
    if (registrationInput.includes("@")) {
      await verifyEmailBySendingOtp(registrationInput)
    }
    // =================================================================

    // 2. =======if eamil, then do email verification through otp 
    else {
      await verifyPhoneNumberBySendingOtp(registrationInput)
    }
    // ==========================================================
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {

  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

async function getProfile(req, res) {
  try {

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProfile(req, res) {
  try {

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register, login, getProfile, updateProfile };