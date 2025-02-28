
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, HelpCircle, ExternalLink } from "lucide-react";
import AnimalCard from "../components/AnimalCard";
import { Button } from "../components/ui/button";
import { getRandomAnimal, Animal, getRandomImage, bookInfo, BOOK_COVER } from "../lib/animals";
import AnimatedContainer from "../components/AnimatedContainer";
import ProfileBadge from "../components/ProfileBadge";

// Default fallback image that is guaranteed to exist
const DEFAULT_FALLBACK = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";

// Mapping of animal IDs to their primary thumbnail images
const animalThumbnails: Record<string, string> = {
  "twice-stabbed-stink-bug": "/lovable-uploads/78a6b72b-4069-40ee-a78b-15ecf7acea3d.png",
  "moonrat": "/lovable-uploads/ad213540-469d-407b-a147-4899319b2ef4.png",
  "hercules-beetle": "/lovable-uploads/fa0dc4ec-7637-4fd4-91d3-32e96249f92f.png",
  "naked-mole-rat": "/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png",
  "southern-hairy-nosed-wombat": "/lovable-uploads/e15c59a6-e20f-47bd-9d62-e5028ecb994c.png",
  "vampire-squid": "/lovable-uploads/1d7339ad-b285-43e9-a6b6-1314465ec4bc.png",
  "red-lipped-batfish": "/lovable-uploads/2282b28d-4320-4022-b465-d8a1e009082a.png",
  "unicorn-fish": "/lovable-uploads/fe2688f7-2b9c-4dfb-87b1-1b59a2847db9.png",
  "agra-cadabra": "/lovable-uploads/5198a0b6-c5ce-4228-b837-a314cee5ca8d.png",
  "yeti-crab": "/lovable-uploads/930ae911-cd64-4277-9e81-9993ed4ecf7b.png",
  "wunderpus-octopus": "/lovable-uploads/d8d68f30-d905-40eb-b414-91b26bc78d36.png",
  "hellbender": "/lovable-uploads/7b54880d-fa56-4f4f-957e-c6f6a46eb2b6.png",
  "spined-assassin-bug": "/lovable-uploads/e37f63ba-6b94-4f10-87a2-5121b21a7ac2.png",
  "flying-dragon": "/lovable-uploads/d2a1aa74-8d30-4f7e-996c-78ca522be1d2.png",
  "komodo-dragon": "/lovable-uploads/9fa472e1-640b-419f-a567-29269d7f0b56.png",
  "leafy-sea-dragon": "/lovable-uploads/6d46bd6b-028e-4023-b686-dbdc3e37207a.png",
  "sparklemuffin-peacock-spider": "/lovable-uploads/bd8e6eba-d75a-4091-b9eb-9d01aab80b31.png",
  "blue-footed-booby": "/lovable-uploads/6897367d-a430-4f51-a44b-121384738827.png",
  "screaming-hairy-armadillo": "/lovable-uploads/83a9a168-32af-4519-b78b-51be96eb5da7.png",
  "caramel-coated-capybara": "/lovable-uploads/a921d78a-a617-405b-af5e-ba4fd16eb181.png",
  "pink-fairy-armadillo": "/lovable-uploads/bd7c3d5a-85af-4cbc-bbf0-e7b84e278a78.png",
  "goblin-shark": "/lovable-uploads/5e619189-b98d-4c22-8e23-cff80bc2b7da.png",
  "fried-egg-jellyfish": "/lovable-uploads/6f706930-a007-4787-8190-8dd117cbe6d2.png",
  "candy-striped-hermit-crab": "/lovable-uploads/a9979d2e-efc7-4763-98ce-69602a6e55e9.png",
  "pancake-tortoise": "/lovable-uploads/60a4b820-e601-4a27-a1ef-e001f2d68e9b.png",
  "potato-cod": "/lovable-uploads/07536683-61e2-4723-82c1-defa44d108fc.png",
  "raspberry-crazy-ant": "/lovable-uploads/8487b8af-806f-4758-97ae-43854f70b4b6.png",
  "australian-ghost-shark": "/lovable-uploads/b6d60faf-4825-4b5e-97b4-2e8970649602.png",
  "monkeyface-prickleback": "/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png",
  "sarcastic-fringehead": "/lovable-uploads/8c79dbe2-73ec-4260-9abb-104b2de92996.png",
  "long-wattled-umbrellabird": "/lovable-uploads/fb824a16-e514-4e58-a21b-87c220bfdc8e.png",
  "blobfish": "/lovable-uploads/eb0a6e45-42af-4c28-98d3-3f7c6a7a82ff.png",
  "pyjama-squid": "/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png",
  "cuckoo-wasp": "/lovable-uploads/f157dcd0-9218-4d98-abd2-42e051483a08.png",
  "ba-humbugi": "/lovable-uploads/7c8c7438-96f5-483c-8f8a-a7b96ebcf229.png",
  "lionhead-rabbit": "/lovable-uploads/fb87f26b-313f-4968-85eb-4f5895bb5ade.png",
  "hagfish": "/lovable-uploads/26ed8a88-1b0b-4643-b0e2-12f1491364d3.png",
  "poison-dart-frog": "/lovable-uploads/f1e987b7-ef95-43af-8629-a5385bc56ed9.png",
  "bone-eating-snot-flower-worm": "/lovable-uploads/57f09d26-cde9-4730-8967-b6c037b44528.png",
  "hickory-horned-devil": "/lovable-uploads/b243e9ce-c47f-4f9c-a4a8-cf591b0b54e2.png",
  "honey-badger": "/lovable-uploads/ddacacb5-d210-4b3f-a705-0a0958330fc6.png",
  "chocolate-dipped-damselfish": "/lovable-uploads/e86cf5b4-84d5-4754-b8a6-ff7b0e604ea2.png",
  "pieza-pi": "/lovable-uploads/c843c985-49b9-4baa-8d84-839084778214.png",
  "banana-slug": "/lovable-uploads/9b9595ae-b4e2-43fa-b83c-6ca66e17323d.png",
  "waxy-monkey-tree-frog": "/lovable-uploads/e931cfc9-6e89-4dad-9a01-10bde4da20c1.png",
  "chicken-turtle": "/lovable-uploads/8ed3ae0d-1a26-4996-9d15-2a7f04a850d9.png",
  "dogface-butterfly": "/lovable-uploads/74ad3c1d-8f45-4b60-ab56-b3e8e64a8569.png",
  "headless-chicken-monster": "/lovable-uploads/10e9d55f-42ff-486c-bd56-59d1e72e36a3.png"
};

