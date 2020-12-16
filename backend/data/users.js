const bcrypt = require('bcryptjs')

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    firstName: 'Mark',
    lastName: 'Kelly',
    email: 'mark@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    firstName: 'Tina',
    lastName: 'Roper',
    email: 'tina@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

module.exports = users