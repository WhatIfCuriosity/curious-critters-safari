
import { useEffect, useState, useRef } from "react";
import { Animal, getRandomImage, bookInfo, BOOK_COVER } from "../lib/animals";
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

// Images for all animals
const TWICE_STABBED_STINK_BUG_IMAGES = [
  "/lovable-uploads/7dd65f6a-01f4-4b19-ab78-4f17217e7f61.png",
  "/lovable-uploads/78a6b72b-4069-40ee-a78b-15ecf7acea3d.png"
];

const NAKED_MOLE_RAT_IMAGES = [
  "/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png", 
  "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png"
];

const MOONRAT_IMAGES = [
  "/lovable-uploads/ad213540-469d-407b-a147-4899319b2ef4.png",
  "/lovable-uploads/4c0bb9db-d9c9-475f-a6b0-a3865c32bc66.png"
];

const AGRA_CADABRA_IMAGES = [
  "/lovable-uploads/5198a0b6-c5ce-4228-b837-a314cee5ca8d.png",
  "/lovable-uploads/4e209bbd-cd62-4664-89f9-0f1d7a2b776e.png"
];

const YETI_CRAB_IMAGES = [
  "/lovable-uploads/930ae911-cd64-4277-9e81-9993ed4ecf7b.png",
  "/lovable-uploads/54f13674-bc2a-4ac5-977b-98285f66941f.png"
];

const WUNDERPUS_OCTOPUS_IMAGES = [
  "/lovable-uploads/d8d68f30-d905-40eb-b414-91b26bc78d36.png"
];

const HELLBENDER_IMAGE = "/lovable-uploads/7b54880d-fa56-4f4f-957e-c6f6a46eb2b6.png";

const SPINED_ASSASSIN_BUG_IMAGE = "/lovable-uploads/e37f63ba-6b94-4f10-87a2-5121b21a7ac2.png";

const FLYING_DRAGON_IMAGES = [
  "/lovable-uploads/d2a1aa74-8d30-4f7e-996c-78ca522be1d2.png",
  "/lovable-uploads/c2c9b2f0-89c0-47ea-b006-e70e2b2043fd.png",
  "/lovable-uploads/a6728415-0632-4a42-b9fa-b402dca7ab54.png",
  "/lovable-uploads/4986cec5-cb02-47e9-b3f5-611b7e7df83e.png"
];

const KOMODO_DRAGON_IMAGE = "/lovable-uploads/9fa472e1-640b-419f-a567-29269d7f0b56.png";

const LEAFY_SEA_DRAGON_IMAGES = [
  "/lovable-uploads/6d46bd6b-028e-4023-b686-dbdc3e37207a.png",
  "/lovable-uploads/90b595ed-7bc8-4c7f-9b41-665093c80180.png"
];

const SPARKLEMUFFIN_PEACOCK_SPIDER_IMAGES = [
  "/lovable-uploads/bd8e6eba-d75a-4091-b9eb-9d01aab80b31.png", 
  "/lovable-uploads/6a968286-9e9f-4704-8c99-dc9dca87952a.png",
  "/lovable-uploads/0b6e48e8-07e5-461f-bc9c-7a7d9f292b91.png"
];

const BLUE_FOOTED_BOOBY_IMAGES = [
  "/lovable-uploads/6897367d-a430-4f51-a44b-121384738827.png", 
  "/lovable-uploads/e26dfbc2-3a9b-4a58-9b4d-2c33e4cabc25.png", 
  "/lovable-uploads/870d7b5e-d363-40d9-9f46-a270bacb437d.png"
];

const PINK_FAIRY_ARMADILLO_IMAGES = [
  "/lovable-uploads/bd7c3d5a-85af-4cbc-bbf0-e7b84e278a78.png", 
  "/lovable-uploads/5b6665f7-758b-4942-8619-671ed0fa0132.png", 
  "/lovable-uploads/ce8c8520-8c58-4029-b828-9d1f65f21d21.png",
  "/lovable-uploads/1193d4dd-e023-4b8d-8625-792f5b1a3409.png"
];

