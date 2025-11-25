import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xqurhldvmbgwfdoyvljh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdXJobGR2bWJnd2Zkb3l2bGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTE1OTYsImV4cCI6MjA3OTU2NzU5Nn0.Dy25xDnTTbPKZ-mbA3w897wcAcMSAhHOcYzy59Oc7rc';
export const supabase = createClient(supabaseUrl, supabaseKey);