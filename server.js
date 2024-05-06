const express = require('express');
const server = express();
require('dotenv').config(); 
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars');
const hbs = require('handlebars');
const jwt = require('jsonwebtoken');

const initialize = require('./script/databaseInitialize.js');
const router = require('./src/routes/IndexRouter.js');
const connectToMongo = require('./src/conn.js');

const secret = 'secret';

module.exports = { secret };

server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'hbs');
server.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
server.use(bodyParser.json());
server.set("view cache", false);
server.use(express.static('public'));
server.use(router);




server.listen(process.env.PORT, async function(){
    await connectToMongo();
    console.log ('Connected to MongoDB.');
    console.log('Listening at port '+ process.env.PORT);

    // ! UNCOMMENT BEFORE PASSING - BELOW
    // ! UNCOMMENT BEFORE PASSING - BELOW
    // ! UNCOMMENT BEFORE PASSING - BELOW

    // import('open').then(open => {
    //     open.default(`http://localhost:${process.env.PORT}`);
    // });
});