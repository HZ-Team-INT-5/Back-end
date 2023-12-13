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

module.exports = router;
