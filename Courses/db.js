const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ebeuycfrffrormwdrcnm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZXV5Y2ZyZmZyb3Jtd2RyY25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NDQwMzgsImV4cCI6MjAxNjIyMDAzOH0.kNbKs9c0aDFFaeDOE2iP2KzI26LmWtB4VGcBD-zEmK8';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
