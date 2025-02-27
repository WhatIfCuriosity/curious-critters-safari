
import { createClient } from '@supabase/supabase-js';

// This file sets up the Supabase client
// The environment variables are automatically injected by Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type User = {
  id: string;
  email?: string;
  username?: string;
};

export type UserProfile = {
  id: string;
  user_id: string;
  username: string;
  avatar_url?: string;
  completed_activities: number;
  created_at?: string;
};

export type UserActivity = {
  id: string;
  user_id: string;
  animal_id: string;
  activity_id: string;
  notes: string[];
  completed: boolean;
  created_at: string;
};

export type UserPreferences = {
  id: string;
  user_id: string;
  theme: 'light' | 'dark';
  notifications_enabled: boolean;
};
