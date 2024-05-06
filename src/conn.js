const mongoose = require('mongoose');
require('dotenv').config(); 

const mongoURI = process.env.MONGODB_URI;

function connectToMongo(dbName = process.env.DB_NAME) {
    return mongoose.connect(mongoURI, {dbName: dbName});
};

function signalHandler() {
    console.log("Closing MongoDB connection...");
    mongoose.disconnect();
    process.exit();
}

process.on("SIGINT", signalHandler);
process.on("SIGTERM", signalHandler);
process.on("SIGQUIT", signalHandler);

module.exports = connectToMongo;