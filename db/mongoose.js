const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './dev.env' });

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})