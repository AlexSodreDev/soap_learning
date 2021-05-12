import 'reflect-metadata'
import express from 'express';
import swaggerUi from "swagger-ui-express";
import * as dotenv from 'dotenv';
import addressRoute from './routes/address.routes'

dotenv.config()
const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup());

app.use(addressRoute)

app.listen(2222, () => {
  console.log('🚀 Server started at http://localhost:2222')
})