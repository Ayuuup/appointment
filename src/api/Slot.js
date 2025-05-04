
const express = require("express")
const Slot = require("../Models/Slot")
const router = express.Router()
const {getAvailableSLotsPerDuration} = require("../utils")


router.get("/slots/",async (req,res)=>{
  const slotDate = req.query.date
  const slotCityId = req.query.slotCityId
  const slotServiceId = req.query.slotServiceId
  const slotAvailability = true
  const slotDuration = req.query.duration
  let available_slots = []
  available_slots =await Slot.find({slotDate,slotCityId,slotServiceId,slotAvailability}).then((documents)=>{return documents}).catch((error)=>console.log(error))
  const slotsResult= getAvailableSLotsPerDuration(available_slots,slotDuration)
  res.status(200).json({slotsResult})
})
module.exports = router