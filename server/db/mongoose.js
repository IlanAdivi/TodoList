const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './server/config/dev.env' });

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});