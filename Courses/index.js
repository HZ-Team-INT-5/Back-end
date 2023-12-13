const express = require('express');
const app = express();
const cors = require('cors'); 
const PORT = process.env.PORT || 3001;
app.use(cors());

const routes = require('./routes'); // This is an Express router
app.use('/', routes); // Mount the router at the root path

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});