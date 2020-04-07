const Task = require('../../models/task');

module.exports = {
    createTask: async (req, res) => {
        const task = new Task({
            description: req.body.description
        });
        try {
            await task.save();
            res.status(201).send(task);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    getTask: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Task.findById(id);
            res.status(200).send(task);
        } catch (error) {
            res.status(401).send(error);
        }
    },
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.status(200).send(tasks);
        } catch (error) {
            res.status(401).send(error);
        }
    },
    editTask: async (req, res) => {
        try {
            const task = await Task.findByIdAndUpdate(
                req.params.id, { $set: req.body });
            res.status(200).send(req.body);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Task.findByIdAndDelete(id);
            res.status(200).send(task);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}