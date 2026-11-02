const SUPABASE_URL = 'https://gfsjdnkrdenqvjeuhojc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmc2pkbmtyZGVucXZqZXVob2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NTM2NDYsImV4cCI6MjEwOTEyOTY0Nn0.GUUQzcPWX1Wvp5xv7XrM9d4-t8BKrPtOAN30dbPYxjA';

// Gunakan var agar tidak bentrok dengan variabel global Supabase CDN
var supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
var supabase = supabaseClient;
