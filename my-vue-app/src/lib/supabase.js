import { createClient } from '@supabase/supabase-js'
const supabaseUrl ='https://octntgpiyfftowdvxpge.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdG50Z3BpeWZmdG93ZHZ4cGdlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzM5ODU5NSwiZXhwIjoyMDg4OTc0NTk1fQ.-k62p4mUo84T6h9xEkgbpWhfsLkQKEDDxClsgWNC-uM'

export const supabase = createClient(supabaseUrl, supabaseKey)