const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes'); // This is an Express router
app.use('/', routes); // Mount the router at the root path

// const supabase = require('./db')
// Your middleware and route setup here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
