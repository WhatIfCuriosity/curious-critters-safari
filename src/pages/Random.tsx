
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import AnimalCard from "@/components/AnimalCard";
import Button from "@/components/Button";
import { getRandomAnimal, Animal } from "@/lib/animals";
import AnimatedContainer from "@/components/AnimatedContainer";
import { useToast } from "@/hooks/use-toast";
import ProfileBadge from "@/components/ProfileBadge";

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
      setPreviousAnimals(prev => [...prev.slice(-4), animal]);
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
        
        <h1 className="text-xl font-bold">Random Safari</h1>
        
        <ProfileBadge />
      </header>
      
      <main className="flex-1 flex flex-col items-center px-4 py-6 max-w-3xl mx-auto w-full">
        <AnimatedContainer 
          animation={isChanging ? "fade-out" : "fade-in"} 
          className="w-full max-w-md"
        >
          {animal && <AnimalCard animal={animal} showFacts={true} />}
        </AnimatedContainer>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            variant="primary"
            onClick={handleNewAnimal}
            className="flex items-center justify-center"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            New Animal
          </Button>
          
          <Button
            variant="outline"
            onClick={handleBiomimicrosity}
          >
            Start 4-Step Activity
          </Button>
        </div>
        
        {previousAnimals.length > 0 && (
          <div className="mt-12 w-full">
            <h2 className="text-xl font-bold mb-4">Previously Explored</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previousAnimals.map((prevAnimal, index) => (
                <AnimatedContainer 
                  key={index} 
                  animation="fade" 
                  delay={index * 100}
                  className="cursor-pointer"
                  onClick={() => setAnimal(prevAnimal)}
                >
                  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center">
                    <div className="h-12 w-12 bg-gray-100 rounded-md mr-3 flex items-center justify-center overflow-hidden">
                      <img src={prevAnimal.image} alt={prevAnimal.name} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{prevAnimal.name}</h3>
                      <p className="text-sm text-gray-500 truncate max-w-[200px]">{prevAnimal.question.substring(0, 40)}...</p>
                    </div>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Random;
