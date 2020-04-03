const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config/dev.env' });

app.listen(process.env.PORT,
    () => console.log(`Server started on port ${process.env.PORT}`));