const mongoose =  require("mongoose")

const slotSchema  = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    slotDate:{
        type:String,
        required:true
    },
    slotCityId:{
        type:Number,
        required:true
    },
    slotServiceId:{
        type:Number,
        required:true
    },
    slotTime:{
        type:Number,
        required:true
    },
    slotAvailability:{
        type:Boolean,
        required:true
    }


})

module.exports = mongoose.model("Slot",slotSchema)