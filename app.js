const express = require('express')
const mongoose = require('mongoose')
const url ="mongodb+srv://wahiba2:wahiba123456@cluster0.quvph.mongodb.net/tpbloc?retryWrites=true&w=majority"
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())


const blocRouter = require('./routes/blocs')
app.use('/blocs',blocRouter)
const salleRouter = require('./routes/salles')
app.use('/salles',salleRouter)



app.listen(9000, () => {
    console.log('Server started')
})