const mongoose = require("mongoose")

const MONGO_URL = "mongodb+srv://mkamleh:bE36CZPRiYbZAddz@nasacluster.ywmykdx.mongodb.net/?retryWrites=true&w=majority"

mongoose.connection.once("open",()=>{
    console.log("database Connected")
})

mongoose.connection.on("error",err=>{
    console.error(err)
})

async function mongoDisconnect() {
    await mongoose.disconnect();
  }
  
  module.exports = {
    mongoConnect,
    mongoDisconnect,
  }