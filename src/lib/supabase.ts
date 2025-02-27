
import { createClient } from '@supabase/supabase-js';

// Use default empty values for development if environment variables are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Interface for user profile
export interface UserProfile {
  id: string;
  user_id: string;
  username: string;
  completed_activities: number;
  created_at: string;
}

// Interface for user activity
export interface UserActivity {
  id: string;
  user_id: string;
  animal_id: string;
  activity_id: string;
  notes: string[];
  completed: boolean;
  created_at: string;
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
