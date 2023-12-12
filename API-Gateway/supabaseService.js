const fetch = require("node-fetch");

const fetchDataFromSupabase = async () => {
  try {
    const supabaseEndpoint = 'https://ebeuycfrffrormwdrcnm.supabase.co';
    const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZXV5Y2ZyZmZyb3Jtd2RyY25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NDQwMzgsImV4cCI6MjAxNjIyMDAzOH0.kNbKs9c0aDFFaeDOE2iP2KzI26LmWtB4VGcBD-zEmK8';

    const response = await fetch(`${supabaseEndpoint}/rest/v1/calendar`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseApiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching data from Supabase');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  fetchDataFromSupabase,
};
