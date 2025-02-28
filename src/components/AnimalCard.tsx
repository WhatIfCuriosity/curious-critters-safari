
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

  // Get service design question
  const serviceDesignQuestion = getServiceDesignQuestion(animal.id);

  const handleImageClick = () => {
    if (typeof animal.image === "string") return;
    
    let newImage;
    do {
      newImage = animal.image[Math.floor(Math.random() * animal.image.length)];
    } while (newImage === currentImage && animal.image.length > 1);
    
    setCurrentImage(newImage);
  };

  return (
    <Card className={`w-full max-w-md mx-auto overflow-hidden ${className}`}>
      <div 
        className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
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

      <CardContent className="pt-4 text-center">
        <h2 className="text-2xl font-bold mb-2">{animal.name}</h2>
        <div className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-gray-100">
          {animal.category.charAt(0).toUpperCase() + animal.category.slice(1)}
        </div>

        <p className="text-lg font-medium italic mb-4">{animal.question}</p>

        {showFacts && (
          <ul className="space-y-2 text-left list-disc list-inside">
            {animal.facts.map((fact, index) => (
              <li key={index} className="text-sm">
                {fact}
              </li>
            ))}
          </ul>
        )}

        {serviceDesignQuestion && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Service Design Question:</h3>
            <p className="italic text-blue-700">{serviceDesignQuestion}</p>
          </div>
        )}
      </CardContent>

      {showRandomButton && (
        <CardFooter className="justify-center pb-4">
          <Button 
            onClick={onNextAnimal} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Show me another animal
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AnimalCard;
