import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jrbbfepaelpecouteayq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_IlAZ603TiUiVyUBEKN6_BA_tyORO_QK';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
