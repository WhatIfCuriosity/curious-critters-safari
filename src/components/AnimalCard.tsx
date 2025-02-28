
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

// New images for animals missing proper imagery
const NAKED_MOLE_RAT_IMAGES = [
  "/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png", 
  "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png"
];

const MOONRAT_IMAGES = [
  "/lovable-uploads/ad213540-469d-407b-a147-4899319b2ef4.png",
  "/lovable-uploads/4c0bb9db-d9c9-475f-a6b0-a3865c32bc66.png"
];

const MONKEYFACE_PRICKLEBACK_IMAGE = "/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png";
const SCREAMING_HAIRY_ARMADILLO_IMAGE = "/lovable-uploads/7b96f153-2562-47fa-ba94-df3d8a4b3be1.png";
const RED_LIPPED_BATFISH_IMAGES = [
  "/lovable-uploads/f3205e2a-86cf-4934-887f-c40862c21ab0.png",
  "/lovable-uploads/33cae5a1-1c32-49e5-ad2d-13fd8ba04809.png"
];
const AUSTRALIAN_GHOST_SHARK_IMAGE = "/lovable-uploads/b6d60faf-4825-4b5e-97b4-2e8970649602.png";
const HERCULES_BEETLE_IMAGES = [
  "/lovable-uploads/fa0dc4ec-7637-4fd4-91d3-32e96249f92f.png",
  "/lovable-uploads/07210a5f-1f2f-443a-917e-ea437efd5e89.png"
];
const SOUTHERN_WOMBAT_IMAGES = [
  "/lovable-uploads/e15c59a6-e20f-47bd-9d62-e5028ecb994c.png",
  "/lovable-uploads/73762eb7-97bd-44f0-9064-9ec199c90cbd.png", 
  "/lovable-uploads/de9414a0-a291-4caf-8d6d-a889a8e4d749.png"
];

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

  // Reset loading state when animal changes and set default image mapping
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setRetryCount(0);
    setShowBookInfo(false);
    
    // Clear the cached image for this animal to ensure we get a fresh random image
    delete globalImageCache[animal.id];
    
    // Start with placeholder while we load
    setSelectedImage(DEFAULT_PLACEHOLDER);
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
    
    // Function to ensure specific animals get their correct images
    const getImageOptionsForAnimal = (animal: Animal): string | string[] => {
      // Explicit handling for specific animals based on their ID
      if (animal.id === "naked-mole-rat") {
        return NAKED_MOLE_RAT_IMAGES;
      } else if (animal.id === "moonrat") {
        return MOONRAT_IMAGES;
      } else if (animal.id === "monkeyface-prickleback") {
        return MONKEYFACE_PRICKLEBACK_IMAGE;
      } else if (animal.id === "screaming-hairy-armadillo") {
        return SCREAMING_HAIRY_ARMADILLO_IMAGE;
      } else if (animal.id === "red-lipped-batfish") {
        return RED_LIPPED_BATFISH_IMAGES;
      } else if (animal.id === "australian-ghost-shark") {
        return AUSTRALIAN_GHOST_SHARK_IMAGE;
      } else if (animal.id === "hercules-beetle") {
        return HERCULES_BEETLE_IMAGES;
      } else if (animal.id === "southern-hairy-nosed-wombat") {
        return SOUTHERN_WOMBAT_IMAGES;
      } else if (animal.id === "vampire-squid") {
        return BOOK_COVER; // Always use book cover for vampire squid
      } else {
        return animal.image;
      }
    };
    
    // Function to load an image
    const loadImage = () => {
      if (!isMounted.current) return;
      
      // Get the appropriate image options for this specific animal
      const imageSource = getImageOptionsForAnimal(animal);
      
      // Filter out book cover from image options to prioritize actual animal images
      const imageOptions = typeof imageSource === 'string' 
        ? imageSource 
        : imageSource.filter(img => img !== DEFAULT_PLACEHOLDER && img !== bookInfo.coverImage);
      
      // Only use book cover if no other images are available
      if (Array.isArray(imageOptions) && imageOptions.length === 0) {
        setSelectedImage(DEFAULT_PLACEHOLDER);
        setIsLoaded(true);
        setHasError(true);
        globalImageCache[animal.id] = DEFAULT_PLACEHOLDER;
        return;
      }
      
      // Get a random image from filtered options
      const imageToUse = typeof imageOptions === 'string' ? imageOptions : imageOptions[Math.floor(Math.random() * imageOptions.length)];
      
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
        if (retryCount < MAX_RETRIES && Array.isArray(imageOptions) && imageOptions.length > 1) {
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
