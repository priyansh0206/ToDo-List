const express = require('express');
const port = 8888;

const app = express();

const db = require('./config/mongoose.js');

app.use(express.urlencoded());
app.use(express.json());

// function for setting up the routes and controller
app.use('/', require('./routes/routesIndex'));


// function for setting up the views
app.set('view engine', 'ejs');
app.set('views', './views');

//funtion for setting up the assets folder as Public
app.use(express.static('assets'));
// Function for running the server
app.listen(port, function(err){
    if(err){
        console.log("Error is :");
        return;
    }
    console.log("Server is running on Port:",port);
});