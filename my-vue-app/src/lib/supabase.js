import { createClient } from '@supabase/supabase-js'
const supabaseUrl ='https://octntgpiyfftowdvxpge.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdG50Z3BpeWZmdG93ZHZ4cGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzOTg1OTUsImV4cCI6MjA4ODk3NDU5NX0.fi2VVsG9eQ4PqXh5_4Ie5ZZdpV2WNhfBkvH4HBNLwZw'

export const supabase = createClient(supabaseUrl, supabaseKey)