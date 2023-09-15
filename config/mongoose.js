const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ToDoDB');

const db = mongoose.connection;

db.on('error' , console.error.bind(console, "Error in the connection of Database"));

db.once('open' , function(){
    console.log("Successfully connected the Database");
});