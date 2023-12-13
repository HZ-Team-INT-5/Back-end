const express = require('express');
const router = express.Router();

const supabase = require('./db');

router.get('/courses', async (req, res) => {
  try {
    
    const { data, error } = await supabase.from('courses').select('*');
    
    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
