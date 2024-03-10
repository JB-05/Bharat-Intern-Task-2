const express = require('express')
const articleRouter = require("./routes/article")
const mongoose = require('mongoose')
const app = express()


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const articles = [{
        title: 'Test Title',
        createdDate:new Date(),
        description : 'Test description',
    },
    {
        title: 'Test Title',
        createdDate: new Date(),
        description : 'Test description',
    }]

    res.render('index',{articles:articles});
})

app.use('./article' , articleRouter)

app.listen(3000)