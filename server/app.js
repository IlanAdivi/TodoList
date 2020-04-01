const express = require('express');
const app = express();
const cors = require('cors');
const todoRouter = require('./api/routers/task');

require('./db/mongoose');

app.use(cors());
app.use(express.json());
app.use(todoRouter);

module.exports = app;