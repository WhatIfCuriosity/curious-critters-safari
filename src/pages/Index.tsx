
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";
import AnimatedContainer from "../components/AnimatedContainer";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleRandomClick = () => {
    toast({
      title: "Loading random animal",
      description: "Preparing your safari adventure...",
    });
    navigate("/random");
  };
  
  const handleActivityClick = () => {
    toast({
      title: "Starting new activity",
      description: "Preparing your biomimicrosity session...",
    });
    navigate("/biomimicrosity");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-safari-cream">
      <header className="py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Curious Service Safari</h1>
        
        <Button 
          variant="outline" 
          onClick={() => navigate(user ? "/profile" : "/auth")}
        >
          {user ? "My Profile" : "Sign In"}
        </Button>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <AnimatedContainer animation="scale" className="max-w-4xl w-full text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Inspiration in Nature</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore animal adaptations and behaviors to unlock creative service design solutions.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <AnimatedContainer 
            animation="fade" 
            delay={200}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Random Animal</h3>
            <p className="text-gray-600 mb-6">
              Discover a random animal and explore how its traits can inspire service innovation.
            </p>
            <Button 
              onClick={handleRandomClick}
            >
              Start Random Safari
            </Button>
          </AnimatedContainer>
          
          <AnimatedContainer 
            animation="fade" 
            delay={400}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Biomimicrosity</h3>
            <p className="text-gray-600 mb-6">
              Follow a guided 4-step process to transform animal adaptations into service design solutions.
            </p>
            <Button 
              onClick={handleActivityClick}
              variant="default"
            >
              Start 4-Step Activity
            </Button>
          </AnimatedContainer>
        </div>
      </main>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© 2023 Curious Service Safari</p>
      </footer>
    </div>
  );
};

export default Index;
