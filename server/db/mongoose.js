const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './server/config/dev.env' });

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});