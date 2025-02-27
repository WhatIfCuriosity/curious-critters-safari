
import { supabase, UserActivity, UserProfile } from '../lib/supabase';
import { Animal } from '../lib/animals';
import { Activity } from '../lib/activities';

// User Profile Services
export const createUserProfile = async (userId: string, username: string): Promise<UserProfile> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert([{ user_id: userId, username, completed_activities: 0 }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating user profile:", error);
    // Return a mock profile for development
    return {
      id: '1',
      user_id: userId,
      username,
      completed_activities: 0,
      created_at: new Date().toISOString()
    };
  }
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 is the code for "no rows returned"
    return data;
  } catch (error) {
    console.error("Error getting user profile:", error);
    return null;
  }
};

export const updateUserProfile = async (
  userId: string,
  updates: Partial<UserProfile>
): Promise<UserProfile> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    // Return mock data
    return {
      id: '1',
      user_id: userId,
      username: 'user',
      completed_activities: updates.completed_activities || 0,
      created_at: new Date().toISOString()
    };
  }
};

// User Activities Services
export const saveUserActivity = async (
  userId: string,
  animalId: string,
  activityId: string,
  notes: string[],
  completed: boolean
): Promise<UserActivity> => {
  try {
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
  } catch (error) {
    console.error("Error saving user activity:", error);
    // Return mock data
    return {
      id: '1',
      user_id: userId,
      animal_id: animalId,
      activity_id: activityId,
      notes,
      completed,
      created_at: new Date().toISOString()
    };
  }
};

export const updateUserActivity = async (
  activityId: string,
  updates: Partial<UserActivity>
): Promise<UserActivity> => {
  try {
    const { data, error } = await supabase
      .from('user_activities')
      .update(updates)
      .eq('id', activityId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating user activity:", error);
    // Return mock data
    return {
      id: activityId,
      user_id: 'user_id',
      animal_id: 'animal_id',
      activity_id: 'activity_id',
      notes: [],
      completed: false,
      created_at: new Date().toISOString(),
      ...updates
    };
  }
};

export const getUserActivities = async (userId: string): Promise<UserActivity[]> => {
  try {
    const { data, error } = await supabase
      .from('user_activities')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error getting user activities:", error);
    return [];
  }
};

export const getCompletedActivitiesCount = async (userId: string): Promise<number> => {
  try {
    const { count, error } = await supabase
      .from('user_activities')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('completed', true);

    if (error) throw error;
    return count || 0;
  } catch (error) {
    console.error("Error getting completed activities count:", error);
    return 0;
  }
};

// Function to create necessary tables in Supabase if they don't exist
export const setupDatabase = async () => {
  console.log("Database setup initialized - using development mode");
  // In a real app, you'd create tables if they don't exist
  // For now, just log that we're in development mode
};
