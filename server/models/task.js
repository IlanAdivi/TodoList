const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const TodoList = mongoose.model('Todo', todoSchema);

module.exports = TodoList;