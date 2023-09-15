const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    }
});

const ToDo = mongoose.model('ToDos', ToDoSchema);

module.exports = ToDo;