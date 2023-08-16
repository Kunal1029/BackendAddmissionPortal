const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDb = require('./db/connectDb')
//view engine
app.set('view engine' , 'ejs')
connectDb()


// insert css and img
app.use(express.static('public'))

//router load
app.use('/',web)

// server create
app.listen(port, () =>{
    console.log(`server start port localhost ${port}`)
})