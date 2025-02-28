export interface Animal {
  id: string;
  name: string;
  question: string;
  facts: string[];
  image: string | string[];
  category: "sweet" | "weird" | "magical" | "fierce" | "delicious" | "mysterious";
}

// Book information
export const bookInfo = {
  title: "Wacky Scientific Name Alert",
  authors: "Emma Looney, Nina Pileggi",
  illustrator: "Freya Hudson",
  coverImage: "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png",
  description: "A funny guide to unusual animals with scientific names that are weird, surprising, or just plain silly!",
  link: "https://www.amazon.com/Wacky-Scientific-Name-Alert-surprising/dp/1922539139/"
};

export const BOOK_COVER = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";

// All animals in the book
export const animals: Animal[] = [
  {
    id: "pieza-pi",
    name: "Pieza Pi",
    question: "How do you pronounce this scientific name?",
    facts: [
      "Pieza Pi is a type of fly named after the mathematical constant π (pi)",
      "It belongs to the family of robber flies, known for their predatory behavior",
      "The name is playfully pronounced like 'pizza pie'",
      "This insect was named by scientists with a sense of humor"
    ],
    image: "/lovable-uploads/c843c985-49b9-4baa-8d84-839084778214.png",
    category: "weird"
  },
  {
    id: "twice-stabbed-stink-bug",
    name: "Twice-Stabbed Stink Bug",
    question: "Guess how this bug got its name?",
    facts: [
      "Its name comes from the two bright red spots on its black back",
      "When disturbed, it releases a foul-smelling chemical from glands on its thorax",
      "This insect feeds on plant sap and can damage crops",
      "Also known as Cosmopepla bimaculata"
    ],
    image: [
      "/lovable-uploads/7dd65f6a-01f4-4b19-ab78-4f17217e7f61.png",
      "/lovable-uploads/78a6b72b-4069-40ee-a78b-15ecf7acea3d.png"
    ],
    category: "weird"
  },
  {
    id: "moonrat",
    name: "Moonrat",
    question: "What's so special about this rat?",
    facts: [
      "It's not actually a rat, but a primitive relative of shrews and hedgehogs",
      "It has a distinctive white and black coat and a long, scaly tail",
      "Moonrats are nocturnal and feed on insects, worms, and other small creatures",
      "They emit a strong ammonia-like odor to mark their territory"
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
    question: "What makes this beetle a Herculean hero?",
    facts: [
      "Males have enormous horns that they use to battle each other",
      "They are one of the largest beetles in the world",
      "Hercules beetles can lift up to 850 times their own weight",
      "They live in rainforests and feed on decaying fruit"
    ],
    image: [
      "/lovable-uploads/fa0dc4ec-7637-4fd4-91d3-32e96249f92f.png",
      "/lovable-uploads/07210a5f-1f2f-443a-917e-ea437efd5e89.png"
    ],
    category: "fierce"
  },
  {
    id: "naked-mole-rat",
    name: "Naked Mole Rat",
    question: "What's so special about being naked?",
    facts: [
      "They are nearly blind and live in underground colonies",
      "Naked mole rats are immune to certain types of cancer",
      "They have a queen who is the only breeding female in the colony",
      "These rodents can live up to 30 years, much longer than other rodents"
    ],
    image: [
      "/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png",
      "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png"
    ],
    category: "weird"
  },
  {
    id: "southern-hairy-nosed-wombat",
    name: "Southern Hairy-Nosed Wombat",
    question: "What's special about this wombat's nose?",
    facts: [
      "They are herbivores and primarily eat native grasses",
      "These wombats live in complex burrow systems called warrens",
      "They have a tough, leathery pad on their nose to help with digging",
      "Southern hairy-nosed wombats are critically endangered"
    ],
    image: [
      "/lovable-uploads/e15c59a6-e20f-47bd-9d62-e5028ecb994c.png",
      "/lovable-uploads/73762eb7-97bd-44f0-9064-9ec199c90cbd.png",
      "/lovable-uploads/de9414a0-a291-4caf-8d6d-a889a8e4d749.png"
    ],
    category: "weird"
  },
  {
    id: "vampire-squid",
    name: "Vampire Squid",
    question: "Is this squid a creature of the night?",
    facts: [
      "It's not actually a squid, but a unique cephalopod species",
      "Vampire squids live in the deep sea and feed on marine snow",
      "They have large eyes and can turn themselves inside out as a defense",
      "These creatures are bioluminescent, producing their own light"
    ],
    image: [
      "/lovable-uploads/1d7339ad-b285-43e9-a6b6-1314465ec4bc.png",
      "/lovable-uploads/dfacb60f-ace9-4bdf-8f0c-74e70615a1f1.png"
    ],
    category: "mysterious"
  },
  {
    id: "red-lipped-batfish",
    name: "Red-Lipped Batfish",
    question: "Why does this fish look like it wears lipstick?",
    facts: [
      "It uses its pectoral fins to 'walk' on the ocean floor",
      "Red-lipped batfish are found near the Galapagos Islands",
      "They use a fleshy lure on their head to attract prey",
      "These fish are not good swimmers and prefer to walk"
    ],
    image: [
      "/lovable-uploads/f3205e2a-86cf-4934-887f-c40862c21ab0.png",
      "/lovable-uploads/33cae5a1-1c32-49e5-ad2d-13fd8ba04809.png"
    ],
    category: "weird"
  },
  {
    id: "unicorn-fish",
    name: "Unicorn Fish",
    question: "Does this fish grant magical wishes?",
    facts: [
      "Males have a prominent horn-like extension on their forehead",
      "They are found in tropical and subtropical waters",
      "Unicorn fish feed on algae and small invertebrates",
      "The horn is used for display and defense"
    ],
    image: "/lovable-uploads/fe2688f7-2b9c-4dfb-87b1-1b59a2847db9.png",
    category: "magical"
  },
  {
    id: "agra-cadabra",
    name: "Agra Cadabra",
    question: "Is this beetle a magician?",
    facts: [
      "Agra is a genus of ground beetles found in Central and South America",
      "Many species in this genus have iridescent colors",
      "The name 'Agra' is a play on the magic word 'Abracadabra'",
      "These beetles are often found in rainforests"
    ],
    image: [
      "/lovable-uploads/5198a0b6-c5ce-4228-b837-a314cee5ca8d.png",
      "/lovable-uploads/4e209bbd-cd62-4664-89f9-0f1d7a2b776e.png"
    ],
    category: "magical"
  },
  {
    id: "yeti-crab",
    name: "Yeti Crab",
    question: "Does this crab live in the Himalayas?",
    facts: [
      "It's covered in silky bristles that resemble fur",
      "Yeti crabs live near hydrothermal vents in the deep sea",
      "They cultivate bacteria on their bristles for food",
      "These crabs are also known as 'Kiwa hirsuta'"
    ],
    image: [
      "/lovable-uploads/930ae911-cd64-4277-9e81-9993ed4ecf7b.png",
      "/lovable-uploads/54f13674-bc2a-4ac5-977b-98285f66941f.png"
    ],
    category: "mysterious"
  },
  {
    id: "wunderpus-octopus",
    name: "Wunderpus Octopus",
    question: "What makes this octopus so wonderful?",
    facts: [
      "It's a master of disguise, mimicking other sea creatures",
      "Wunderpus octopuses have long arms and a small body",
      "They are found in shallow waters of Southeast Asia",
      "These octopuses are active hunters, feeding on small crustaceans and worms"
    ],
    image: [
      "/lovable-uploads/d8d68f30-d905-40eb-b414-91b26bc78d36.png"
    ],
    category: "magical"
  },
  {
    id: "hellbender",
    name: "Hellbender",
    question: "Is this salamander from the underworld?",
    facts: [
      "It's the largest aquatic salamander in North America",
      "Hellbenders have a flattened body and wrinkled skin",
      "They live in fast-flowing rivers and streams",
      "These salamanders are indicators of water quality"
    ],
    image: "/lovable-uploads/7b54880d-fa56-4f4f-957e-c6f6a46eb2b6.png",
    category: "weird"
  },
  {
    id: "spined-assassin-bug",
    name: "Spined Assassin Bug",
    question: "Is this bug a trained killer?",
    facts: [
      "It ambushes its prey and injects them with venom",
      "Spined assassin bugs have a distinctive spine on their back",
      "They feed on other insects and can be found in gardens",
      "These bugs are beneficial predators in the ecosystem"
    ],
    image: "/lovable-uploads/e37f63ba-6b94-4f10-87a2-5121b21a7ac2.png",
    category: "fierce"
  },
  {
    id: "flying-dragon",
    name: "Flying Dragon",
    question: "Can this lizard really fly?",
    facts: [
      "It glides through the air using extended ribs and skin flaps",
      "Flying dragons are found in Southeast Asian rainforests",
      "They feed on insects and live in trees",
      "These lizards are also known as 'Draco volans'"
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
    question: "Is this dragon a fire-breathing beast?",
    facts: [
      "It's the largest lizard in the world",
      "Komodo dragons have venomous saliva and sharp teeth",
      "They are found on several Indonesian islands",
      "These lizards are apex predators and can take down large prey"
    ],
    image: "/lovable-uploads/9fa472e1-640b-419f-a567-29269d7f0b56.png",
    category: "fierce"
  },
  {
    id: "leafy-sea-dragon",
    name: "Leafy Sea Dragon",
    question: "Is this dragon made of leaves?",
    facts: [
      "It's camouflaged as seaweed to avoid predators",
      "Leafy sea dragons are found in Australian waters",
      "Males carry the eggs until they hatch",
      "These creatures are related to seahorses"
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
    question: "Does this spider wear a disco suit?",
    facts: [
      "Males have colorful flaps that they use to attract females",
      "Sparklemuffin spiders are found in Australia",
      "They perform elaborate dances to impress potential mates",
      "These spiders are tiny, measuring only a few millimeters in length"
    ],
    image: [
      "/lovable-uploads/bd8e6eba-d75a-4091-b9eb-9d01aab80b31.png",
      "/lovable-uploads/6a968286-9e9f-4704-8c99-dc9dca87952a.png",
      "/lovable-uploads/0b6e48e8-07e5-461f-bc9c-7a7d9f292b91.png"
    ],
    category: "sweet"
  },
  {
    id: "blue-footed-booby",
    name: "Blue-Footed Booby",
    question: "Why does this bird have blue feet?",
    facts: [
      "Males show off their blue feet to attract females",
      "Blue-footed boobies are found in the Galapagos Islands",
      "They are excellent divers and feed on fish",
      "The bluer the feet, the more attractive the male is to females"
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
    question: "Does this armadillo have a loud voice?",
    facts: [
      "It emits a high-pitched scream when threatened",
      "Screaming hairy armadillos are found in South America",
      "They have a hairy shell and dig burrows for shelter",
      "These armadillos feed on insects, worms, and other small creatures"
    ],
    image: [
      "/lovable-uploads/7b96f153-2562-47fa-ba94-df3d8a4b3be1.png",
      "/lovable-uploads/83a9a168-32af-4519-b78b-51be96eb5da7.png"
    ],
    category: "weird"
  },
  {
    id: "caramel-coated-capybara",
    name: "Caramel-Coated Capybara",
    question: "Does this capybara taste like candy?",
    facts: [
      "It's the world's largest rodent",
      "Capybaras are semi-aquatic and live in groups",
      "They are found in South America and are herbivores",
      "These rodents are known for their calm and social nature"
    ],
    image: "/lovable-uploads/a921d78a-a617-405b-af5e-ba4fd16eb181.png",
    category: "delicious"
  },
  {
    id: "pink-fairy-armadillo",
    name: "Pink Fairy Armadillo",
    question: "Is this armadillo a magical creature?",
    facts: [
      "It's the smallest species of armadillo",
      "Pink fairy armadillos are found in Argentina",
      "They have a pink shell and dig burrows in sandy soil",
      "These armadillos feed on ants and other small insects"
    ],
    image: [
      "/lovable-uploads/bd7c3d5a-85af-4cbc-bbf0-e7b84e278a78.png",
      "/lovable-uploads/5b6665f7-758b-4942-8619-671ed0fa0132.png",
      "/lovable-uploads/ce8c8520-8c58-4029-b828-9d1f65f21d21.png",
      "/lovable-uploads/1193d4dd-e023-4b8d-8625-792f5b1a3409.png"
    ],
    category: "sweet"
  },
  {
    id: "goblin-shark",
    name: "Goblin Shark",
    question: "Is this shark a monster from a fairy tale?",
    facts: [
      "It has a long, flattened snout and sharp teeth",
      "Goblin sharks live in the deep sea and are rarely seen",
      "They are found in oceans around the world",
      "These sharks are ambush predators and feed on fish and crustaceans"
    ],
    image: [
      "/lovable-uploads/5e619189-b98d-4c22-8e23-cff80bc2b7da.png",
      "/lovable-uploads/b4c4722a-5202-447a-8a73-9aaea8000bbc.png"
    ],
    category: "fierce"
  },
  {
    id: "fried-egg-jellyfish",
    name: "Fried Egg Jellyfish",
    question: "Does this jellyfish taste like breakfast?",
    facts: [
      "It has a yellow bell that resembles a fried egg",
      "Fried egg jellyfish are found in the Mediterranean Sea",
      "They feed on plankton and are harmless to humans",
      "These jellyfish are also known as 'Cotylorhiza tuberculata'"
    ],
    image: [
      "/lovable-uploads/6f706930-a007-4787-8190-8dd117cbe6d2.png",
      "/lovable-uploads/2b305c5a-f54d-46c7-babb-1cfaf6f05431.png"
    ],
    category: "delicious"
  },
  {
    id: "candy-striped-hermit-crab",
    name: "Candy-Striped Hermit Crab",
    question: "Does this crab live in a candy shell?",
    facts: [
      "It has bright orange and white stripes on its legs",
      "Candy-striped hermit crabs live in coral reefs",
      "They scavenge for food and use empty shells for protection",
      "These crabs are also known as 'Calcinus laevimanus'"
    ],
    image: [
      "/lovable-uploads/a9979d2e-efc7-4763-98ce-69602a6e55e9.png",
      "/lovable-uploads/3e41b731-dad5-4490-a5c3-fbefbabdcae6.png"
    ],
    category: "sweet"
  },
  {
    id: "pancake-tortoise",
    name: "Pancake Tortoise",
    question: "Is this tortoise flat as a pancake?",
    facts: [
      "It has a flexible shell that allows it to squeeze into crevices",
      "Pancake tortoises are found in East Africa",
      "They live in rocky outcrops and feed on grasses",
      "These tortoises are critically endangered due to habitat loss"
    ],
    image: "/lovable-uploads/60a4b820-e601-4a27-a1ef-e001f2d68e9b.png",
    category: "weird"
  },
  {
    id: "potato-cod",
    name: "Potato Cod",
    question: "Does this cod taste like potatoes?",
    facts: [
      "It has a mottled brown and white pattern on its body",
      "Potato cod are found in the Indo-Pacific region",
      "They are ambush predators and feed on fish and crustaceans",
      "These cod can grow up to two meters in length"
    ],
    image: [
      "/lovable-uploads/07536683-61e2-4723-82c1-defa44d108fc.png",
      "/lovable-uploads/c2e246ec-84fe-40d5-b525-66c9ff44265e.png"
    ],
    category: "delicious"
  },
  {
    id: "raspberry-crazy-ant",
    name: "Raspberry Crazy Ant",
    question: "Is this ant addicted to raspberries?",
    facts: [
      "It's an invasive species that can form supercolonies",
      "Raspberry crazy ants are found in the southern United States",
      "They are attracted to electrical equipment and can cause damage",
      "These ants are named after Tom Rasberry, who first identified them"
    ],
    image: [
      "/lovable-uploads/8487b8af-806f-4758-97ae-43854f70b4b6.png",
      "/lovable-uploads/2a255d56-5473-44da-8031-6adfa385f369.png"
    ],
    category: "weird"
  },
  {
    id: "australian-ghost-shark",
    name: "Australian Ghost Shark",
    question: "Is this shark a spooky spirit?",
    facts: [
      "It's a type of chimaera, a relative of sharks and rays",
      "Australian ghost sharks live in deep waters off Australia",
      "Males have a retractable sex organ on their forehead",
      "These sharks feed on bottom-dwelling invertebrates"
    ],
    image: "/lovable-uploads/b6d60faf-4825-4b5e-97b4-2e8970649602.png",
    category: "mysterious"
  },
  {
    id: "monkeyface-prickleback",
    name: "Monkeyface Prickleback",
    question: "Does this fish have a monkey's face?",
    facts: [
      "It has a fleshy growth on its head that resembles a monkey's face",
      "Monkeyface pricklebacks are found along the Pacific coast of North America",
      "They live in rocky intertidal zones and feed on algae",
      "These fish can breathe air and survive out of water for short periods"
    ],
    image: "/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png",
    category: "weird"
  },
  {
    id: "sarcastic-fringehead",
    name: "Sarcastic Fringehead",
    question: "Is this fish always in a bad mood?",
    facts: [
      "It has a large mouth and an aggressive temperament",
      "Sarcastic fringeheads live in kelp forests off the coast of California",
      "They defend their territory fiercely and will attack anything that comes near",
      "These fish have been known to bite divers"
    ],
    image: [
      "/lovable-uploads/8c79dbe2-73ec-4260-9abb-104b2de92996.png",
      "/lovable-uploads/ffe1fac4-535b-487d-b4fb-4490a85c9409.png"
    ],
    category: "fierce"
  },
  {
    id: "long-wattled-umbrellabird",
    name: "Long-Wattled Umbrellabird",
    question: "Does this bird carry an umbrella?",
    facts: [
      "Males have a long, inflatable wattle on their chest",
      "Long-wattled umbrellabirds live in rainforests of South America",
      "They use their wattle to attract females during mating season",
      "These birds feed on fruits and insects"
    ],
    image: "/lovable-uploads/fb824a16-e514-4e58-a21b-87c220bfdc8e.png",
    category: "weird"
  },
  {
    id: "blobfish",
    name: "Blobfish",
    question: "Is this fish always frowning?",
    facts: [
      "It has a gelatinous body and a sad-looking face",
      "Blobfish live in deep waters off the coast of Australia",
      "They have no muscles and float near the ocean floor",
      "These fish feed on small invertebrates"
    ],
    image: "/lovable-uploads/eb0a6e45-42af-4c28-98d3-3f7c6a7a82ff.png",
    category: "weird"
  },
  {
    id: "pyjama-squid",
    name: "Pyjama Squid",
    question: "Does this squid wear pajamas to bed?",
    facts: [
      "It has bright stripes and spots on its body",
      "Pyjama squids live in shallow waters off the coast of Australia",
      "They bury themselves in the sand during the day and hunt at night",
      "These squids feed on small crustaceans and worms"
    ],
    image: [
      "/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png",
      "/lovable-uploads/298cb0f7-5917-4b2a-bf29-582997fe1d8f.png"
    ],
    category: "sweet"
  },
  {
    id: "cuckoo-wasp",
    name: "Cuckoo Wasp",
    question: "Does this wasp lay its eggs in other nests?",
    facts: [
      "It lays its eggs in the nests of other wasps and bees",
      "Cuckoo wasps are found all over the world",
      "They have a metallic blue or green body",
      "These wasps are also known as 'parasitic wasps'"
    ],
    image: [
      "/lovable-uploads/f157dcd0-9218-4d98-abd2-42e051483a08.png",
      "/lovable-uploads/0923a6e3-70f6-461a-8912-3ee29c3cb1b5.png"
    ],
    category: "fierce"
  },
  {
    id: "ba-humbugi",
    name: "Ba Humbugi",
    question: "Is this snail a grumpy Scrooge?",
    facts: [
      "It's a species of snail found in Fiji",
      "Ba Humbugi was named after the catchphrase of Ebenezer Scrooge",
      "These snails are small and have a brown shell",
      "They live in forests and feed on decaying leaves"
    ],
    image: [
      "/lovable-uploads/7c8c7438-96f5-483c-8f8a-a7b96ebcf229.png",
      "/lovable-uploads/52a92cf1-d7c1-45e1-a4c3-e14b10da3e91.png"
    ],
    category: "weird"
  },
  {
    id: "lionhead-rabbit",
    name: "Lionhead Rabbit",
    question: "Does this rabbit have a lion's mane?",
    facts: [
      "It has a thick mane of fur around its head",
      "Lionhead rabbits are a popular breed of domestic rabbit",
      "They come in a variety of colors and patterns",
      "These rabbits are known for their friendly and docile nature"
    ],
    image: [
      "/lovable-uploads/fb87f26b-313f-4968-85eb-4f5895bb5ade.png",
      "/lovable-uploads/a569de47-f3b9-4c4c-95dd-b13244ac767f.png"
    ],
    category: "sweet"
  },
  {
    id: "hagfish",
    name: "Hagfish",
    question: "Is this fish a slimy creature?",
    facts: [
      "It produces a large amount of slime as a defense mechanism",
      "Hagfish are found in oceans around the world",
      "They are scavengers and feed on dead animals",
      "These fish have no jaws and use barbels to find food"
    ],
    image: "/lovable-uploads/26ed8a88-1b0b-4643-b0e2-12f1491364d3.png",
    category: "weird"
  },
  {
    id: "poison-dart-frog",
    name: "Poison Dart Frog",
    question: "Is this frog dangerous to touch?",
    facts: [
      "It has bright colors and toxic skin secretions",
      "Poison dart frogs are found in Central and South America",
      "They obtain their toxins from the insects they eat",
      "These frogs are used by indigenous people for hunting"
    ],
    image: [
      "/lovable-uploads/f1e987b7-ef95-43af-8629-a5385bc56ed9.png",
      "/lovable-uploads/36c20eaf-4b47-443c-9a26-7a337b4862d2.png"
