const mongoose = require('mongoose');

const connectDb = () =>{
    return mongoose.connect('mongodb://127.0.0.1:27017/admissionPortal')
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDb
