const express = require ('express')
const cors = require("cors")
const app = express()
const indexRoutes = require('./routes/indexRoutes')
const productRoutes = require ('./routes/productRoutes')



require('dotenv').config()
const port = process.env.PORT || 3001



app.listen(3000, console.log(`Server corriendo en el puerto ${port}`))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/', indexRoutes)
app.use('/', productRoutes)
