const express = require('express');
const taskController = require('../controllers/task');

const router = express.Router();

router.post('/addTask', taskController.createTask);

router.get('/tasks', taskController.getAllTasks);

router.get('/task/:id', taskController.getTask);

router.delete('/task/:id', taskController.deleteTask);

router.put('/task/:id', taskController.editTask);

module.exports = router;