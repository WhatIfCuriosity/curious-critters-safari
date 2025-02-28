
import React, { useState } from "react";
import { Animal, getRandomImage, getServiceDesignQuestion } from "@/lib/animals";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle, ChevronDown, ChevronUp } from "lucide-react";

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
  
  const [showAllFacts, setShowAllFacts] = useState(false);

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

  const toggleShowAllFacts = () => {
    setShowAllFacts(!showAllFacts);
  };

  return (
    <Card className={`w-full max-w-md mx-auto overflow-hidden rounded-xl ${className}`}>
      <div 
        className="relative aspect-[3/2] overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={currentImage}
          alt={animal.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
        {typeof animal.image !== "string" && animal.image.length > 1 && (
          <div className="absolute top-2 right-2 bg-white/80 text-xs p-1 rounded-md">
            Tap for more images
          </div>
        )}
      </div>

      <CardContent className="pt-3 text-left">
        <h2 className="text-2xl font-bold mb-2 text-[#92400E]">{animal.name}</h2>
        <div className="inline-block px-3 py-1 mb-3 text-sm rounded-full bg-gray-100/80">
          {animal.category.charAt(0).toUpperCase() + animal.category.slice(1)}
        </div>

        <p className="text-lg font-medium italic mb-4 text-[#78350F] text-left">"{serviceDesignQuestion}"</p>

        {showFacts && (
          <div className="mt-2">
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center mr-2">
                <span className="text-xs">i</span>
              </div>
              <h3 className="text-lg font-semibold text-[#92400E]">Fun Facts</h3>
            </div>
            <ul className="space-y-2 text-left">
              {animal.facts.slice(0, showAllFacts ? animal.facts.length : 1).map((fact, index) => (
                <li key={index} className="text-sm flex items-start">
                  <span className="text-[#EA580C] mr-2">•</span>
                  <span className="text-[#78350F]">{fact}</span>
                </li>
              ))}
            </ul>
            
            {animal.facts.length > 1 && (
              <Button 
                variant="ghost" 
                onClick={toggleShowAllFacts}
                className="mt-2 p-0 h-auto text-[#EA580C] hover:text-[#92400E] hover:bg-transparent flex items-center"
              >
                {showAllFacts ? (
                  <>
                    <span>Show fewer facts</span>
                    <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Show more facts</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
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
