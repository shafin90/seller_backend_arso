const generateOtp =()=> (Math.random() * 1e6).toFixed(0).padStart(6, "0")
module.exports = { generateOtp }