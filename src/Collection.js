const express = require("express")
const City = require("./Models/City")
const Service = require("./Models/Service")
const Location = require("./Models/Location")

const router = express.Router()

router.post("/cities",(req,res)=>{
    const newCity = new City(req.body)
    newCity.save().then((document)=>console.log(document)).catch((error)=>console.log(error))
    res.status(201).json({message:"document created in the city collection"})

})


router.post("/services",(req,res)=>{
    const newService = new Service(req.body)
    newService.save().then((document)=>console.log(document)).catch((error)=>console.log(error))
    res.status(201).json({message:"document created in the service collection"})

})

router.post("/locations",(req,res)=>{
    const newLocation = new Location(req.body)
    newLocation.save().then((document)=>console.log(document)).catch((error)=>console.log(error))
    res.status(201).json({message:"document created in the locations collection"})

})
module.exports = router
