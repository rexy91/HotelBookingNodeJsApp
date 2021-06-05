// import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config() // To use the env variable from env file 

// define the express app, so we can use middlewares app.use() etc. 
const app = express();

// Import the routers, to be used in middleware app.use("/", routerName)
const hotelRouter = require("./routes/hotelRouter")

// Fetch url will be http://localhost:3000/hotels/ 
// Goes to hotelRouter, anything related to /hotels endpoint will go to hotelRouter 
// Rememeber to export it from hotelRouter.js 

app.use("/hotels", hotelRouter); 
 
// Third Party Middlewares
app.use(cors())
app.use(bodyParser.json())

// Start the server

app.listen(3000, () => console.log('server started')); 

// Connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true })

// Check Connection to DB:
const DB = mongoose.connection
DB.once('open', () => console.log('connected to mongodb database'))
DB.on('error', (error)=> console.error(error))


// API Routing:
