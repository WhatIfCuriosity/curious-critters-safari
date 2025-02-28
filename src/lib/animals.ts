
export interface Animal {
  id: string;
  name: string;
  question: string;
  facts: string[];
  image: string | string[];
  category: "original" | "sweet" | "weird" | "magical" | "fierce" | "delicious" | "mysterious";
}

export const BOOK_COVER = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";
const BOOK_LINK = "https://amzn.to/41maKgG";

export const animals: Animal[] = [
  {
    id: "twice-stabbed-stink-bug",
    name: "Twice-Stabbed Stink Bug",
    question: "What if a service could defend itself like a Twice-Stabbed Stink Bug when threatened?",
    facts: [
      "The Twice-Stabbed Stink Bug gets its name from the two red spots on its back that look like stab wounds",
      "When threatened, it releases a nasty-smelling spray as a defense mechanism",
      "It's part of the shield bug family (Pentatomidae) known for their distinctive shield-shaped bodies",
      "These bugs aren't picky eaters and consume various plants",
      "While defensive, they play important roles in their ecosystems"
    ],
    image: [
      "/lovable-uploads/7dd65f6a-01f4-4b19-ab78-4f17217e7f61.png",
      "/lovable-uploads/78a6b72b-4069-40ee-a78b-15ecf7acea3d.png"
    ],
    category: "fierce"
  },
  {
    id: "bone-eating-snot-flower-worm",
    name: "Bone-Eating Snot Flower Worm",
    question: "What if a service could extract value from overlooked resources like a Bone-Eating Snot Flower Worm?",
    facts: [
      "The Bone-Eating Snot Flower Worm (Osedax) has no mouth or digestive system",
      "It uses root-like structures to absorb nutrients from whale bones on the ocean floor",
      "The 'flowers' are actually its feathery gills that extract oxygen from the water",
      "Only female worms attach to bones - males live as microscopic creatures inside the females",
      "They were discovered in 2002 and can consume an entire whale skeleton in just a few years"
    ],
    image: [
      "/lovable-uploads/57f09d26-cde9-4730-8967-b6c037b44528.png",
      "/lovable-uploads/93960820-e0cd-4fcb-8903-c75302378bb9.png"
    ],
    category: "weird"
  },
  {
    id: "poison-dart-frog",
    name: "Poison Dart Frog",
    question: "What if a service could be as colorful yet cautionary as a Poison Dart Frog?",
    facts: [
      "Poison Dart Frogs come in a variety of bright colors, which warns predators of their toxicity",
      "Some species of Poison Dart Frogs contain enough toxin to kill 10 adult humans",
      "Their toxins come from their diet of specific insects in the wild - frogs in captivity are non-toxic",
      "Despite their name, only three species were ever used by indigenous people for poison darts",
      "They're very small, most species being less than 1.5 inches in length"
    ],
    image: [
      "/lovable-uploads/f1e987b7-ef95-43af-8629-a5385bc56ed9.png",
      "/lovable-uploads/36c20eaf-4b47-443c-9a26-7a337b4862d2.png"
    ],
    category: "fierce"
  },
  {
    id: "vampire-squid",
    name: "Vampire Squid",
    question: "What if a service could illuminate hidden user needs like a Vampire Squid lights up the deep?",
    facts: [
      "The Vampire Squid can turn itself inside out to defend against predators",
      "It can produce bioluminescent light from light organs on its body",
      "Despite its name, it doesn't suck blood and is actually quite gentle",
      "It's not actually a squid, but is related to both squids and octopuses",
      "It has a vampire-like cape (webbing between arms) and lives in the deep ocean"
    ],
    image: [
      "/lovable-uploads/1d7339ad-b285-43e9-a6b6-1314465ec4bc.png",
      "/lovable-uploads/dfacb60f-ace9-4bdf-8f0c-74e70615a1f1.png"
    ],
    category: "mysterious"
  },
  {
    id: "hagfish",
    name: "Hagfish",
    question: "What if a service could adapt to pressure as naturally as a Hagfish in the deep ocean?",
    facts: [
      "The Hagfish produces slime when threatened - up to 5 gallons from a single fish",
      "They're sometimes called 'slime eels' despite not being eels at all",
      "Hagfish Day is celebrated every year on the third Wednesday of October",
      "They can tie themselves in knots to escape predators or to get leverage when feeding",
      "Hagfish have existed for over 300 million years and are considered 'living fossils'"
    ],
    image: "/lovable-uploads/26ed8a88-1b0b-4643-b0e2-12f1491364d3.png",
    category: "weird"
  },
  {
    id: "lionhead-rabbit",
    name: "Lionhead Rabbit",
    question: "What if a service could be as adorable and distinctive as a Lionhead Rabbit with its fluffy mane?",
    facts: [
      "The Lionhead Rabbit gets its name from the wooly mane around its head, resembling a lion",
      "They were first bred in Belgium but are now popular pets worldwide",
      "Despite their elaborate mane, they have relatively small ears (2-3 inches) compared to other rabbit breeds",
      "They are a small breed, typically weighing between 2.5 to 3.5 pounds",
      "Their scientific name is Oryctolagus cuniculus"
    ],
    image: [
      "/lovable-uploads/fb87f26b-313f-4968-85eb-4f5895bb5ade.png",
      "/lovable-uploads/a569de47-f3b9-4c4c-95dd-b13244ac767f.png"
    ],
    category: "sweet"
  },
  {
    id: "spined-assassin-bug",
    name: "Spined Assassin Bug",
    question: "What if a service could adapt its approach as precisely as a Spined Assassin Bug hunts its prey?",
    facts: [
      "The Spined Assassin Bug has a long, needle-like proboscis that doubles as an injection device",
      "It injects digestive enzymes into its prey, liquefying their insides before sucking them out",
      "Despite its fearsome hunting technique, it's beneficial to humans by controlling pest populations",
      "They're called 'assassin bugs' because of their stealthy hunting skills and deadly efficiency",
      "The spines on its body serve as both defense mechanism and camouflage in its environment"
    ],
    image: "/lovable-uploads/e37f63ba-6b94-4f10-87a2-5121b21a7ac2.png",
    category: "fierce"
  },
  {
    id: "hellbender",
    name: "Hellbender",
    question: "What if a service could adapt to difficult environments like a Hellbender salamander in rocky streams?",
    facts: [
      "The Hellbender is North America's largest salamander, growing up to 2.5 feet long",
      "Despite its name, it's harmless to humans and spends most of its time under large rocks in rivers",
      "Its wrinkled skin increases surface area, helping it absorb oxygen directly from the water",
      "Hellbenders can live up to 30 years in the wild",
      "They're sometimes called 'snot otters' or 'devil dogs' due to their slimy appearance"
    ],
    image: "/lovable-uploads/7b54880d-fa56-4f4f-957e-c6f6a46eb2b6.png",
    category: "weird"
  },
  {
    id: "wunderpus-octopus",
    name: "Wunderpus Octopus",
    question: "What if a service could disguise itself as effectively as a Wunderpus Octopus?",
    facts: [
      "The Wunderpus Octopus has distinctive white and reddish-brown striped patterns that are unique to each individual",
      "Scientists can identify individual Wunderpus Octopuses by their pattern, similar to human fingerprints",
      "They can change their shape dramatically to mimic other sea creatures, including lionfish, sea snakes, and flatfish",
      "Despite their impressive camouflage abilities, they're quite small - usually just 2-3 inches in body length",
      "The name 'Wunderpus' comes from the German word 'wunder' meaning 'wonder' or 'miracle'"
    ],
    image: [
      "/lovable-uploads/d8d68f30-d905-40eb-b414-91b26bc78d36.png"
    ],
    category: "mysterious"
  },
  {
    id: "yeti-crab",
    name: "Yeti Crab",
    question: "What if a service could thrive in extreme conditions like a Yeti Crab at hydrothermal vents?",
    facts: [
      "The Yeti Crab (Kiwa hirsuta) has hairy arms that are covered with bacteria, which it cultivates for food",
      "It lives near hydrothermal vents on the ocean floor, where hot water flows from beneath the Earth's crust",
      "First discovered in 2005, it was nicknamed 'Yeti' after the legendary abominable snowman due to its furry appearance",
      "It has no eyes as they would be useless in the dark depths where it lives",
      "The bacteria on its arms help detoxify the poisonous minerals found near the hydrothermal vents"
    ],
    image: [
      "/lovable-uploads/930ae911-cd64-4277-9e81-9993ed4ecf7b.png",
      "/lovable-uploads/54f13674-bc2a-4ac5-977b-98285f66941f.png"
    ],
    category: "weird"
  },
  {
    id: "agra-cadabra",
    name: "Agra Cadabra",
    question: "What if a service could disappear problems as magically as the name Agra Cadabra suggests?",
    facts: [
      "The Agra Cadabra is a beetle with a name that sounds like a magician's phrase",
      "It belongs to the Agra genus, named by scientist Terry Erwin",
      "Erwin named many Agra species after celebrities, including Arnold Schwarzenegger and Kate Winslet",
      "With its shimmering blue body and gold-tipped legs, it appears almost magical",
      "Despite its magical-sounding name, it's a real beetle found in tropical forests"
    ],
    image: [
      "/lovable-uploads/5198a0b6-c5ce-4228-b837-a314cee5ca8d.png",
      "/lovable-uploads/4e209bbd-cd62-4664-89f9-0f1d7a2b776e.png"
    ],
    category: "magical"
  },
  {
    id: "unicorn-fish",
    name: "Unicorn Fish",
    question: "What if a service could adapt to changing circumstances like a Unicorn Fish changes its diet as it grows?",
    facts: [
      "Unicorn Fish are named for the horn-like rostral protuberance on their foreheads",
      "They belong to the genus Naso",
      "As they grow, their horn can get in the way when feeding on algae along the seabed",
      "They adapt by changing their food sources as they age",
      "Some Unicorn Fish species find themselves eating the poop of other fish"
    ],
    image: "/lovable-uploads/fe2688f7-2b9c-4dfb-87b1-1b59a2847db9.png",
    category: "magical"
  },
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
      "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png"
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
      "It can change color and pattern to blend with its surroundings",
      "It's found in the waters around Australia and is also known as the Striped Pyjama Squid"
    ],
    image: [
      "/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png", 
      "/lovable-uploads/298cb0f7-5917-4b2a-bf29-582997fe1d8f.png"
    ],
    category: "mysterious"
  },
  {
    id: "hickory-horned-devil",
    name: "Hickory Horned Devil",
    question: "What if a service could transform itself as dramatically as a Hickory Horned Devil becoming a regal moth?",
    facts: [
      "The Hickory Horned Devil is the caterpillar of the Regal Moth (Citheronia regalis)",
      "Despite its fearsome appearance with orange spiky horns, it's completely harmless to humans",
      "It's one of the largest caterpillars in North America, growing up to 5.5 inches long",
      "It feeds primarily on hickory, walnut, and persimmon trees",
      "When threatened, it rears up and makes clicking sounds with its mandibles to scare predators"
    ],
    image: [
      "/lovable-uploads/b243e9ce-c47f-4f9c-a4a8-cf591b0b54e2.png",
      "/lovable-uploads/0283ed03-15cc-4ecc-bd41-ec583d2fac4a.png"
    ],
    category: "fierce"
  },
  {
    id: "arrowtooth-lizardfish",
    name: "Arrowtooth Lizardfish",
    question: "What if a service could adapt its approach to diverse environments like an Arrowtooth Lizardfish?",
    facts: [
      "The Arrowtooth Lizardfish has spiny, sharp teeth covering their mouth for catching prey",
      "They bury themselves in ocean sand with only their eyes sticking out, waiting for prey",
      "Despite their fierce appearance, they're relatively small, usually less than a foot long",
      "They belong to the family Synodontidae, with a scientific name that fits their predatory nature",
      "They were discovered near the Poor Knights Islands off the coast of New Zealand"
    ],
    image: [
      "/lovable-uploads/3773c73b-4e41-4b77-958e-d3a2ec1f7d70.png",
      "/lovable-uploads/a030d289-67f6-4f83-8f99-a9456a0d5111.png"
    ],
    category: "fierce"
  }
];

export const bookInfo = {
  title: "Biomimicrosity: The Secret to Innovative Products and Services",
  authors: "Joe Miller and Todd McCullough",
  illustrator: "Brendan Coudal",
  coverImage: BOOK_COVER,
  link: BOOK_LINK,
  description: "Use the genius of the natural world to spark your creative process and design exceptional products and services that solve real human problems."
};

export const getRandomAnimal = (): Animal => {
  return animals[Math.floor(Math.random() * animals.length)];
};

export const getRandomImage = (imageSource: string | string[]): string => {
  if (typeof imageSource === 'string') {
    return imageSource;
  }
  return imageSource[Math.floor(Math.random() * imageSource.length)];
};

// Add the missing getAnimalById function
export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};
