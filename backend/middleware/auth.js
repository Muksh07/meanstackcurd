const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kuchhbhilikhdobhai';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401); // If there's no token
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // If the token is invalid
    }
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = authenticateToken;
