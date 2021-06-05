const express = require("express")
const hotelRouter = express.Router() 

// Import the hotelController file
const hotelController = require("../Controller/hotelController")

// Get Methods:
// App's app.use('/hotels', hotelRouter) will come here and look for any mathing endpoint after '/hotels'

// This means get("/hotels/")
// Then calls the controller's getHotelsMethod
hotelRouter.get('/', hotelController.getAllHotels); 


// Export THE ROUTER !!!

module.exports = hotelRouter 

