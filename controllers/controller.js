const ToDos = require('../models/ToDoSchema')
// const moment = require('moment');

module.exports.home = async function(req, res){
    try{
        const count = await ToDos.countDocuments({});
        const todo = await ToDos.find({});
        // console.log(count);        
        return res.render('home',{
            ToDos : todo,
            count : count
        });
    }catch(err){
        console.log("Error in fetching the DATA...", err);
        return;
    }
}

module.exports.addTodo = async function(req, res){
    // console.log(req.body);
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

module.exports.deleteTodo = async function(req, res){
    try{
        const todoID = req.query.id;
        // console.log(todoID);
        const deleted = await ToDos.findByIdAndRemove(todoID);
        // console.log(deleted);
        return res.redirect('/');
    }catch(err){
        console.log(err);
        return;
    }
}