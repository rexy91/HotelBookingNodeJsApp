const mongoose = require("mongoose")
const Hotels = require("../Models/Hotel")

exports.getAllHotels = async (req, res) => {
    // Interact with DB and get all hotels
    try {
        const hotels = await Hotels.find(); 
        if(hotels.length > 0 ){
            res.send(201).json({hotels:hotels}) 
        }
        else{
            res.send.json({message: "There are no hotels to show"})
        }
    } catch (error) {
            res.send(501).json({errorMessage: error.message})
    }
}

