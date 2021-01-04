const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)
    if (!user) {
      res.status(401)
      throw new Error('Not authorized')
    }
    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({ message: "Please authenticate" })
  }
}

module.exports = protect