const Random = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [previousAnimals, setPreviousAnimals] = useState<Animal[]>([]);
  
  useEffect(() => {
    // Load initial animal
    const initialAnimal = getRandomAnimal();
    setAnimal(initialAnimal);
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
        
        <h1 className="text-sm sm:text-lg font-bold">Curiosity Service Design Safari</h1>
        
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
            className="flex items-center justify-center bg-[#65A30D] hover:bg-[#65A30D]/90 text-white"
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
        
        <div className="mt-4 w-full">
          <a 
            href="https://www.thescreaminghairyarmadillo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              className="w-full bg-gradient-to-r from-safari-orange to-safari-blue text-white font-medium"
            >
              <span className="mx-auto flex items-center justify-center">
                Random Curiosity Generator: Animal Style
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </a>
        </div>
        
        {previousAnimals.length > 0 && (
          <div className="mt-12 w-full">
            <h2 className="text-xl font-bold mb-4 text-[#8B4513]">Previously Explored</h2>
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
                    <div className="p-4 bg-[#FEF9E8] rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center h-full border-l-4 border-safari-orange">
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
                        <h3 className="font-medium text-[#8B4513]">{prevAnimal.name}</h3>
                        <p className="text-xs text-gray-500 truncate max-w-[200px]">{prevAnimal.question.substring(0, 40)}...</p>
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
