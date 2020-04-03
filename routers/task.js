const express = require('express');
const todoController = require('../api/controllers/task');

const router = express.Router();

router.post('/addTodo', todoController.createTodo);

router.get('/todos', todoController.getAllTodos);

router.get('/todo/:id', todoController.getTodo);

router.delete('/todo/:id', todoController.deleteTodo);

router.put('/todo/:id', todoController.editTodo);

module.exports = router;