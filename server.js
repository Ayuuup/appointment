const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


const connection  = async ()=>{
    try{
     await mongoose.connect('mongodb://localhost:27017/appointment')
     console.log("connected")
    
    }
    catch(error){
        console.log(error)
    }
}

connection()
const port = 3001
app.listen(port,()=>{console.log(`appp listening on port ${port}`)})


// endpoint to create collections
// app.use("/collections",require("./src/Collection"))

app.use("/api",[require("./src/api/City"),require("./src/api/Service"),require("./src/api/Slot")])
