const mongoose = require('mongoose')
const chalk = require('chalk')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    console.log(chalk.green.bold(`MongoDB connected: ${conn.connection.host}`))
  } catch (error) {
    console.error(chalk.red.inverse(`Error: ${error.message}`))
    process.exit(1)
  }
}

module.exports = connectDB