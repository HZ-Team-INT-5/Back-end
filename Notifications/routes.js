const express = require('express');
const router = express.Router();

const supabase = require('./db');
// 
router.get('/notifications/:userId', async(req, res) => {
    try {
        const { data, error } = await supabase
            .from('notifications')
            .select('*')
            .eq('user_id', req.params.userId);

        if (error) {
            throw error;
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/notifications/:userId', async(req, res) => {
    try {
        const { data, error } = await supabase
            .from('notifications')
            .upsert(req.body)
            .select()
        if (error) {
            throw error;
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;