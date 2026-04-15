import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://octntgpiyfftowdvxpge.supabase.co'
const supabaseKey = 'sb_publishable_nt1qJYmKIrbG1oyXKz3ohw__x-PWRUH'
export const supabase = createClient (supabaseUrl, supabaseKey)