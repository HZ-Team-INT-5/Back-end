const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});