const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;


const RestaurantSchema = new Schema({
    name: { // Name of the restaurant
        type: String,
        required: true,
        unique: true
    },
    rating: { // X.XX 
        type: Number,
        required: true
    },
    owner: { // Name of the owner
        type: String,
        required: true
    }
});

const Restaurants = model('Restaurants', RestaurantSchema); // users collection 

module.exports = Restaurants;