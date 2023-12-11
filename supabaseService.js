const fetch = require('node-fetch');

const fetchDataFromSupabase = async () => {
  try {
    const supabaseEndpoint = 'https://YOUR_SUPABASE_ENDPOINT.supabase.co';
    const supabaseApiKey = 'YOUR_SUPABASE_API_KEY';

    const response = await fetch(`${supabaseEndpoint}/rest/v1/YOUR_TABLE_NAME`, {
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