const GOBLIN_SHARK_IMAGES = [
  "/lovable-uploads/5e619189-b98d-4c22-8e23-cff80bc2b7da.png",
  "/lovable-uploads/b4c4722a-5202-447a-8a73-9aaea8000bbc.png"
];

const FRIED_EGG_JELLYFISH_IMAGES = [
  "/lovable-uploads/6f706930-a007-4787-8190-8dd117cbe6d2.png",
  "/lovable-uploads/2b305c5a-f54d-46c7-babb-1cfaf6f05431.png"
];

const CANDY_STRIPED_HERMIT_CRAB_IMAGES = [
  "/lovable-uploads/a9979d2e-efc7-4763-98ce-69602a6e55e9.png",
  "/lovable-uploads/3e41b731-dad5-4490-a5c3-fbefbabdcae6.png"
];

const PANCAKE_TORTOISE_IMAGE = "/lovable-uploads/60a4b820-e601-4a27-a1ef-e001f2d68e9b.png";

const POTATO_COD_IMAGES = [
  "/lovable-uploads/07536683-61e2-4723-82c1-defa44d108fc.png",
  "/lovable-uploads/c2e246ec-84fe-40d5-b525-66c9ff44265e.png"
];

const RASPBERRY_CRAZY_ANT_IMAGES = [
  "/lovable-uploads/8487b8af-806f-4758-97ae-43854f70b4b6.png",
  "/lovable-uploads/2a255d56-5473-44da-8031-6adfa385f369.png"
];

const SARCASTIC_FRINGEHEAD_IMAGES = [
  "/lovable-uploads/8c79dbe2-73ec-4260-9abb-104b2de92996.png", 
  "/lovable-uploads/ffe1fac4-535b-487d-b4fb-4490a85c9409.png"
];

const LONG_WATTLED_UMBRELLABIRD_IMAGE = "/lovable-uploads/fb824a16-e514-4e58-a21b-87c220bfdc8e.png";

const BLOBFISH_IMAGE = "/lovable-uploads/eb0a6e45-42af-4c28-98d3-3f7c6a7a82ff.png";

const PYJAMA_SQUID_IMAGES = [
  "/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png", 
  "/lovable-uploads/298cb0f7-5917-4b2a-bf29-582997fe1d8f.png"
];

const CUCKOO_WASP_IMAGES = [
  "/lovable-uploads/f157dcd0-9218-4d98-abd2-42e051483a08.png", 
  "/lovable-uploads/0923a6e3-70f6-461a-8912-3ee29c3cb1b5.png"
];

const BA_HUMBUGI_IMAGES = [
  "/lovable-uploads/7c8c7438-96f5-483c-8f8a-a7b96ebcf229.png", 
  "/lovable-uploads/52a92cf1-d7c1-45e1-a4c3-e14b10da3e91.png"
];

const CARAMEL_COATED_CAPYBARA_IMAGE = "/lovable-uploads/a921d78a-a617-405b-af5e-ba4fd16eb181.png";

const MONKEYFACE_PRICKLEBACK_IMAGE = "/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png";

const SCREAMING_HAIRY_ARMADILLO_IMAGES = [
  "/lovable-uploads/7b96f153-2562-47fa-ba94-df3d8a4b3be1.png",
  "/lovable-uploads/83a9a168-32af-4519-b78b-51be96eb5da7.png"
];

