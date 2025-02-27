
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, HelpCircle } from "lucide-react";
import AnimalCard from "../components/AnimalCard";
import { Button } from "../components/ui/button";
import { getRandomAnimal, Animal, getRandomImage } from "../lib/animals";
import AnimatedContainer from "../components/AnimatedContainer";
import { useToast } from "../hooks/use-toast";
import ProfileBadge from "../components/ProfileBadge";

const Random = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [previousAnimals, setPreviousAnimals] = useState<Animal[]>([]);
  
  useEffect(() => {
    // Load initial animal
    setAnimal(getRandomAnimal());
  }, []);
  
  const handleNewAnimal = () => {
    setIsChanging(true);
    
    // Save current animal to history
    if (animal) {
      // Avoid duplicates in history
      if (!previousAnimals.some(prevAnimal => prevAnimal.id === animal.id)) {
        setPreviousAnimals(prev => [...prev.slice(-4), animal]);
      }
    }
    
    // Add delay for animation
    setTimeout(() => {
      const newAnimal = getRandomAnimal();
      setAnimal(newAnimal);
      setIsChanging(false);
      
      toast({
        title: "New inspiration loaded!",
        description: `Exploring: ${newAnimal.name}`,
      });
    }, 300);
  };
  
  const handleBiomimicrosity = () => {
    if (animal) {
      navigate(`/biomimicrosity?animal=${animal.id}`);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-safari-lime/30 to-safari-cream">
      <header className="py-6 px-4 flex justify-between items-center bg-safari-orange text-white shadow-md">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="flex items-center text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <h1 className="text-xl font-bold">Random Safari</h1>
        
        <ProfileBadge />
      </header>
      
      <main className="flex-1 flex flex-col items-center px-4 py-6 max-w-3xl mx-auto w-full">
        <AnimatedContainer 
          animation={isChanging ? "fade" : "fade"} 
          className={`w-full max-w-md ${isChanging ? "opacity-0" : "opacity-100"}`}
        >
          {animal && <AnimalCard animal={animal} showFacts={true} />}
        </AnimatedContainer>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            onClick={handleNewAnimal}
            className="flex items-center justify-center bg-safari-green hover:bg-safari-green/90 text-white"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            New Animal
          </Button>
          
          <Button
            variant="outline"
            onClick={handleBiomimicrosity}
            className="border-safari-orange text-safari-orange hover:bg-safari-orange/10"
          >
            Start 4-Step Activity
          </Button>
        </div>
        
        {previousAnimals.length > 0 && (
          <div className="mt-12 w-full">
            <h2 className="text-xl font-bold mb-4 text-safari-brown">Previously Explored</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previousAnimals.map((prevAnimal, index) => (
                <div 
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setAnimal(prevAnimal)}
                >
                  <AnimatedContainer 
                    animation="fade" 
                    delay={index * 100}
                    className="h-full"
                  >
                    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center h-full border-l-4 border-safari-orange">
                      <div className="h-12 w-12 bg-gray-100 rounded-md mr-3 flex items-center justify-center overflow-hidden">
                        {prevAnimal.image === "?" ? (
                          <HelpCircle className="h-6 w-6 text-gray-400" />
                        ) : (
                          <img 
                            src={typeof prevAnimal.image === 'string' ? prevAnimal.image : getRandomImage(prevAnimal.image)} 
                            alt={prevAnimal.name} 
                            className="h-full w-full object-contain" 
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{prevAnimal.name}</h3>
                        <p className="text-sm text-gray-500 truncate max-w-[200px]">{prevAnimal.question.substring(0, 40)}...</p>
                      </div>
                    </div>
                  </AnimatedContainer>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Random;
