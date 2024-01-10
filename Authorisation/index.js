const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // Add this line
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json()); // Add this line to parse JSON in the request body

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
