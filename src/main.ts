import 'reflect-metadata'
import * as dotenv from 'dotenv';
import express from 'express';
import addressRoute from './routes/address.routes'

dotenv.config()
const app = express()

app.use(express.json())
app.use(addressRoute)

app.listen(2222, () => {
  console.log('🚀 Server started at http://localhost:2222')
})