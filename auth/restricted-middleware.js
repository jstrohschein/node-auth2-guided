const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./secrets.js');

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'we wants token' })
    return;
  }

  jwt.verify(token, jwtSecret, () => {
    
  })

};
