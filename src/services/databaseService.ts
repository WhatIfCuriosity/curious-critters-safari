
import { supabase, UserActivity, UserProfile } from '@/lib/supabase';
import { Animal } from '@/lib/animals';
import { Activity } from '@/lib/activities';

// User Profile Services
export const createUserProfile = async (userId: string, username: string): Promise<UserProfile> => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([{ user_id: userId, username, completed_activities: 0 }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 is the code for "no rows returned"
  return data;
};

export const updateUserProfile = async (
  userId: string,
  updates: Partial<UserProfile>
): Promise<UserProfile> => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// User Activities Services
export const saveUserActivity = async (
  userId: string,
  animalId: string,
  activityId: string,
  notes: string[],
  completed: boolean
): Promise<UserActivity> => {
  const { data, error } = await supabase
    .from('user_activities')
    .insert([
      {
        user_id: userId,
        animal_id: animalId,
        activity_id: activityId,
        notes,
        completed
      }
    ])
    .select()
    .single();

  if (error) throw error;
  
  // If activity is completed, increment the user's completed activities count
  if (completed) {
    await updateUserProfile(userId, {
      completed_activities: await getCompletedActivitiesCount(userId) + 1
    });
  }
  
  return data;
};

export const updateUserActivity = async (
  activityId: string,
  updates: Partial<UserActivity>
): Promise<UserActivity> => {
  const { data, error } = await supabase
    .from('user_activities')
    .update(updates)
    .eq('id', activityId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getUserActivities = async (userId: string): Promise<UserActivity[]> => {
  const { data, error } = await supabase
    .from('user_activities')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getCompletedActivitiesCount = async (userId: string): Promise<number> => {
  const { count, error } = await supabase
    .from('user_activities')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('completed', true);

  if (error) throw error;
  return count || 0;
};

// Function to create necessary tables in Supabase if they don't exist
export const setupDatabase = async () => {
  // Note: This isn't typically how you'd set up tables in Supabase
  // Normally you'd use the Supabase dashboard to create these tables
  // This is just a reference for what tables we'd need

  // profiles table
  // CREATE TABLE profiles (
  //   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  //   user_id UUID REFERENCES auth.users NOT NULL,
  //   username TEXT,
  //   avatar_url TEXT,
  //   completed_activities INTEGER DEFAULT 0,
  //   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  // );

  // user_activities table
  // CREATE TABLE user_activities (
  //   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  //   user_id UUID REFERENCES auth.users NOT NULL,
  //   animal_id TEXT NOT NULL,
  //   activity_id TEXT NOT NULL,
  //   notes TEXT[] DEFAULT '{}',
  //   completed BOOLEAN DEFAULT FALSE,
  //   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  // );
  
  console.log("Database setup reference logged to console");
};
