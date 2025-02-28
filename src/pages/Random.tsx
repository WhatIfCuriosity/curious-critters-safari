
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, HelpCircle } from "lucide-react";
import AnimalCard from "../components/AnimalCard";
import { Button } from "../components/ui/button";
import { getRandomAnimal, Animal, getRandomImage, bookInfo, BOOK_COVER } from "../lib/animals";
import AnimatedContainer from "../components/AnimatedContainer";
import { useToast } from "../hooks/use-toast";
import ProfileBadge from "../components/ProfileBadge";

// Default fallback image that is guaranteed to exist
const DEFAULT_FALLBACK = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";

// Mapping of animal IDs to their primary thumbnail images
const animalThumbnails: Record<string, string> = {
  "moonrat": "/lovable-uploads/ad213540-469d-407b-a147-4899319b2ef4.png",
  "hercules-beetle": "/lovable-uploads/fa0dc4ec-7637-4fd4-91d3-32e96249f92f.png",
  "naked-mole-rat": "/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png",
  "southern-hairy-nosed-wombat": "/lovable-uploads/e15c59a6-e20f-47bd-9d62-e5028ecb994c.png",
  "vampire-squid": BOOK_COVER,
  "red-lipped-batfish": "/lovable-uploads/f3205e2a-86cf-4934-887f-c40862c21ab0.png",
  "unicorn-fish": "/lovable-uploads/fe2688f7-2b9c-4dfb-87b1-1b59a2847db9.png"
};

const Random = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [previousAnimals, setPreviousAnimals] = useState<Animal[]>([]);
  
  useEffect(() => {
    // Load initial animal
    const initialAnimal = getRandomAnimal();
    setAnimal(initialAnimal);
    
    // Show welcome toast
    toast({
      title: "Welcome to Random Safari!",
      description: `Exploring: ${initialAnimal.name}`,
    });
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

  // Safely get an image URL for the animal thumbnail
  const getSafeThumbnailImage = (animalImage: string | string[], animalId: string): string => {
    try {
      // Check if we have a predefined thumbnail for this animal
      if (animalThumbnails[animalId]) {
        return animalThumbnails[animalId];
      }
      
      // If it's a string, return it directly
      if (typeof animalImage === 'string') {
        // Check if it's a question mark
        if (animalImage === '?') {
          return DEFAULT_FALLBACK;
        }
        return animalImage;
      }
      
      // If it's an array, get the first image or fallback
      if (animalImage.length > 0) {
        return animalImage[0];
      }
      
      return DEFAULT_FALLBACK;
    } catch (error) {
      console.error('Error getting thumbnail:', error);
      return DEFAULT_FALLBACK;
    }
  };

  // Handle image errors in thumbnails
  const handleThumbnailError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Thumbnail failed to load, using fallback');
    event.currentTarget.src = DEFAULT_FALLBACK;
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
                            src={getSafeThumbnailImage(prevAnimal.image, prevAnimal.id)}
                            alt={prevAnimal.name} 
                            className="h-full w-full object-contain" 
                            onError={handleThumbnailError}
                            loading="eager"
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
