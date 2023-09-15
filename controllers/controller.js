const ToDos = require('../models/ToDoSchema')
// const moment = require('moment');

module.exports.home = async function(req, res){
    // res.render('home');
    try{
        const todo = await ToDos.find({});
        // console.log(todo);
        // for (var i of todo){
            // console.log();
            // const i.date = new Date(); // Replace this with your MongoDB date value
            // const formattedDate = moment(date).format('MM/DD/YYYY');
            // console.log(formattedDate); // Outputs: "09/15/2023" (for September 15, 2023)
        // }
        return res.render('home',{
            ToDos : todo,
        });
    }catch(err){
        console.log("Error in fetching the DATA...", err);
        return;
    }
}

module.exports.about = function(req, res){
    res.end("<h1>Hi There welcome on About Page !</h1>");
}

module.exports.contact = function(req, res){
    res.end("<h1>Hi There welcome on Contact Page !</h1>");
}

module.exports.addTodo = async function(req, res){
    console.log(req.body);
    try{
        let newToDo = await ToDos.create({
            desc: req.body.desc,
            category: req.body.category,
            date: req.body.date
        });
        // console.log("**********", newToDo);
        return res.redirect('/');            
    }catch(err){
        console.log("Error in creating the Todo", err);
        return;
    }
}

// module.exports.notFound = function(req, res) {
//     res.end("<h1>Hi There welcome on Contact Page !</h1>");
// }