
import { useState, useEffect } from "react";
import { ArrowLeft, Bookmark, Award, User, Settings, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import AnimatedContainer from "../components/AnimatedContainer";
import { getAnimalById, animals } from "../lib/animals";
import AnimalCard from "../components/AnimalCard";
import * as databaseService from "../services/databaseService";

const Profile = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [favoriteAnimals, setFavoriteAnimals] = useState<string[]>([]);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) return;
      
      try {
        // Fetch user data from database
        setLoading(true);
        const userData = await databaseService.getUserData(user.id);
        
        if (userData) {
          setFavoriteAnimals(userData.favoriteAnimals || []);
          setCompletedActivities(userData.completedActivities || []);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-safari-cream">
        <h1 className="text-2xl font-bold text-safari-brown mb-6">
          Please sign in to view your profile
        </h1>
        <Button
          onClick={() => navigate("/auth")}
          className="bg-safari-green hover:bg-safari-green/90 text-white"
        >
          Sign In
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-safari-cream">
      <header className="bg-safari-orange text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-xl font-bold">My Safari Profile</h1>
          <Button
            variant="ghost"
            onClick={() => navigate("/settings")}
            className="text-white hover:bg-white/20"
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-safari-lime/30 p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-safari-green rounded-full p-4 text-white">
                <User className="h-12 w-12" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-safari-brown">
                  {user.email || 'Safari Explorer'}
                </h2>
                <p className="text-gray-600">
                  {user.email_confirmed_at ? 'Verified Explorer' : 'New Explorer'}
                </p>
              </div>
              <div className="ml-auto">
                <Button
                  variant="outline"
                  onClick={signOut}
                  className="border-safari-orange text-safari-orange hover:bg-safari-orange/10"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <div className="flex items-center mb-4">
                  <Bookmark className="h-5 w-5 text-safari-amber mr-2" />
                  <h3 className="text-xl font-bold text-safari-brown">
                    Favorite Animals
                  </h3>
                </div>
                
                {loading ? (
                  <div className="p-8 text-center">
                    <div className="animate-pulse bg-safari-cream rounded-lg h-32"></div>
                    <p className="mt-4 text-gray-500">Loading favorites...</p>
                  </div>
                ) : favoriteAnimals.length > 0 ? (
                  <div className="space-y-4">
                    {favoriteAnimals.map((animalId) => {
                      const animal = getAnimalById(animalId);
                      return animal ? (
                        <AnimatedContainer
                          key={animal.id}
                          animation="fade"
                          className="relative"
                        >
                          <AnimalCard animal={animal} />
                          <button 
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                            onClick={async () => {
                              const updatedFavorites = favoriteAnimals.filter(id => id !== animal.id);
                              setFavoriteAnimals(updatedFavorites);
                              if (user) {
                                await databaseService.updateUserData(user.id, {
                                  favoriteAnimals: updatedFavorites
                                });
                              }
                            }}
                          >
                            <X className="h-4 w-4 text-safari-brown" />
                          </button>
                        </AnimatedContainer>
                      ) : null;
                    })}
                  </div>
                ) : (
                  <div className="bg-safari-cream/50 rounded-lg p-6 text-center">
                    <p className="text-gray-600">
                      You haven't added any favorite animals yet. Explore the animals and click the heart icon to add them here!
                    </p>
                    <Button
                      onClick={() => navigate("/random")}
                      className="mt-4 bg-safari-green hover:bg-safari-green/90 text-white"
                    >
                      Explore Animals
                    </Button>
                  </div>
                )}
              </section>
              
              <section>
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-safari-amber mr-2" />
                  <h3 className="text-xl font-bold text-safari-brown">
                    Completed Activities
                  </h3>
                </div>
                
                {loading ? (
                  <div className="p-8 text-center">
                    <div className="animate-pulse bg-safari-cream rounded-lg h-32"></div>
                    <p className="mt-4 text-gray-500">Loading activities...</p>
                  </div>
                ) : completedActivities.length > 0 ? (
                  <div className="space-y-4">
                    {completedActivities.map((activityId, index) => {
                      const [animalId, step] = activityId.split('-');
                      const animal = getAnimalById(animalId);
                      
                      return animal ? (
                        <AnimatedContainer
                          key={activityId}
                          animation="fade"
                          delay={index * 100}
                        >
                          <div className="bg-white rounded-lg border border-safari-orange/30 p-4 flex items-center">
                            <div className="h-12 w-12 bg-safari-cream rounded-md mr-4 flex items-center justify-center overflow-hidden">
                              <img 
                                src={typeof animal.image === 'string' ? animal.image : animal.image[0]} 
                                alt={animal.name}
                                className="h-full w-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-safari-brown">{animal.name}</h4>
                              <p className="text-sm text-gray-600">
                                Completed {step === 'all' ? 'All Steps' : `Step ${step}`}
                              </p>
                            </div>
                            <Award className="h-5 w-5 text-safari-amber ml-auto" />
                          </div>
                        </AnimatedContainer>
                      ) : null;
                    })}
                  </div>
                ) : (
                  <div className="bg-safari-cream/50 rounded-lg p-6 text-center">
                    <p className="text-gray-600">
                      You haven't completed any activities yet. Start a biomimicrosity activity to see your progress here!
                    </p>
                    <Button
                      onClick={() => navigate("/biomimicrosity")}
                      className="mt-4 bg-safari-green hover:bg-safari-green/90 text-white"
                    >
                      Try an Activity
                    </Button>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
