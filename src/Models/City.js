const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    cityName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("City",citySchema)