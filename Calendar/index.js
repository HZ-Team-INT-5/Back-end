const express = require('express');
const app = express();
const cors = require('cors'); 
const port = process.env.PORT || 3002;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, this is your Express microservice!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});