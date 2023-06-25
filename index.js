const express = require ('express')
const cors = require("cors")
const app = express()
const userRoutes = require('./routes/userRoutes')
const productRoutes = require ('./routes/productRoutes')



require('dotenv').config()
const port = process.env.PORT || 3001



app.listen(3000, console.log(`Server corriendo en el puerto ${port}`))
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: true,
  }))
app.use(express.json())
app.use(express.static('public'))
app.use('/', userRoutes)
app.use('/', productRoutes)
