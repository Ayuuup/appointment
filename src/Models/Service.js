const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    serviceName:{
        type:String,
        required:true
    },
    cityId:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("Service",serviceSchema)