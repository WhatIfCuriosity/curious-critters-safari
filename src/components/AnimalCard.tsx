import { useEffect, useState, useRef } from "react";
import { Animal, getRandomImage, bookInfo } from "../lib/animals";
import AnimatedContainer from "./AnimatedContainer";
import { cn } from "../lib/utils";
import { Info, HelpCircle, ExternalLink } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
  showFacts?: boolean;
  className?: string;
}

// Default placeholder image that's guaranteed to exist in the project
const DEFAULT_PLACEHOLDER = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png"; // Book cover

// Use a global cache to persist between component unmounts/remounts with animal ID as key
const globalImageCache: Record<string, string> = {};

const AnimalCard = ({
  animal,
  showFacts = false,
  className,
}: AnimalCardProps) => {
  const [showAllFacts, setShowAllFacts] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(DEFAULT_PLACEHOLDER);
  const [showBookInfo, setShowBookInfo] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  
  // Use ref to track if component is mounted
  const isMounted = useRef(true);

  // Reset loading state when animal changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setRetryCount(0);
    
    // If we have a cached image for this animal, use it immediately
    if (globalImageCache[animal.id]) {
      setSelectedImage(globalImageCache[animal.id]);
      setIsLoaded(true);
    } else {
      // Otherwise start with placeholder while we load
      setSelectedImage(DEFAULT_PLACEHOLDER);
    }
  }, [animal.id]);
  
  // Cleanup function
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  // Handle image loading
  useEffect(() => {
    // If already loaded or has error, don't try to load again
    if (isLoaded || hasError) return;
    
    // Handle question mark placeholder
    if (animal.image === "?") {
      setSelectedImage(DEFAULT_PLACEHOLDER);
      setIsLoaded(true);
      setHasError(true);
      return;
    }
    
    // Function to load an image
    const loadImage = () => {
      if (!isMounted.current) return;
      
      // Get a random image if multiple are available
      const imageToUse = getRandomImage(animal.image);
      
      // Pre-load the image
      const img = new Image();
      
      // Set up event handlers before setting src
      img.onload = () => {
        if (!isMounted.current) return;
        
        // Save to global cache using animal ID as key
        globalImageCache[animal.id] = imageToUse;
        
        setSelectedImage(imageToUse);
        setIsLoaded(true);
        setHasError(false);
      };
      
      img.onerror = () => {
        if (!isMounted.current) return;
        
        console.error(`Failed to load image for ${animal.name}: ${imageToUse}, retry: ${retryCount}`);
        
        // If we have retries left and multiple images available, try another
        if (retryCount < MAX_RETRIES && Array.isArray(animal.image) && animal.image.length > 1) {
          setRetryCount(prev => prev + 1);
          setTimeout(loadImage, 800); // Longer delay before retrying
        } else {
          // Use the book cover as final fallback
          setSelectedImage(DEFAULT_PLACEHOLDER);
          setIsLoaded(true);
          setHasError(true);
          
          // Cache the fallback image to prevent further loading attempts
          globalImageCache[animal.id] = DEFAULT_PLACEHOLDER;
        }
      };
      
      // Now set the src to trigger loading
      img.src = imageToUse;
      
      // Handle browsers that might have the image cached already
      if (img.complete) {
        img.onload = null;
        setSelectedImage(imageToUse);
        setIsLoaded(true);
        setHasError(false);
        globalImageCache[animal.id] = imageToUse;
      }
    };
    
    // Start loading process
    loadImage();
    
    // Fallback timeout in case loading takes too long
    const timeout = setTimeout(() => {
      if (!isLoaded && isMounted.current) {
        console.warn(`Image load timeout for ${animal.name}, using fallback`);
        setSelectedImage(DEFAULT_PLACEHOLDER);
        setIsLoaded(true);
        setHasError(true);
        globalImageCache[animal.id] = DEFAULT_PLACEHOLDER;
      }
    }, 10000); // Longer timeout
    
    return () => {
      clearTimeout(timeout);
    };
  }, [animal.id, animal.name, animal.image, isLoaded, hasError, retryCount]);

  // Additional runtime error handler
  const handleImageError = () => {
    console.error(`Runtime image error for ${animal.name}: ${selectedImage}`);
    
    // Prevent infinite error loop by checking if already using fallback
    if (selectedImage !== DEFAULT_PLACEHOLDER) {
      setSelectedImage(DEFAULT_PLACEHOLDER);
      setHasError(true);
      globalImageCache[animal.id] = DEFAULT_PLACEHOLDER;
    }
  };

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
    // Show book info when image is clicked
    setShowBookInfo(prev => !prev);
    
    // Only open Amazon link when book cover is clicked
    if (selectedImage === bookInfo.coverImage) {
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
          {hasError ? (
            <div className="w-full h-48 flex flex-col items-center justify-center bg-safari-cream">
              <HelpCircle className="h-16 w-16 text-safari-orange mb-2" />
              <p className="text-safari-brown text-sm text-center px-4">
                Image unavailable - using placeholder
              </p>
            </div>
          ) : (
            <div 
              className="relative cursor-pointer group h-48 flex items-center justify-center bg-safari-cream/50"
              onClick={handleImageClick}
            >
              {/* Always render the image but control visibility with CSS */}
              <img
                src={selectedImage}
                alt={animal.name}
                className={cn(
                  "max-w-full max-h-48 object-contain transition-opacity duration-300",
                  isLoaded ? "opacity-100" : "opacity-0"
                )}
                onError={handleImageError}
                loading="eager"
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/90 text-safari-brown px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  {selectedImage === bookInfo.coverImage ? "View on Amazon" : "Learn More"} <ExternalLink className="h-3 w-3 ml-1" />
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
