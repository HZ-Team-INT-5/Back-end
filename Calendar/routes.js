const express = require('express');
const router = express.Router();

const supabase = require('./db');

router.get('/get-events', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('calendarevents')
      .select('*');

    if (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/add-events', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('calendarevents')
      .upsert(req.body);


    if (error) {
      console.error('Error while inserting data:', error);
      res.status(500).json({ error: 'Failed to add event', detailedError: error });
    } else {
      res.status(201).json({ success: true, data });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
