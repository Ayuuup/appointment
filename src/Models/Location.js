const { type } = require("@testing-library/user-event/dist/type")
const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    locationName:{
        type:String,
        required:true
    },
    cityId:{
        type:Number,
        required:true
    },
    serviceId:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Location",locationSchema)