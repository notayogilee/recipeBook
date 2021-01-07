const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(401).send({ message: "No token Authorization denied" })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)
    if (!user) {
      return res.status(401).send({ message: "Please login or register to view recipes..." })
    }
    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({ message: "Please login or register to view recipes.." })
  }
}

module.exports = protect