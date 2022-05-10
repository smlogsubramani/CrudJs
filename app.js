const express = require("express");
const mongoose = require('mongoose')
const url = 'mongodb://localhost/aliensdbex'
const app = express()
//database connection
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
//database
con.on('open',()=>{
console.log(`connected.....`)
})
app.use(express.json())

const alienrouter = require('./router/aliens')
app.use('/aliens',alienrouter)

app.listen(9000,()=>{
    console.log(`started`)
})