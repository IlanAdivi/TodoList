const Todo = require('../../models/task');

module.exports = {
    createTodo: async (req, res) => {
        const todo = new Todo({
            description: req.body.description
        });
        try {
            await todo.save();
            res.status(201).send(todo);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    getTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const todo = await Todo.findById(id);
            res.status(200).send(todo);
        } catch (error) {
            res.status(401).send(error);;
        }
    },
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find();
            res.status(200).send(todos);
        } catch (error) {
            res.status(401).send(error);
        }
    },
    editTodo: async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(
                req.params.id, { $set: req.body });
            res.status(200).send(req.body);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const todo = await Todo.findByIdAndDelete(id);
            res.status(200).send(todo);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}