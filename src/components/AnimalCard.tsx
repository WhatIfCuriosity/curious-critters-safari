
import React, { useState, useEffect } from "react";
import { Animal, getRandomImage, getServiceDesignQuestion } from "@/lib/animals";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle, ExternalLink } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
  onNextAnimal?: () => void;
  showRandomButton?: boolean;
  className?: string;
  showFacts?: boolean;
}

// Default fallback image that is guaranteed to exist
const DEFAULT_FALLBACK = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";

// Mapping of animal IDs to their primary images - use this to ensure consistent image display
const animalPrimaryImages: Record<string, string> = {
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
  "headless-chicken-monster": "/lovable-uploads/10e9d55f-42ff-486c-bd56-59d1e72e36a3.png",
  "white-bellied-go-away-bird": "/lovable-uploads/4386b5e0-605c-4cb5-830f-0a51e565826e.png"
};

const AnimalCard: React.FC<AnimalCardProps> = ({
  animal,
  onNextAnimal,
  showRandomButton = false,
  className = "",
  showFacts = true,
}) => {
  // Get the appropriate image for the animal, prioritizing the predefined mapping
  const getInitialImage = (): string => {
    // ALWAYS use the predefined primary image if available
    if (animalPrimaryImages[animal.id]) {
      return animalPrimaryImages[animal.id];
    }
    
    // Only use the animal's image property as a fallback
    if (typeof animal.image === "string") {
      return animal.image === "?" ? DEFAULT_FALLBACK : animal.image;
    } else if (animal.image && animal.image.length > 0) {
      return animal.image[0];
    }
    
    return DEFAULT_FALLBACK;
  };

  const [currentImage, setCurrentImage] = useState<string>(getInitialImage());
  const [showMoreFacts, setShowMoreFacts] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset image when animal changes
  useEffect(() => {
    // Always use the predefined primary image first
    setCurrentImage(getInitialImage());
    setImageError(false);
    setShowMoreFacts(false); // Reset facts expansion state
  }, [animal.id]);

  const serviceDesignQuestion = getServiceDesignQuestion(animal.id) || animal.question;

  const handleImageClick = () => {
    // Only allow cycling through images if it's an array with multiple images
    if (typeof animal.image !== "string" && animal.image.length > 1) {
      let newImage;
      do {
        // Get a random image from the array that's different from the current one
        newImage = animal.image[Math.floor(Math.random() * animal.image.length)];
      } while (newImage === currentImage && animal.image.length > 1);
      
      setCurrentImage(newImage);
      setImageError(false); // Reset error state when trying a new image
    }
  };

  const handleImageError = () => {
    console.warn(`Image failed to load for ${animal.name}, using fallback`, currentImage);
    
    // If the current image failed, always try using the primary image from our mapping first
    if (animalPrimaryImages[animal.id] && currentImage !== animalPrimaryImages[animal.id]) {
      setCurrentImage(animalPrimaryImages[animal.id]);
    } else if (!imageError) {
      // If we haven't already tried the default fallback, use it
      setCurrentImage(DEFAULT_FALLBACK);
      setImageError(true);
    }
  };

  const toggleShowMoreFacts = () => {
    setShowMoreFacts(!showMoreFacts);
  };

  const getCategoryBgColor = () => {
    if (animal.category === "weird") {
      return "bg-pink-100 text-pink-800";
    }
    return "bg-white/80";
  };

  return (
    <Card className={`w-full max-w-md mx-auto overflow-hidden rounded-xl ${className}`}>
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <a href="https://amzn.to/3QFrWsF" target="_blank" rel="noopener noreferrer">
          <img
            src={currentImage}
            alt={animal.name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </a>
        {typeof animal.image !== "string" && animal.image.length > 1 && (
          <div className={`absolute top-2 right-2 text-xs p-1 rounded-md ${getCategoryBgColor()}`}>
            {animal.category.charAt(0).toUpperCase() + animal.category.slice(1)}
          </div>
        )}
      </div>

      <CardContent className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-2 text-[#8B4513]">{animal.name}</h2>

        <p className="text-lg italic mb-6 text-[#8B4513]">"{serviceDesignQuestion}"</p>

        {showFacts && (
          <div className="mt-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-[#F97316] text-white flex items-center justify-center mr-2">
                <span className="text-sm">i</span>
              </div>
              <h3 className="text-xl font-bold text-[#8B4513]">Fun Facts</h3>
            </div>
            
            <ul className="space-y-3">
              {animal.facts.slice(0, showMoreFacts ? animal.facts.length : 1).map((fact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#F97316] mr-2 text-xl">•</span>
                  <span className="text-[#8B4513]">{fact}</span>
                </li>
              ))}
            </ul>
            
            {animal.facts.length > 1 && (
              <button 
                onClick={toggleShowMoreFacts}
                className="text-[#F97316] font-medium mt-3 hover:underline"
              >
                {showMoreFacts ? "Show fewer facts" : `Show ${animal.facts.length - 1} more facts`}
              </button>
            )}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200">
          <a 
            href="https://amzn.to/3QFrWsF" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:bg-safari-cream/40 p-2 rounded-lg transition-colors"
          >
            <img 
              src="/lovable-uploads/00a5381a-e137-4afc-8bbf-a00815e14f5d.png" 
              alt="The Screaming Hairy Armadillo Book Cover" 
              className="w-16 h-auto mr-3 shadow-md rounded-sm"
            />
            <div>
              <p className="text-sm font-medium text-[#8B4513]">Discover more unusual animals:</p>
              <p className="text-xs text-gray-600">The Screaming Hairy Armadillo and 76 Other Animals with Weird, Wild Names</p>
            </div>
          </a>
        </div>
      </CardContent>

      {showRandomButton && (
        <CardFooter className="justify-center pb-4">
          <Button 
            onClick={onNextAnimal} 
            className="bg-[#65A30D] hover:bg-[#65A30D]/90 text-white font-medium"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            New Animal
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AnimalCard;
