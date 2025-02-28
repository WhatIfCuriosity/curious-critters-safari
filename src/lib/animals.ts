
export interface Animal {
  id: string;
  name: string;
  question: string;
  facts: string[];
  image: string | string[];
  category: "original" | "sweet" | "weird" | "magical" | "fierce" | "delicious" | "mysterious";
}

const BOOK_COVER = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";
const BOOK_LINK = "https://amzn.to/41maKgG";

export const animals: Animal[] = [
  {
    id: "pink-fairy-armadillo",
    name: "Pink Fairy Armadillo",
    question: "What if a service could be as enchanting and unobtrusive as a Pink Fairy Armadillo in its burrow?",
    facts: [
      "The Pink Fairy Armadillo is the smallest armadillo species",
      "It spends most of its life underground",
      "Its pink color comes from blood vessels showing through its thin shell"
    ],
    image: [BOOK_COVER],
    category: "original"
  },
  {
    id: "goblin-shark",
    name: "Goblin Shark",
    question: "What if a service could adapt its approach as swiftly as a Goblin Shark extends its jaw?",
    facts: [
      "The Goblin Shark can extend its jaws forward to catch prey",
      "It's often called a 'living fossil' because it's the only living member of its family, which dates back 125 million years",
      "It primarily lives in deep ocean waters"
    ],
    image: [BOOK_COVER, BOOK_COVER],
    category: "mysterious"
  },
  {
    id: "red-lipped-batfish",
    name: "Red-Lipped Batfish",
    question: "What if a service could stand out as boldly as a Red-Lipped Batfish's lips?",
    facts: [
      "The Red-Lipped Batfish has bright red lips that stand out against its body",
      "It actually walks on the ocean floor rather than swimming",
      "It uses a modified dorsal fin on its head to lure prey"
    ],
    image: [BOOK_COVER],
    category: "weird"
  },
  {
    id: "flying-dragon",
    name: "Flying Dragon",
    question: "What if a service could glide effortlessly between user needs like a Flying Dragon soars?",
    facts: [
      "The Flying Dragon can glide up to 30 feet between trees",
      "It uses expandable ribs covered with skin to form 'wings'",
      "Despite its name, it's actually a small lizard, not a dragon"
    ],
    image: [BOOK_COVER],
    category: "magical"
  },
  {
    id: "sparklemuffin-peacock-spider",
    name: "Sparklemuffin Peacock Spider",
    question: "What if a service could dazzle users like a Sparklemuffin Peacock Spider's dance?",
    facts: [
      "The Sparklemuffin Peacock Spider performs an elaborate dance to attract mates",
      "It has vibrant, colorful patterns on its abdomen",
      "It's only about the size of a grain of rice",
      "It was discovered in 2015 and named for its dazzling colors and movements"
    ],
    image: ["/lovable-uploads/bd8e6eba-d75a-4091-b9eb-9d01aab80b31.png", "/lovable-uploads/6a968286-9e9f-4704-8c99-dc9dca87952a.png", BOOK_COVER],
    category: "magical"
  },
  {
    id: "blue-footed-booby",
    name: "Blue-Footed Booby",
    question: "What if a service could dance into users' lives like a Blue-Footed Booby's strut?",
    facts: [
      "Blue-Footed Boobies have bright blue feet that they show off in a mating dance",
      "The bluer the feet, the more attractive they are to potential mates",
      "They dive from great heights to catch fish in the ocean"
    ],
    image: [BOOK_COVER, BOOK_COVER],
    category: "weird"
  },
  {
    id: "screaming-hairy-armadillo",
    name: "Screaming Hairy Armadillo",
    question: "What if a service could dig deep into user insights like a Screaming Hairy Armadillo?",
    facts: [
      "The Screaming Hairy Armadillo gets its name from the sound it makes when threatened",
      "It has more hair than other armadillo species",
      "It's an excellent digger, creating burrows for shelter"
    ],
    image: [BOOK_COVER],
    category: "original"
  },
  {
    id: "caramel-coated-capybara",
    name: "Caramel Coated Capybara",
    question: "What if a service could be as warm and inviting as a Caramel Coated Capybara?",
    facts: [
      "The Capybara is the world's largest rodent",
      "They're highly social animals that live in groups",
      "They're excellent swimmers with partially webbed feet"
    ],
    image: [BOOK_COVER],
    category: "sweet"
  },
  {
    id: "vampire-squid",
    name: "Vampire Squid",
    question: "What if a service could illuminate hidden user needs like a Vampire Squid lights up the deep?",
    facts: [
      "The Vampire Squid can turn itself inside out to defend against predators",
      "It can produce bioluminescent light from light organs on its body",
      "Despite its name, it doesn't suck blood and is actually quite gentle"
    ],
    image: [BOOK_COVER],
    category: "mysterious"
  },
  {
    id: "naked-mole-rat",
    name: "Naked Mole Rat",
    question: "What if a service could thrive underground like a Naked Mole Rat's colony?",
    facts: [
      "Naked Mole Rats live in complex underground colonies with a queen, similar to bees",
      "They are almost immune to cancer",
      "They can survive with very little oxygen and feel almost no pain",
      "Despite being called rats, they're more closely related to porcupines and guinea pigs"
    ],
    image: ["/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png", "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png", BOOK_COVER],
    category: "weird"
  },
  {
    id: "long-wattled-umbrellabird",
    name: "Long-Wattled Umbrellabird",
    question: "What if a service could make a statement as distinctive as a Long-Wattled Umbrellabird's wattle?",
    facts: [
      "The Long-Wattled Umbrellabird has a long, feathered wattle that hangs from its chest",
      "Males can extend their wattle during courtship displays to attract females",
      "It's named for the umbrella-like crest on its head",
      "This bird is found in the humid forests of Colombia and Ecuador"
    ],
    image: ["/lovable-uploads/fb824a16-e514-4e58-a21b-87c220bfdc8e.png", BOOK_COVER],
    category: "mysterious"
  },
  {
    id: "sarcastic-fringehead",
    name: "Sarcastic Fringehead",
    question: "What if a service could adapt to challenges like a Sarcastic Fringehead expands its impressive jaw?",
    facts: [
      "The Sarcastic Fringehead can expand its colorful mouth to an enormous size when threatened",
      "These fish are extremely territorial and will aggressively defend their homes",
      "They live in the Pacific Ocean off the coast of North America",
      "Their name comes from their cranky, aggressive behavior"
    ],
    image: ["/lovable-uploads/8c79dbe2-73ec-4260-9abb-104b2de92996.png", "/lovable-uploads/ffe1fac4-535b-487d-b4fb-4490a85c9409.png", BOOK_COVER],
    category: "fierce"
  },
  {
    id: "southern-hairy-nosed-wombat",
    name: "Southern Hairy-nosed Wombat",
    question: "What if a service could build resilient foundations like a Southern Hairy-nosed Wombat's burrow?",
    facts: [
      "The Southern Hairy-nosed Wombat has specialized teeth that grow continuously throughout its life",
      "Their cube-shaped poop helps prevent it from rolling away from where they mark their territory",
      "They can dig extensive burrow systems with their powerful claws",
      "They are well-adapted to Australia's arid environments with efficient water conservation systems"
    ],
    image: ["/lovable-uploads/9cd1674f-c952-4d10-a2a0-05051c7e9b2c.png", "/lovable-uploads/a921d78a-a617-405b-af5e-ba4fd16eb181.png", BOOK_COVER],
    category: "original"
  },
  {
    id: "monkeyface-prickleback",
    name: "Monkeyface Prickleback",
    question: "What if a service could adapt as easily to its environment as a Monkeyface Prickleback?",
    facts: [
      "Despite its name, the Monkeyface Prickleback is definitely a fish, not a monkey",
      "It gets its name from its facial features that resemble a monkey",
      "It has prickly spines on its dorsal fin",
      "It's a popular fish for catching and eating along the Pacific coast of North America"
    ],
    image: ["/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png", BOOK_COVER],
    category: "weird"
  },
  {
    id: "pyjama-squid",
    name: "Pyjama Squid",
    question: "What if a service could adapt to blend in any environment like a Pyjama Squid with its distinctive stripes?",
    facts: [
      "The Pyjama Squid is actually a type of cuttlefish despite its name",
      "Its distinctive white and brown striped pattern resembles pajamas or a zebra",
      "It can change its color and pattern to camouflage with its surroundings",
      "They're generally nocturnal and hide in the sand or among rocks during the day"
    ],
    image: ["/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png", "/lovable-uploads/298cb0f7-5917-4b2a-bf29-582997fe1d8f.png", BOOK_COVER],
    category: "mysterious"
  }
];

