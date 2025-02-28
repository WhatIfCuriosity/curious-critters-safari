
import React, { useState } from "react";
import { Animal, getRandomImage, getServiceDesignQuestion } from "@/lib/animals";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
  onNextAnimal?: () => void;
  showRandomButton?: boolean;
  className?: string;
  showFacts?: boolean;
}

const AnimalCard: React.FC<AnimalCardProps> = ({
  animal,
  onNextAnimal,
  showRandomButton = false,
  className = "",
  showFacts = true,
}) => {
  const [currentImage, setCurrentImage] = useState<string>(
    typeof animal.image === "string"
      ? animal.image
      : animal.image[Math.floor(Math.random() * animal.image.length)]
  );
  
  const [showMoreFacts, setShowMoreFacts] = useState(false);

  // Get service design question to use as the main question
  const serviceDesignQuestion = getServiceDesignQuestion(animal.id) || animal.question;

  const handleImageClick = () => {
    if (typeof animal.image === "string") return;
    
    let newImage;
    do {
      newImage = animal.image[Math.floor(Math.random() * animal.image.length)];
    } while (newImage === currentImage && animal.image.length > 1);
    
    setCurrentImage(newImage);
  };

  const toggleShowMoreFacts = () => {
    setShowMoreFacts(!showMoreFacts);
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
            className="object-cover w-full h-full"
          />
        </a>
        {typeof animal.image !== "string" && animal.image.length > 1 && (
          <div className="absolute top-2 right-2 bg-white/80 text-xs p-1 rounded-md">
            Tap for more images
          </div>
        )}
      </div>

      <CardContent className="px-6 py-4">
        <div className="absolute top-4 right-4 bg-pink-100 px-3 py-1 rounded-full text-sm text-pink-800">
          {animal.category.charAt(0).toUpperCase() + animal.category.slice(1)}
        </div>
        
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
