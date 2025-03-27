const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

function generateToken(deliveryManId) {
  return jwt.sign({ deliveryManId }, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token, callback) {
  jwt.verify(token, JWT_SECRET, callback);
}

module.exports = { generateToken, verifyToken };