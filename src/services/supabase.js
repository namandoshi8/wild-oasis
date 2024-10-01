import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqxvqhmfrytxxvbayign.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxeHZxaG1mcnl0eHh2YmF5aWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NjUxNTMsImV4cCI6MjA0MzE0MTE1M30.NHrYpS8tDrHr19UvFtfi2ggL36uBlMuKZOklanPnDv0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl, supabaseKey };
