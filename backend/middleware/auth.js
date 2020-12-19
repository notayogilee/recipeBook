const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
// dotenv.config()


const protect = async (req, res, next) => {
  if (req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        res.status(401).send('Not authorized. No token.')
        next()
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      res.status(401).send({ error: 'Not authorized. No token.' })
    }
  } else {
    res.status(401).send({ error: 'Not authorized. No token.' })
  }
}

module.exports = protect