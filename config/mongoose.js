const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://priyanshadmin:admin@clustermain.vvg6gyt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');

const db = mongoose.connection;

db.on('error' , console.error.bind(console, "Error in the connection of Database"));

db.once('open' , function(){
    console.log("Successfully connected the Database");
});