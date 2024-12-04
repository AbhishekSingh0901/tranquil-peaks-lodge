import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vwshnxdkrqlkatygtasn.supabase.co";

// we have implimented rls in supabase so exposing the key in the client won't matter
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3c2hueGRrcnFsa2F0eWd0YXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NjA4NjAsImV4cCI6MjA0ODQzNjg2MH0.3YfRjDAha02UF5LmLNgPy5b4BDhtE7jIUz2-cgTmvc8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
