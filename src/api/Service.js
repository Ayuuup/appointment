const express = require("express")
const Service = require("../Models/Service")

const router = express.Router()

router.get('/services/:id',(req,res)=>{
    Service.find({cityId:req.params.id}).then((services)=>res.status(200).json({services})).catch((error)=>console.log(error))
})

module.exports = router

