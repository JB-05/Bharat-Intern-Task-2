const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to my new project")
})

app.listen(3000)