const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const todoRouter = require('./api/routers/task');

app.use('/', express.static(path.join(__dirname, '/client/build')));

require('./db/mongoose');

app.use(cors());
app.use(express.json());
app.use(todoRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });

module.exports = app;