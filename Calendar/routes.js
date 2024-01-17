const express = require('express');
const router = express.Router();

const supabase = require('./db');

router.get('/events', async (req, res) => {
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

router.post('/events', async (req, res) => {
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

router.put('/events/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const { data, error } = await supabase
      .from('calendarevents')
      .update(req.body)
      .match({ id: eventId })
      .select();

    if (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ error: 'Failed to update event', detailedError: error });
    } else {
      res.status(200).json({ success: true, data });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/events/:eventId', async(req, res) => {
  try {
    const eventId = req.params.eventId;
    const { error } = await supabase
      .from('calendarevents')
      .delete()
      .match({ id: eventId });
    if(error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ error: 'Failed to delete event', detailedError: error });
    } else {
      res.status(200).json({ success: true, message: 'Event deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router;
