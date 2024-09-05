import express from 'express'
import dotenv from 'dotenv'
import contactRoute from './routes/contactRoutes.js'
import { errorHandler } from './middleWare/errorHandler.js'
import dbConnect from './config/dbConnection.js'
dotenv.config()
const PORT=process.env.PORT||5000

dbConnect()

const app = express()
app.use(express.json())
app.use(errorHandler)

app.use('/',contactRoute)

app.listen(PORT,()=>{
    console.log('My app is running on port',PORT)
})