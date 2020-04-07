const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const taskRouter = require('./api/routers/task');

require('./db/mongoose');

app.use(cors());
app.use(express.json());
app.use(taskRouter);

app.use('/', express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

module.exports = app;