const AccountSchema = require('../src/models/Accounts.js');
const RestaurantSchema = require('../src/models/Restaurants.js');
require('dotenv').config();
const mongoose = require('mongoose');


// This just initializes the database in your local machine


async function initialize() {
    try {
        await mongoose.connect('mongodb://localhost:27017/'+ process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
      
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


module.exports = initialize;