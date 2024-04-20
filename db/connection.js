const mongoose = require('mongoose')

const connectdb = (con) =>{
    return mongoose.connect(con).then(() =>{
        console.log("connection successfull");
    }).catch((err) =>{
        console.log("this is database error",err);
    })
}

module.exports = connectdb