
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getUserProfile, getUserActivities } from "../services/databaseService";
import { ArrowLeft, Award, Clock, Settings, User, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import AnimatedContainer from "../components/AnimatedContainer";
import { UserProfile, UserActivity } from "../lib/supabase";
import { getAnimalById, getRandomImage } from "../lib/animals";
import { getActivityById } from "../lib/activities";
import { useToast } from "../hooks/use-toast";

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!user) {
        navigate("/auth");
        return;
      }
      
      try {
        setLoading(true);
        const userProfile = await getUserProfile(user.id);
        if (userProfile) {
          setProfile(userProfile);
        }
        
        const userActivities = await getUserActivities(user.id);
        setActivities(userActivities);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast({
          title: "Error loading profile",
          description: "There was a problem loading your profile data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfileData();
  }, [user, navigate, toast]);
  
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  
  if (!user) {
    return <div>Redirecting to login...</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-safari-cream">
      <header className="py-6 px-4 flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <h1 className="text-xl font-bold">Your Profile</h1>
        
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => navigate("/settings")}
          className="text-gray-600"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </header>
      
      <main className="flex-1 flex flex-col px-4 py-6 max-w-3xl mx-auto w-full">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-pulse">Loading profile...</div>
          </div>
        ) : (
          <>
            <AnimatedContainer animation="scale" className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-safari-amber/10 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-safari-amber" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{profile?.username || user.email?.split('@')[0]}</h2>
                  <p className="text-gray-500">{user.email}</p>
                  
                  <div className="flex items-center mt-4 text-gray-700">
                    <Award className="h-5 w-5 text-safari-amber mr-2" />
                    <span className="font-medium">{profile?.completed_activities || 0} activities completed</span>
                  </div>
                  
                  <div className="mt-4">
                    <Button 
                      variant="outline"
                      onClick={handleSignOut}
                      className="text-sm"
                    >
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
            
            <h3 className="text-xl font-bold mb-4">Your Activity History</h3>
            
            {activities.length === 0 ? (
              <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                <p className="text-gray-500">You haven't completed any activities yet.</p>
                <Button 
                  variant="default"
                  onClick={() => navigate("/biomimicrosity")}
                  className="mt-4"
                >
                  Start an Activity
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {activities.map((activity, index) => {
                  const animal = getAnimalById(activity.animal_id);
                  const activityDetails = getActivityById(activity.activity_id);
                  
                  return (
                    <AnimatedContainer 
                      key={activity.id} 
                      animation="fade" 
                      delay={index * 100}
                      className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                          {animal && animal.image !== "?" && (
                            <img 
                              src={typeof animal.image === 'string' ? animal.image : getRandomImage(animal.image)} 
                              alt={animal.name} 
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold">{animal?.name || "Unknown Animal"}</h4>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {new Date(activity.created_at).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mt-1">
                            {activityDetails?.title || "Activity"}
                          </p>
                          
                          {activity.completed && (
                            <span className="inline-flex items-center mt-2 px-2 py-1 bg-safari-leaf/10 text-safari-leaf text-xs font-medium rounded">
                              <Check className="h-3 w-3 mr-1" />
                              Completed
                            </span>
                          )}
                        </div>
                      </div>
                    </AnimatedContainer>
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Profile;