// Keep track of recently shown animals to avoid repeats
let recentlyShownAnimals: string[] = [];
const MAX_RECENT_ANIMALS = Math.min(5, Math.floor(animals.length / 2));

// Helper function to get a random image from multiple options
export const getRandomImage = (image: string | string[]): string => {
  if (typeof image === 'string') {
    return image;
  }
  
  // Select a random image from the array
  const randomIndex = Math.floor(Math.random() * image.length);
  return image[randomIndex];
};

// Improved random animal selection that avoids repeats
export const getRandomAnimal = (): Animal => {
  // If we've shown all animals or almost all, reset the history
  if (recentlyShownAnimals.length >= animals.length - 1) {
    recentlyShownAnimals = [];
  }
  
  // Filter out recently shown animals
  const availableAnimals = animals.filter(
    animal => !recentlyShownAnimals.includes(animal.id)
  );
  
  // Pick a random animal from available ones
  const randomIndex = Math.floor(Math.random() * availableAnimals.length);
  const selectedAnimal = availableAnimals[randomIndex];
  
  // Add to recently shown list
  recentlyShownAnimals.push(selectedAnimal.id);
  
  // Maintain max length for recently shown animals
  if (recentlyShownAnimals.length > MAX_RECENT_ANIMALS) {
    recentlyShownAnimals.shift(); // Remove oldest animal
  }
  
  return selectedAnimal;
};

// Utility function to get animal by ID
export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};

// Book information
export const bookInfo = {
  title: "The Screaming Hairy Armadillo and 76 Other Animals with Weird, Wild Names",
  authors: "Matthew Murrie and Steve Murrie",
  illustrator: "Julie Benbassat",
  description: "A fascinating and funny guide to animals with bizarre names, from the Bald-Faced Hornets to the Fried Egg Jellyfish. Perfect for animal lovers of all ages!",
  link: BOOK_LINK,
  coverImage: BOOK_COVER
};