const RED_LIPPED_BATFISH_IMAGES = [
  "/lovable-uploads/f3205e2a-86cf-4934-887f-c40862c21ab0.png",
  "/lovable-uploads/33cae5a1-1c32-49e5-ad2d-13fd8ba04809.png",
  "/lovable-uploads/2282b28d-4320-4022-b465-d8a1e009082a.png",
  "/lovable-uploads/d8de0004-11df-49e8-a74d-176206ff400c.png"
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
const UNICORN_FISH_IMAGE = "/lovable-uploads/fe2688f7-2b9c-4dfb-87b1-1b59a2847db9.png";

const LIONHEAD_RABBIT_IMAGES = [
  "/lovable-uploads/fb87f26b-313f-4968-85eb-4f5895bb5ade.png",
  "/lovable-uploads/a569de47-f3b9-4c4c-95dd-b13244ac767f.png"
];

const HAGFISH_IMAGE = "/lovable-uploads/26ed8a88-1b0b-4643-b0e2-12f1491364d3.png";

const POISON_DART_FROG_IMAGES = [
  "/lovable-uploads/f1e987b7-ef95-43af-8629-a5385bc56ed9.png",
  "/lovable-uploads/36c20eaf-4b47-443c-9a26-7a337b4862d2.png"
];

const BONE_EATING_SNOT_FLOWER_WORM_IMAGES = [
  "/lovable-uploads/57f09d26-cde9-4730-8967-b6c037b44528.png",
  "/lovable-uploads/93960820-e0cd-4fcb-8903-c75302378bb9.png"
];

const VAMPIRE_SQUID_IMAGES = [
  "/lovable-uploads/1d7339ad-b285-43e9-a6b6-1314465ec4bc.png",
  "/lovable-uploads/dfacb60f-ace9-4bdf-8f0c-74e70615a1f1.png"
];

const HICKORY_HORNED_DEVIL_IMAGES = [
  "/lovable-uploads/b243e9ce-c47f-4f9c-a4a8-cf591b0b54e2.png",
  "/lovable-uploads/0283ed03-15cc-4ecc-bd41-ec583d2fac4a.png"
];

// New Honey Badger images
const HONEY_BADGER_IMAGES = [
  "/lovable-uploads/ddacacb5-d210-4b3f-a705-0a0958330fc6.png",
  "/lovable-uploads/99a13886-4fe8-4f52-9d3c-7d99a8350c7a.png"
];

// New Chocolate Dipped Damselfish image
const CHOCOLATE_DIPPED_DAMSELFISH_IMAGE = "/lovable-uploads/e86cf5b4-84d5-4754-b8a6-ff7b0e604ea2.png";

// New Pieza Pi image
const PIEZA_PI_IMAGE = "/lovable-uploads/c843c985-49b9-4baa-8d84-839084778214.png";

// New Banana Slug images
const BANANA_SLUG_IMAGES = [
  "/lovable-uploads/9b9595ae-b4e2-43fa-b83c-6ca66e17323d.png",
  "/lovable-uploads/7320dbeb-59eb-460c-b8f0-1cad8f7879a3.png"
];

// New Waxy Monkey Tree Frog images
const WAXY_MONKEY_TREE_FROG_IMAGES = [
  "/lovable-uploads/e931cfc9-6e89-4dad-9a01-10bde4da20c1.png",
  "/lovable-uploads/50d45d98-0a48-440f-bd02-d32114066130.png",
  "/lovable-uploads/4f3e5526-bca1-48c2-86b2-da7ed3786e46.png"
];

// New Chicken Turtle images
const CHICKEN_TURTLE_IMAGES = [
  "/lovable-uploads/8ed3ae0d-1a26-4996-9d15-2a7f04a850d9.png",
  "/lovable-uploads/fa9636a2-cba8-4b4a-bb78-a4f140e27400.png"
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
      if (animal.id === "twice-stabbed-stink-bug") {
        return TWICE_STABBED_STINK_BUG_IMAGES;
      } else if (animal.id === "naked-mole-rat") {
        return NAKED_MOLE_RAT_IMAGES;
      } else if (animal.id === "moonrat") {
        return MOONRAT_IMAGES;
      } else if (animal.id === "agra-cadabra") {
        return AGRA_CADABRA_IMAGES;
      } else if (animal.id === "yeti-crab") {
        return YETI_CRAB_IMAGES;
      } else if (animal.id === "wunderpus-octopus") {
        return WUNDERPUS_OCTOPUS_IMAGES;
      } else if (animal.id === "hellbender") {
        return HELLBENDER_IMAGE;
      } else if (animal.id === "spined-assassin-bug") {
        return SPINED_ASSASSIN_BUG_IMAGE;
      } else if (animal.id === "flying-dragon") {
        return FLYING_DRAGON_IMAGES;
      } else if (animal.id === "komodo-dragon") {
        return KOMODO_DRAGON_IMAGE;
      } else if (animal.id === "leafy-sea-dragon") {
        return LEAFY_SEA_DRAGON_IMAGES;
      } else if (animal.id === "sparklemuffin-peacock-spider") {
        return SPARKLEMUFFIN_PEACOCK_SPIDER_IMAGES;
      } else if (animal.id === "blue-footed-booby") {
        return BLUE_FOOTED_BOOBY_IMAGES;
      } else if (animal.id === "pink-fairy-armadillo") {
        return PINK_FAIRY_ARMADILLO_IMAGES;
      } else if (animal.id === "goblin-shark") {
        return GOBLIN_SHARK_IMAGES;
      } else if (animal.id === "fried-egg-jellyfish") {
        return FRIED_EGG_JELLYFISH_IMAGES;
      } else if (animal.id === "candy-striped-hermit-crab") {
        return CANDY_STRIPED_HERMIT_CRAB_IMAGES;
      } else if (animal.id === "pancake-tortoise") {
        return PANCAKE_TORTOISE_IMAGE;
      } else if (animal.id === "potato-cod") {
        return POTATO_COD_IMAGES;
      } else if (animal.id === "raspberry-crazy-ant") {
        return RASPBERRY_CRAZY_ANT_IMAGES;
      } else if (animal.id === "sarcastic-fringehead") {
        return SARCASTIC_FRINGEHEAD_IMAGES;
      } else if (animal.id === "long-wattled-umbrellabird") {
        return LONG_WATTLED_UMBRELLABIRD_IMAGE;
      } else if (animal.id === "blobfish") {
        return BLOBFISH_IMAGE;
      } else if (animal.id === "pyjama-squid") {
        return PYJAMA_SQUID_IMAGES;
      } else if (animal.id === "cuckoo-wasp") {
        return CUCKOO_WASP_IMAGES;
      } else if (animal.id === "ba-humbugi") {
        return BA_HUMBUGI_IMAGES;
      } else if (animal.id === "caramel-coated-capybara") {
        return CARAMEL_COATED_CAPYBARA_IMAGE;
      } else if (animal.id === "monkeyface-prickleback") {
        return MONKEYFACE_PRICKLEBACK_IMAGE;
      } else if (animal.id === "screaming-hairy-armadillo") {
        return SCREAMING_HAIRY_ARMADILLO_IMAGES;
      } else if (animal.id === "red-lipped-batfish") {
        return RED_LIPPED_BATFISH_IMAGES;
      } else if (animal.id === "australian-ghost-shark") {
        return AUSTRALIAN_GHOST_SHARK_IMAGE;
      } else if (animal.id === "hercules-beetle") {
        return HERCULES_BEETLE_IMAGES;
      } else if (animal.id === "southern-hairy-nosed-wombat") {
        return SOUTHERN_WOMBAT_IMAGES;
      } else if (animal.id === "unicorn-fish") {
        return UNICORN_FISH_IMAGE;
      } else if (animal.id === "vampire-squid") {
        return VAMPIRE_SQUID_IMAGES;
      } else if (animal.id === "lionhead-rabbit") {
        return LIONHEAD_RABBIT_IMAGES;
      } else if (animal.id === "hagfish") {
        return HAGFISH_IMAGE;
      } else if (animal.id === "poison-dart-frog") {
        return POISON_DART_FROG_IMAGES;
      } else if (animal.id === "bone-eating-snot-flower-worm") {
        return BONE_EATING_SNOT_FLOWER_WORM_IMAGES;
      } else if (animal.id === "hickory-horned-devil") {
        return HICKORY_HORNED_DEVIL_IMAGES;
      } else if (animal.id === "honey-badger") {
        return HONEY_BADGER_IMAGES;
      } else if (animal.id === "chocolate-dipped-damselfish") {
        return CHOCOLATE_DIPPED_DAMSELFISH_IMAGE;
      } else if (animal.id === "pieza-pi") {
        return PIEZA_PI_IMAGE;
      } else if (animal.id === "banana-slug") {
        return BANANA_SLUG_IMAGES;
      } else if (animal.id === "waxy-monkey-tree-frog") {
        return WAXY_MONKEY_TREE_FROG_IMAGES;
      } else if (animal.id === "chicken-turtle") {
        return CHICKEN_TURTLE_IMAGES;
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
