
import { useEffect, useState } from "react";
import { Animal } from "../lib/animals";
import AnimatedContainer from "./AnimatedContainer";
import { cn } from "../lib/utils";
import { Info } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
  showFacts?: boolean;
  className?: string;
}

const AnimalCard = ({
  animal,
  showFacts = false,
  className,
}: AnimalCardProps) => {
  const [showAllFacts, setShowAllFacts] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = animal.image;
    img.onload = () => setIsLoaded(true);
    
    // Fallback in case image doesn't load
    const timeout = setTimeout(() => setIsLoaded(true), 1000);
    
    return () => clearTimeout(timeout);
  }, [animal.image]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sweet":
        return "bg-pink-100 text-pink-800";
      case "weird":
        return "bg-purple-100 text-purple-800";
      case "magical":
        return "bg-blue-100 text-blue-800";
      case "fierce":
        return "bg-red-100 text-red-800";
      case "delicious":
        return "bg-amber-100 text-amber-800";
      case "mysterious":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <AnimatedContainer
      animation="scale"
      className={cn(
        "rounded-2xl overflow-hidden shadow-md bg-white",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden bg-safari-amber/10">
        <div className={`absolute inset-0 ${!isLoaded ? 'animate-pulse bg-safari-amber/20' : ''}`}>
          <img
            src={animal.image}
            alt={animal.name}
            className={cn(
              "w-full h-full object-contain transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
        <div className="absolute top-4 right-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            getCategoryColor(animal.category)
          )}>
            {animal.category.charAt(0).toUpperCase() + animal.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{animal.name}</h3>
        <p className="text-gray-600 italic mb-4">"{animal.question}"</p>
        
        {showFacts && (
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <Info className="h-5 w-5 text-safari-amber mr-2" />
              <h4 className="font-semibold text-gray-800">Fun Facts</h4>
            </div>
            <ul className="space-y-2">
              {animal.facts.slice(0, showAllFacts ? undefined : 1).map((fact, index) => (
                <AnimatedContainer
                  key={index}
                  animation="fade"
                  delay={index * 100}
                  className="flex items-start"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-safari-amber mt-2 mr-2" />
                  <p className="text-gray-600">{fact}</p>
                </AnimatedContainer>
              ))}
            </ul>
            
            {animal.facts.length > 1 && (
              <button
                onClick={() => setShowAllFacts(!showAllFacts)}
                className="mt-2 text-safari-amber hover:text-safari-amber/80 text-sm font-medium focus:outline-none"
              >
                {showAllFacts ? "Show less" : `Show ${animal.facts.length - 1} more facts`}
              </button>
            )}
          </div>
        )}
      </div>
    </AnimatedContainer>
  );
};

export default AnimalCard;
