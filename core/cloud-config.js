/* Cloud saves (accounts-nov1). Fill both from the Supabase dashboard (Project Settings -> API) once the project exists.
   The anon key is public by design: row-level security in supabase/migrations decides who reads which row.
   Never put a service_role key or a database password here (this file ships to the public repo).
   While either is empty, the Grown-ups account block says "Cloud saves are coming soon" and nothing calls the network. */
export const SUPABASE_URL='';
export const SUPABASE_ANON_KEY='';
