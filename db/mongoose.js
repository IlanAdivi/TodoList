const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config/dev.env' });

const { mongo_URL } = process.env;

console.log(mongo_URL);

mongoose.connect(mongo_URL,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });