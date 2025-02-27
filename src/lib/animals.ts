
export interface Animal {
  id: string;
  name: string;
  question: string;
  facts: string[];
  image: string;
  category: "original" | "sweet" | "weird" | "magical" | "fierce" | "delicious" | "mysterious";
}

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
    image: "?",
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
    image: "?",
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
    image: "?",
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
    image: "?",
    category: "magical"
  },
  {
    id: "sparklemuffin-peacock-spider",
    name: "Sparklemuffin Peacock Spider",
    question: "What if a service could dazzle users like a Sparklemuffin Peacock Spider's dance?",
    facts: [
      "The Sparklemuffin Peacock Spider performs an elaborate dance to attract mates",
      "It has vibrant, colorful patterns on its abdomen",
      "It's only about the size of a grain of rice"
    ],
    image: "?", 
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
    image: "?",
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
    image: "?",
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
    image: "?",
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
    image: "?",
    category: "mysterious"
  },
  {
    id: "naked-mole-rat",
    name: "Naked Mole Rat",
    question: "What if a service could thrive underground like a Naked Mole Rat's colony?",
    facts: [
      "Naked Mole Rats live in complex underground colonies with a queen, similar to bees",
      "They are almost immune to cancer",
      "They can survive with very little oxygen and feel almost no pain"
    ],
    image: "?",
    category: "weird"
  }
];

// Utility function to get a random animal
export const getRandomAnimal = (): Animal => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

// Utility function to get animal by ID
export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};
