const express = require('express');
const port = 8000;

const app = express();

// function for setting up the routes and controller
app.use('/', require('./routes/routesIndex'));

// function for setting up the views
app.set('view engine', 'ejs');
app.set('views', './views');

// Function for running the server
app.listen(port, function(err){
    if(err){
        console.log("Error is :");
        return;
    }
    console.log("Server is running on Port:",port);
});