
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
      "Its pink color comes from blood vessels showing through its thin shell",
      "It's also known for its silky white fur and tiny size",
      "The Pink Fairy Armadillo has specialized claws for digging through sand"
    ],
    image: [
      "/lovable-uploads/bd7c3d5a-85af-4cbc-bbf0-e7b84e278a78.png", 
      "/lovable-uploads/5b6665f7-758b-4942-8619-671ed0fa0132.png", 
      "/lovable-uploads/ce8c8520-8c58-4029-b828-9d1f65f21d21.png",
      "/lovable-uploads/1193d4dd-e023-4b8d-8625-792f5b1a3409.png"
    ],
    category: "original"
  },
  {
    id: "moonrat",
    name: "Moonrat",
    question: "What if a service could adapt to harsh environments like a Moonrat thrives in mangrove forests?",
    facts: [
      "Moonrats mark their territory by spraying a powerful scent from their anal glands",
      "Their scientific name is Echinosorex gymnura",
      "They inhabit mangrove and swamp forests of Southeast Asia",
      "Despite their name, they're not related to rats - they're actually in the same family as hedgehogs",
      "They have a long, pointed snout and a scaly, rat-like tail"
    ],
    image: [
      "/lovable-uploads/ad213540-469d-407b-a147-4899319b2ef4.png",
      "/lovable-uploads/4c0bb9db-d9c9-475f-a6b0-a3865c32bc66.png"
    ],
    category: "weird"
  },
  {
    id: "hercules-beetle",
    name: "Hercules Beetle",
    question: "What if a service could demonstrate strength like a Hercules Beetle, carrying 850 times its own weight?",
    facts: [
      "The Hercules Beetle is one of the world's strongest creatures relative to its size",
      "It can lift up to 850 times its own body weight",
      "Male beetles have distinctive long horns they use for fighting rivals",
      "Their color can change from green to black depending on humidity",
      "They're among the largest beetle species, growing up to 7 inches long"
    ],
    image: [
      "/lovable-uploads/fa0dc4ec-7637-4fd4-91d3-32e96249f92f.png",
      "/lovable-uploads/07210a5f-1f2f-443a-917e-ea437efd5e89.png"
    ],
    category: "fierce"
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
    image: [
      "/lovable-uploads/d51adab8-b69f-4ea2-b209-ebedc533f680.png",
      "/lovable-uploads/aba8aea6-6c61-472d-b308-b9f776866f9c.png",
      "/lovable-uploads/79da017d-d2a8-4e0d-9c0a-030f5c16d960.png"
    ],
    category: "mysterious"
  },
  {
    id: "australian-ghost-shark",
    name: "Australian Ghost Shark",
    question: "What if a service could navigate hidden depths like an Australian Ghost Shark?",
    facts: [
      "The Australian Ghost Shark looks like a phantom of the deep sea",
      "Despite its name, it's not actually a shark but belongs to the family of chimaeras",
      "It has a venomous spine in front of its dorsal fin for defense",
      "Ghost sharks use electroreception to find prey on the ocean floor"
    ],
    image: [
      "/lovable-uploads/b6d60faf-4825-4b5e-97b4-2e8970649602.png"
    ],
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
    image: [
      "/lovable-uploads/f3205e2a-86cf-4934-887f-c40862c21ab0.png",
      "/lovable-uploads/33cae5a1-1c32-49e5-ad2d-13fd8ba04809.png"
    ],
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
    image: [
      "/lovable-uploads/d2a1aa74-8d30-4f7e-996c-78ca522be1d2.png",
      "/lovable-uploads/c2c9b2f0-89c0-47ea-b006-e70e2b2043fd.png",
      "/lovable-uploads/a6728415-0632-4a42-b9fa-b402dca7ab54.png",
      "/lovable-uploads/4986cec5-cb02-47e9-b3f5-611b7e7df83e.png"
    ],
    category: "magical"
  },
  {
    id: "komodo-dragon",
    name: "Komodo Dragon",
    question: "What if a service could be as powerful and efficient as a Komodo Dragon's hunting strategy?",
    facts: [
      "The Komodo Dragon is the largest lizard in the world, growing up to 10 feet long",
      "It has venomous saliva that prevents blood clotting and causes shock in its prey",
      "It can eat up to 80 percent of its body weight in a single feeding",
      "Komodo Dragons are found only on a few Indonesian islands, including Komodo Island",
      "Despite their name, they're not actually dragons but are often considered the closest living thing to mythological dragons"
    ],
    image: [
      "/lovable-uploads/9fa472e1-640b-419f-a567-29269d7f0b56.png"
    ],
    category: "fierce"
  },
  {
    id: "leafy-sea-dragon",
    name: "Leafy Sea Dragon",
    question: "What if a service could blend seamlessly with its environment like a Leafy Sea Dragon among seaweed?",
    facts: [
      "The Leafy Sea Dragon has leaf-like appendages that help it camouflage in seaweed and kelp",
      "Despite its dragon-shaped body, it's actually related to seahorses and pipefish",
      "It moves by using nearly invisible fins and can appear to be floating motionless",
      "Leafy Sea Dragons are found primarily in the waters off south and east Australia",
      "Their excellent camouflage helps them hide from predators and sneak up on prey"
    ],
    image: [
      "/lovable-uploads/6d46bd6b-028e-4023-b686-dbdc3e37207a.png",
      "/lovable-uploads/90b595ed-7bc8-4c7f-9b41-665093c80180.png"
    ],
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
    image: [
      "/lovable-uploads/bd8e6eba-d75a-4091-b9eb-9d01aab80b31.png", 
      "/lovable-uploads/6a968286-9e9f-4704-8c99-dc9dca87952a.png",
      "/lovable-uploads/0b6e48e8-07e5-461f-bc9c-7a7d9f292b91.png"
    ],
    category: "magical"
  },
  {
    id: "blue-footed-booby",
    name: "Blue-Footed Booby",
    question: "What if a service could dance into users' lives like a Blue-Footed Booby's strut?",
    facts: [
      "Blue-Footed Boobies have bright blue feet that they show off in a mating dance",
      "The bluer the feet, the more attractive they are to potential mates",
      "They dive from great heights to catch fish in the ocean",
      "The name 'booby' comes from the Spanish word 'bobo' meaning 'clown' or 'fool'"
    ],
    image: [
      "/lovable-uploads/6897367d-a430-4f51-a44b-121384738827.png", 
      "/lovable-uploads/e26dfbc2-3a9b-4a58-9b4d-2c33e4cabc25.png", 
      "/lovable-uploads/870d7b5e-d363-40d9-9f46-a270bacb437d.png"
    ],
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
    image: [
      "/lovable-uploads/7b96f153-2562-47fa-ba94-df3d8a4b3be1.png"
    ],
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
    image: [
      "/lovable-uploads/a921d78a-a617-405b-af5e-ba4fd16eb181.png"
    ],
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
    image: [
      BOOK_COVER
    ],
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
    image: [
      "/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png", 
      "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png",
      "/lovable-uploads/2ea06720-63eb-4db7-9b39-c5584b236640.png"
    ],
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
    image: [
      "/lovable-uploads/fb824a16-e514-4e58-a21b-87c220bfdc8e.png"
    ],
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
    image: [
      "/lovable-uploads/8c79dbe2-73ec-4260-9abb-104b2de92996.png", 
      "/lovable-uploads/ffe1fac4-535b-487d-b4fb-4490a85c9409.png"
    ],
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
    image: [
      "/lovable-uploads/e15c59a6-e20f-47bd-9d62-e5028ecb994c.png",
      "/lovable-uploads/73762eb7-97bd-44f0-9064-9ec199c90cbd.png",
      "/lovable-uploads/de9414a0-a291-4caf-8d6d-a889a8e4d749.png"
    ],
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
    image: [
      "/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png"
    ],
    category: "weird"
  },
  {
    id: "cuckoo-wasp",
    name: "Cuckoo Wasp",
    question: "What if a service could be as brilliantly distinctive as a Cuckoo Wasp's metallic colors?",
    facts: [
      "Cuckoo Wasps have stunning metallic blue and green coloration that shimmers in the light",
      "They're named 'cuckoo' because they lay their eggs in other insects' nests, similar to cuckoo birds",
      "Their exoskeleton is extremely tough, which protects them when they invade other insects' nests",
      "They can curl into a defensive ball when threatened, protecting their vulnerable parts"
    ],
    image: [
      "/lovable-uploads/f157dcd0-9218-4d98-abd2-42e051483a08.png", 
      "/lovable-uploads/0923a6e3-70f6-461a-8912-3ee29c3cb1b5.png"
    ],
    category: "mysterious"
  },
  {
    id: "ba-humbugi",
    name: "Ba Humbugi",
    question: "What if a service could bring cheer to users as unexpectedly as the name Ba Humbugi brings a smile?",
    facts: [
      "The Ba Humbugi is a snail named as a humorous play on Ebenezer Scrooge's phrase 'Bah! Humbug!' from A Christmas Carol",
      "It's a type of land snail native to the islands of Hawaii",
      "This snail has a distinctive spiral shell with beautiful brown patterns",
      "Many Hawaiian snail species are endangered due to habitat loss and introduced predators"
    ],
    image: [
      "/lovable-uploads/7c8c7438-96f5-483c-8f8a-a7b96ebcf229.png", 
      "/lovable-uploads/52a92cf1-d7c1-45e1-a4c3-e14b10da3e91.png"
    ],
    category: "weird"
  },
  {
    id: "blobfish",
    name: "Blobfish",
    question: "What if a service could adapt to pressure and remain resilient like a Blobfish in the deep sea?",
    facts: [
      "The Blobfish appears gelatinous and droopy on land but has a more normal fish shape in its natural deep-sea habitat",
      "It lives at depths where the pressure is up to 120 times higher than at sea level",
      "Instead of a gas-filled swim bladder, it has gelatinous flesh with a density slightly less than water, allowing it to float above the seafloor",
      "It was voted the 'World's Ugliest Animal' in 2013, becoming a mascot for the Ugly Animal Preservation Society"
    ],
    image: [
      "/lovable-uploads/eb0a6e45-42af-4c28-98d3-3f7c6a7a82ff.png"
    ],
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
    image: [
      "/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png", 
      "/lovable-uploads/298cb0f7-5917-4b2a-bf29-582997fe1d8f.png"
    ],
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
