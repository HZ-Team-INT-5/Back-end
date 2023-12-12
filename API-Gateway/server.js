const express = require('express')
const {ROUTES} = require("./routes");
const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");
const supabaseService = require('./supabaseService');
const cors = require('cors'); 

// // Environment path
// import * as dotenv from 'dotenv';
// dotenv.config({ path: 'variables.env' });

const app = express()
const port = 3000;

app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
      const data = await supabaseService.fetchDataFromSupabase();
      res.json(data);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

setupLogging(app);
setupProxies(app, ROUTES);  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})