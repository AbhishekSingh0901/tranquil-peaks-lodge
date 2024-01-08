import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tetxswcypoqtfsvsjkfl.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldHhzd2N5cG9xdGZzdnNqa2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMTU1MTgsImV4cCI6MjAxOTU5MTUxOH0.gdVqn92nxFmumxGmoZxvnutwB5uxp2VkWngegj8bv18";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
