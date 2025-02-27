
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import AnimatedContainer from "../components/AnimatedContainer";
import { ArrowRight, Sparkles } from "lucide-react";
import ProfileBadge from "../components/ProfileBadge";
import { useAuth } from "../contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isExploring, setIsExploring] = useState(false);
  
  const handleExplore = () => {
    setIsExploring(true);
    setTimeout(() => {
      navigate("/random");
    }, 500);
  };
  
  const handleBiomimicrosity = () => {
    setIsExploring(true);
    setTimeout(() => {
      navigate("/biomimicrosity");
    }, 500);
  };

  const handleAuthClick = () => {
    navigate("/auth");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-safari-cream">
      <header className="py-6 px-4 flex justify-between items-center">
        <AnimatedContainer animation="fade" delay={100}>
          <div className="flex items-center">
            <Sparkles className="text-safari-amber h-6 w-6 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Curious Service Safari</h1>
          </div>
        </AnimatedContainer>
        
        {user ? (
          <ProfileBadge />
        ) : (
          <Button 
            variant="outline"
            onClick={handleAuthClick}
            className="text-sm"
          >
            Sign In
          </Button>
        )}
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-12 text-center max-w-3xl mx-auto">
        <AnimatedContainer animation="fade" delay={300} className={isExploring ? "animate-fade-out" : ""}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Explore the wild world of <span className="text-safari-amber">Service Design</span> through curiosity
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Discover unexpected connections between quirky animals and service design innovations. Get curious, get creative!
          </p>
          
          <Button
            size="lg"
            variant="default"
            onClick={handleExplore}
            className="animate-scale-in mb-8 w-full md:w-auto"
          >
            Get Curious
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <div 
              onClick={handleExplore}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center cursor-pointer card-hover-effect border border-gray-100"
            >
              <div className="h-16 w-16 rounded-full flex items-center justify-center bg-safari-coral/10 mb-4">
                <ArrowRight className="h-8 w-8 text-safari-coral" />
              </div>
              <h3 className="text-xl font-bold mb-2">Random Animal</h3>
              <p className="text-gray-600">Explore random animal inspirations for quick, playful insights.</p>
            </div>
            
            <div 
              onClick={handleBiomimicrosity}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center cursor-pointer card-hover-effect border border-gray-100"
            >
              <div className="h-16 w-16 rounded-full flex items-center justify-center bg-safari-sky/10 mb-4">
                <Sparkles className="h-8 w-8 text-safari-sky" />
              </div>
              <h3 className="text-xl font-bold mb-2">Biomimicrosity</h3>
              <p className="text-gray-600">Follow a structured 4-step creative process for deeper learning.</p>
            </div>
          </div>
        </AnimatedContainer>
      </main>
      
      <footer className="py-4 text-center text-gray-500 text-sm">
        <AnimatedContainer animation="fade" delay={500}>
          <p>Spark curiosity in Service Design</p>
        </AnimatedContainer>
      </footer>
    </div>
  );
};

export default Index;
