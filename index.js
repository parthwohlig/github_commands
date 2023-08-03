const express = require('express')
const app = express()
const mongoose = require ('mongoose')

mongoose.connect('mongodb+srv://parthwohlig:parthgala99@cluster1.rs33yft.mongodb.net/')

app.get('/',(req,res)=>{
    res.send('This is Express Server')
})

app.listen(8081, () =>{
    console.log('Server running on 8081')
})