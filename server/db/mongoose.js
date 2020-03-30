const mongoose = require('mongoose');

const url = `mongodb://localhost:27017/TodoList`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});