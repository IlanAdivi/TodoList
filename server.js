const app = require('./app');
const dotenv = require('dotenv');

const port = process.env.PORT || 5000;

dotenv.config({ path: './dev.env' });

app.listen(port,
    () => console.log(`Server started on port ${port}`));