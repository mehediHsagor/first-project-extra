import { config } from 'dotenv'
import mongoose from 'mongoose'
import config from './app/config'
import app from './App'
async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string)

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(Error)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
