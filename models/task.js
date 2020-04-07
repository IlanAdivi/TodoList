const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const TodoList = mongoose.model('Task', taskSchema);

module.exports = TodoList;