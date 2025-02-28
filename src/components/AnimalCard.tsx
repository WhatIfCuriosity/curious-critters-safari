
import { useEffect, useState } from "react";
import { Animal, getRandomImage, bookInfo } from "../lib/animals";
import AnimatedContainer from "./AnimatedContainer";
import { cn } from "../lib/utils";
import { Info, HelpCircle, ExternalLink } from "lucide-react";

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
  const [hasError, setHasError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [showBookInfo, setShowBookInfo] = useState(false);

  useEffect(() => {
    // Reset states when animal changes
    setIsLoaded(false);
    setHasError(false);
    
    // Handle question mark placeholder or select a random image from available options
    if (animal.image === "?") {
      setIsLoaded(true);
      setHasError(true);
      return;
    }
    
    // Get a random image if multiple are available
    const imageToUse = getRandomImage(animal.image);
    setSelectedImage(imageToUse);
    
    const img = new Image();
    img.src = imageToUse;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error(`Failed to load image: ${imageToUse}`);
      setIsLoaded(true);
      setHasError(true);
      
      // If this image failed, try the book cover as fallback
      if (imageToUse !== bookInfo.coverImage) {
        setSelectedImage(bookInfo.coverImage);
      }
    };
    
    // Fallback in case image doesn't load
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        console.warn(`Image load timeout for: ${imageToUse}`);
        setIsLoaded(true);
        setHasError(true);
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [animal]);

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

  const handleImageClick = () => {
    // If the image is the book cover, open the Amazon link
    if (selectedImage === bookInfo.coverImage) {
      window.open(bookInfo.link, "_blank");
      setShowBookInfo(true);
    } else {
      // For other images, still show book info but don't navigate
      setShowBookInfo(true);
      // This still makes all images act like they're linked to the book
      window.open(bookInfo.link, "_blank");
    }
  };

  return (
    <AnimatedContainer
      animation="scale"
      className={cn(
        "rounded-2xl overflow-hidden shadow-md bg-white border border-safari-orange/30",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden bg-safari-amber/10">
        <div className={`absolute inset-0 ${!isLoaded ? 'animate-pulse bg-safari-amber/20' : ''}`}>
          {hasError || animal.image === "?" ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-safari-cream">
              <HelpCircle className="h-16 w-16 text-safari-orange mb-2" />
              <p className="text-safari-brown text-sm text-center px-4">
                Image from "The Screaming Hairy Armadillo" book needed
              </p>
            </div>
          ) : (
            <div 
              className="relative cursor-pointer group"
              onClick={handleImageClick}
            >
              <img
                src={selectedImage}
                alt={animal.name}
                className={cn(
                  "w-full h-48 object-contain transition-opacity duration-500",
                  isLoaded ? "opacity-100" : "opacity-0"
                )}
                onError={() => {
                  console.error(`Image error event for: ${selectedImage}`);
                  setHasError(true);
                  // Try book cover as fallback
                  if (selectedImage !== bookInfo.coverImage) {
                    setSelectedImage(bookInfo.coverImage);
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/90 text-safari-brown px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  View on Amazon <ExternalLink className="h-3 w-3 ml-1" />
                </span>
              </div>
            </div>
          )}
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
        <h3 className="text-2xl font-bold text-safari-brown mb-2">{animal.name}</h3>
        <p className="text-gray-600 italic mb-4">"{animal.question}"</p>
        
        {showFacts && (
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <Info className="h-5 w-5 text-safari-amber mr-2" />
              <h4 className="font-semibold text-safari-brown">Fun Facts</h4>
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
        
        {showBookInfo && (
          <div className="mt-6 p-4 bg-safari-cream/50 rounded-lg border border-safari-orange/20">
            <h5 className="font-bold text-safari-brown text-sm">From the book:</h5>
            <p className="text-sm mt-1">{bookInfo.title}</p>
            <p className="text-xs text-gray-600 mt-1">by {bookInfo.authors}, illustrated by {bookInfo.illustrator}</p>
            <p className="text-xs mt-2 text-gray-700">{bookInfo.description}</p>
            <a 
              href={bookInfo.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-xs items-center text-safari-orange hover:underline"
            >
              View on Amazon <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        )}
      </div>
    </AnimatedContainer>
  );
};

export default AnimalCard;
