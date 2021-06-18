require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const router = require('./routes')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/',router)       
   
app.listen(PORT, function () {
console.log('CORS-enabled web server listening on port', PORT)
})
