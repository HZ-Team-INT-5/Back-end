const { getTimeDif, SupabaseToJsDate } = require('./dateHelper');

const express = require('express');
const router = express.Router();


const supabase = require('./db');

function processNotificationData(data) {

    data.forEach(element => {
        element.creationTime = SupabaseToJsDate(element.created_at);
        element.timeElapsed = getTimeDif(new Date(element.created_at));
    });


    return data;
}

router.get('/notifications/:userId', async(req, res) => {
    try {
        const { data, error } = await supabase
            .from('notifications')
            .select('*')
            .eq('user_id', req.params.userId);

        if (error) {
            throw error;
        }

        let processedData = processNotificationData(data);

        return res.status(200).json(processedData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/notifications/:userId', async(req, res) => {
    try {
        const { data, error } = await supabase
            .from('notifications')
            .insert(req.body);
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
            .select();
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