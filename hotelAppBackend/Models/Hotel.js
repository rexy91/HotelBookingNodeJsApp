const mongoose = require("mongoose")

const HotelSchema = mongoose.Schema({
    HotelName: String,
    Desciption: String,
    PhoneNo: Number,
    Address: String,
    Reviews: Array 
})

// Complie the model with schema
// .model() // Two arguments, name of models, name of schema 
module.exports = mongoose.model("Hotels", HotelSchema)