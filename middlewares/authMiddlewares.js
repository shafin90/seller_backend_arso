const jwtUtils = require('../utils/jwtUtils');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwtUtils.verifyToken(token, (err, deliveryMan) => {
    if (err) return res.sendStatus(403);
    req.deliveryManId = deliveryMan.deliveryManId;
    next();
  });
}

module.exports = { authenticateToken };