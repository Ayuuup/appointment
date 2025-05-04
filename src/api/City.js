const express = require("express")
const City = require("../Models/City")

const router = express()

router.get("/cities",(req,res)=>{
    City.find().then((cities)=>res.status(200).json({cities})).catch((error)=>console.log(error))

})


module.exports = router