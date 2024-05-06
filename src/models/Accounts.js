const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const AccountSchema = new Schema({
    userID: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    type: { // Reviewer || Restaurant Owner
        type: String,
        required: true
    },
    email: { // X@X.X
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: { 
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true
    },
    profilepicture: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }
});

const Accounts = model('accounts', AccountSchema);

module.exports = Accounts;