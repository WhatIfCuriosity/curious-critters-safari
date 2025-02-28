
// ANIMAL DATA
export type Animal = {
  id: string;
  name: string;
  category: "weird" | "magical" | "fierce" | "sweet" | "delicious" | "mysterious";
  question: string;
  biomimicrosity?: string[];
  facts: string[];
  image: string | string[];
};

// Paths to animal images for the app
export const BOOK_COVER = "/lovable-uploads/4813c70d-678a-4536-bd98-88a5e0eca792.png";

// Book information
export const bookInfo = {
  title: "Wonderful Animals You Should Know",
  authors: "Jason G. Goldman, Ph.D., & J. A. Mills",
  illustrator: "Kelsey Buzzell",
  coverImage: BOOK_COVER,
  description: "A unique book featuring weird, magical, fierce, sweet, delicious, & mysterious animals from around the world, with fascinating facts and questions to spark curiosity and imagination.",
  link: "https://www.amazon.com/Wonderful-Animals-Should-Know-magical/dp/1637742142/"
};

// Define all animals in the app
export const animals: Animal[] = [
  {
    id: "twice-stabbed-stink-bug",
    name: "Twice-Stabbed Stink Bug",
    category: "weird",
    question: "Why would a bug stab itself once, much less twice?",
    facts: [
      "This black bug with two bright red or orange spots is actually a kind of ladybug.",
      "Twice-stabbed stink bugs feed on aphids and other plant-eating pests.",
      "When threatened, they release a foul-smelling chemical as defense."
    ],
    image: ["/lovable-uploads/7dd65f6a-01f4-4b19-ab78-4f17217e7f61.png", "/lovable-uploads/78a6b72b-4069-40ee-a78b-15ecf7acea3d.png"],
  },
  {
    id: "moonrat",
    name: "Moonrat",
    category: "magical",
    question: "What do you call a rat that howls at the moon?",
    facts: [
      "Despite its name, the moonrat is neither a rat nor does it howl at the moon. It's actually related to hedgehogs.",
      "It has a strong odor similar to ammonia, earning it the nickname 'stink badger'.",
      "The moonrat has poor eyesight but excellent sense of smell, which it uses to search for food at night."
    ],
    image: ["/lovable-uploads/ad213540-469d-407b-a147-4899319b2ef4.png", "/lovable-uploads/4c0bb9db-d9c9-475f-a6b0-a3865c32bc66.png"],
  },
  {
    id: "agra-cadabra",
    name: "Agra Cadabra",
    category: "magical",
    question: "Is this a magic trick or a bug?",
    facts: [
      "Agra cadabra is a real beetle species discovered in 2003 in Latin America.",
      "It belongs to a group of about 600 species of beetles, many with magical-sounding names like Agra vation and Agra phobia.",
      "Entomologists (scientists who study insects) sometimes have fun naming new species they discover."
    ],
    image: ["/lovable-uploads/5198a0b6-c5ce-4228-b837-a314cee5ca8d.png", "/lovable-uploads/4e209bbd-cd62-4664-89f9-0f1d7a2b776e.png"],
  },
  {
    id: "naked-mole-rat",
    name: "Naked Mole-Rat",
    category: "weird",
    question: "What has pink, wrinkly skin and lives underground?",
    facts: [
      "Naked mole-rats can live up to 30 years, which is extraordinarily long for a rodent.",
      "They are almost completely immune to cancer and feel almost no pain.",
      "They live in colonies like bees or ants, with a queen who is the only female to have babies."
    ],
    image: ["/lovable-uploads/bb8eb6cc-a644-41df-bbce-f82ad79d7f45.png", "/lovable-uploads/5cc87126-c35c-42e4-b267-1032de57fe99.png"],
  },
  {
    id: "yeti-crab",
    name: "Yeti Crab",
    category: "mysterious",
    question: "What hairy creature lives in the deepest, darkest parts of the ocean?",
    facts: [
      "The yeti crab was only discovered in 2005 in the deep Pacific Ocean near hydrothermal vents.",
      "Its hairy arms aren't actually hair, but filaments that host bacteria which the crab farms for food.",
      "It lives in water about 2,200 meters (7,200 feet) deep where the pressure would crush a human."
    ],
    image: ["/lovable-uploads/930ae911-cd64-4277-9e81-9993ed4ecf7b.png", "/lovable-uploads/54f13674-bc2a-4ac5-977b-98285f66941f.png"],
  },
  {
    id: "wunderpus-octopus",
    name: "Wunderpus Octopus",
    category: "magical",
    question: "What eight-armed magician can shape-shift and disappear in an instant?",
    facts: [
      "The wunderpus octopus gets its name from the German word 'wunder' meaning 'wonder' or 'miracle'.",
      "Each wunderpus has a unique pattern of spots and stripes, like a fingerprint.",
      "It can mimic other sea creatures by changing its color, pattern, and even the shape of its body."
    ],
    image: "/lovable-uploads/d8d68f30-d905-40eb-b414-91b26bc78d36.png",
  },
  {
    id: "hellbender",
    name: "Hellbender",
    category: "weird",
    question: "What has a flat head, tiny eyes, slimy skin, and breathes through its skin?",
    facts: [
      "The hellbender is North America's largest salamander, growing up to 29 inches long.",
      "Despite their scary name, they're completely harmless to humans.",
      "They have lungs but breathe primarily through the many folds in their skin."
    ],
    image: "/lovable-uploads/7b54880d-fa56-4f4f-957e-c6f6a46eb2b6.png",
  },
  {
    id: "spined-assassin-bug",
    name: "Spined Assassin Bug",
    category: "fierce",
    question: "What bug wears the skeletons of its victims on its back?",
    facts: [
      "The spined assassin bug covers itself with the carcasses of ants it has killed as a disguise.",
      "It has a sharp beak that it uses to stab its prey and inject venom that liquefies their insides.",
      "After killing its prey, it sucks out the liquefied insides, leaving just the empty shell."
    ],
    image: "/lovable-uploads/e37f63ba-6b94-4f10-87a2-5121b21a7ac2.png",
  },
  {
    id: "flying-dragon",
    name: "Flying Dragon",
    category: "magical",
    question: "What lizard can glide from tree to tree like a tiny dragon?",
    facts: [
      "The flying dragon doesn't actually fly but can glide up to 30 feet using flaps of skin attached to its ribs.",
      "These lizards are only about 8 inches long, including their tail.",
      "They live in the forests of Southeast Asia and spend most of their lives in trees."
    ],
    image: [
      "/lovable-uploads/d2a1aa74-8d30-4f7e-996c-78ca522be1d2.png", 
      "/lovable-uploads/c2c9b2f0-89c0-47ea-b006-e70e2b2043fd.png", 
      "/lovable-uploads/a6728415-0632-4a42-b9fa-b402dca7ab54.png", 
      "/lovable-uploads/4986cec5-cb02-47e9-b3f5-611b7e7df83e.png"
    ],
  },
  {
    id: "komodo-dragon",
    name: "Komodo Dragon",
    category: "fierce",
    question: "What reptile is big enough to eat a whole deer and uses venom to hunt?",
    facts: [
      "Komodo dragons are the world's largest lizards, growing up to 10 feet long and weighing up to 150 pounds.",
      "They have venom glands in their lower jaws that prevent blood from clotting and cause prey to go into shock.",
      "They can detect carrion (dead animals) from up to 2.5 miles away using their forked tongues."
    ],
    image: "/lovable-uploads/9fa472e1-640b-419f-a567-29269d7f0b56.png",
  },
  {
    id: "leafy-sea-dragon",
    name: "Leafy Sea Dragon",
    category: "magical",
    question: "What creature looks exactly like drifting seaweed but is actually a fish?",
    facts: [
      "Leafy sea dragons are related to seahorses and pipefish.",
      "Their leaf-like appendages help them blend in perfectly with seaweed and kelp forests.",
      "Unlike seahorses, male leafy sea dragons don't have pouches for carrying eggs. Instead, they carry the eggs on the underside of their tails."
    ],
    image: ["/lovable-uploads/6d46bd6b-028e-4023-b686-dbdc3e37207a.png", "/lovable-uploads/90b595ed-7bc8-4c7f-9b41-665093c80180.png"],
  },
  {
    id: "sparklemuffin-peacock-spider",
    name: "Sparklemuffin Peacock Spider",
    category: "magical",
    question: "What tiny spider is named after a pastry and dances to attract a mate?",
    facts: [
      "The sparklemuffin peacock spider was discovered in 2015 in Australia and is only about 4mm long.",
      "Male sparklemuffins perform an elaborate dance to attract females, raising their colorful abdomens and third legs while vibrating their bodies.",
      "These spiders have excellent vision, which helps them perform and appreciate their complex mating dances."
    ],
    image: [
      "/lovable-uploads/bd8e6eba-d75a-4091-b9eb-9d01aab80b31.png", 
      "/lovable-uploads/6a968286-9e9f-4704-8c99-dc9dca87952a.png", 
      "/lovable-uploads/0b6e48e8-07e5-461f-bc9c-7a7d9f292b91.png"
    ],
  },
  {
    id: "blue-footed-booby",
    name: "Blue-Footed Booby",
    category: "magical",
    question: "What bird has feet so blue they look painted?",
    facts: [
      "Blue-footed boobies got their name from the Spanish word 'bobo', meaning 'clown' or 'fool', because of their clumsy movement on land.",
      "Males show off their blue feet in a high-stepping mating dance to attract females. The brighter the blue, the more attractive the male.",
      "They can dive from heights of 80 feet and hit the water at 60 miles per hour to catch fish."
    ],
    image: [
      "/lovable-uploads/6897367d-a430-4f51-a44b-121384738827.png", 
      "/lovable-uploads/e26dfbc2-3a9b-4a58-9b4d-2c33e4cabc25.png", 
      "/lovable-uploads/870d7b5e-d363-40d9-9f46-a270bacb437d.png"
    ],
  },
  {
    id: "screaming-hairy-armadillo",
    name: "Screaming Hairy Armadillo",
    category: "weird",
    question: "What animal is covered in armor, fur, and makes a lot of noise when caught?",
    facts: [
      "The screaming hairy armadillo gets its name from the loud, high-pitched noise it makes when threatened.",
      "It has more hair than other armadillo species, with fur sticking out between its armor plates.",
      "It can bury itself completely underground in just a few minutes to escape predators."
    ],
    image: ["/lovable-uploads/7b96f153-2562-47fa-ba94-df3d8a4b3be1.png", "/lovable-uploads/83a9a168-32af-4519-b78b-51be96eb5da7.png"],
  },
  {
    id: "caramel-coated-capybara",
    name: "Caramel-Coated Capybara",
    category: "delicious",
    question: "What animal sounds like a candy bar but is actually the world's largest rodent?",
    facts: [
      "Despite their candy-like name, capybaras are the largest rodents in the world, weighing up to 150 pounds.",
      "They're semi-aquatic and can stay underwater for up to five minutes.",
      "They're highly social animals that live in groups of 10-30 individuals and are known for their friendliness with other animals."
    ],
    image: "/lovable-uploads/a921d78a-a617-405b-af5e-ba4fd16eb181.png",
  },
  {
    id: "pink-fairy-armadillo",
    name: "Pink Fairy Armadillo",
    category: "magical",
    question: "What tiny creature has a pink shell and looks like it came straight from a fairytale?",
    facts: [
      "The pink fairy armadillo is the smallest armadillo species, growing only to about 5-6 inches long.",
      "The pink color of its shell comes from blood vessels close to the surface.",
      "It spends most of its life underground and can bury itself completely in seconds if threatened."
    ],
    image: [
      "/lovable-uploads/bd7c3d5a-85af-4cbc-bbf0-e7b84e278a78.png", 
      "/lovable-uploads/5b6665f7-758b-4942-8619-671ed0fa0132.png", 
      "/lovable-uploads/ce8c8520-8c58-4029-b828-9d1f65f21d21.png",
      "/lovable-uploads/1193d4dd-e023-4b8d-8625-792f5b1a3409.png"
    ],
  },
  {
    id: "goblin-shark",
    name: "Goblin Shark",
    category: "weird",
    question: "What deep-sea shark looks like a monster from a nightmare?",
    facts: [
      "The goblin shark is sometimes called a 'living fossil' because it's the only remaining member of a family of sharks that is 125 million years old.",
      "Its jaws can be projected forward to catch prey, similar to the alien in the movie 'Alien'.",
      "It lives in the deep ocean, typically at depths of at least 4,000 feet."
    ],
    image: [
      "/lovable-uploads/5e619189-b98d-4c22-8e23-cff80bc2b7da.png",
      "/lovable-uploads/b4c4722a-5202-447a-8a73-9aaea8000bbc.png"
    ],
  },
  {
    id: "fried-egg-jellyfish",
    name: "Fried Egg Jellyfish",
    category: "delicious",
    question: "What sea creature looks exactly like breakfast?",
    facts: [
      "The fried egg jellyfish gets its name from its round white bell with a yellow center that looks like an egg yolk.",
      "It can grow up to 35 centimeters (14 inches) in diameter.",
      "Although it has a mild sting, it's generally harmless to humans and is sometimes even home to small fish that live among its tentacles for protection."
    ],
    image: ["/lovable-uploads/6f706930-a007-4787-8190-8dd117cbe6d2.png", "/lovable-uploads/2b305c5a-f54d-46c7-babb-1cfaf6f05431.png"],
  },
  {
    id: "candy-striped-hermit-crab",
    name: "Candy-Striped Hermit Crab",
    category: "delicious",
    question: "What tiny crustacean looks like a peppermint candy?",
    facts: [
      "Candy-striped hermit crabs have distinctive red and white striped legs that make them look like candy canes.",
      "Like all hermit crabs, they don't grow their own shells but instead use empty seashells as portable homes.",
      "As they grow, they need to find and move into larger shells, sometimes fighting with other hermit crabs over prime real estate."
    ],
    image: ["/lovable-uploads/a9979d2e-efc7-4763-98ce-69602a6e55e9.png", "/lovable-uploads/3e41b731-dad5-4490-a5c3-fbefbabdcae6.png"],
  },
  {
    id: "pancake-tortoise",
    name: "Pancake Tortoise",
    category: "delicious",
    question: "What reptile is flat enough to fit under your bedroom door?",
    facts: [
      "The pancake tortoise has a flat, flexible shell unlike the hard, domed shells of most tortoises.",
      "It uses its flat shape to hide in narrow rock crevices, making it hard for predators to extract.",
      "Rather than withdrawing into its shell for protection, it runs away from danger and is surprisingly fast for a tortoise."
    ],
    image: "/lovable-uploads/60a4b820-e601-4a27-a1ef-e001f2d68e9b.png",
  },
  {
    id: "potato-cod",
    name: "Potato Cod",
    category: "delicious",
    question: "What spotted fish is named after a vegetable?",
    facts: [
      "The potato cod gets its name from the potato-like blotches all over its body.",
      "It can grow up to 2 meters (6.5 feet) long and weigh up to 110 kilograms (242 pounds).",
      "These giant fish are quite curious and often approach divers, making them popular with underwater photographers."
    ],
    image: ["/lovable-uploads/07536683-61e2-4723-82c1-defa44d108fc.png", "/lovable-uploads/c2e246ec-84fe-40d5-b525-66c9ff44265e.png"],
  },
  {
    id: "raspberry-crazy-ant",
    name: "Raspberry Crazy Ant",
    category: "delicious",
    question: "What tiny insect runs around erratically and is named after a fruit?",
    facts: [
      "Raspberry crazy ants get the 'crazy' part of their name from their erratic, unpredictable movements.",
      "The 'raspberry' comes from the scientist who first identified them in the U.S., Tom Raspberry, not from their color or smell.",
      "They're invasive pests that are attracted to electrical equipment and can cause short circuits and equipment failure by nesting inside."
    ],
    image: ["/lovable-uploads/8487b8af-806f-4758-97ae-43854f70b4b6.png", "/lovable-uploads/2a255d56-5473-44da-8031-6adfa385f369.png"],
  },
  {
    id: "australian-ghost-shark",
    name: "Australian Ghost Shark",
    category: "mysterious",
    question: "What fish has a poisonous spine, elephant-like trunk, and lives in the deep sea?",
    facts: [
      "Despite its name, the Australian ghost shark isn't a shark but belongs to a related ancient group called chimaeras.",
      "It uses its trunk-like snout to find prey buried in the seafloor by detecting electrical signals.",
      "Males have a club-like structure on their heads that may be used to hold onto females during mating."
    ],
    image: "/lovable-uploads/b6d60faf-4825-4b5e-97b4-2e8970649602.png",
  },
  {
    id: "monkeyface-prickleback",
    name: "Monkeyface Prickleback",
    category: "weird",
    question: "What fish looks like it has a monkey's face?",
    facts: [
      "The monkeyface prickleback's name comes from the pattern on its head that vaguely resembles a monkey's face.",
      "Unlike most fish, it can breathe air and survive out of water for up to 37 hours.",
      "It's one of the few fish that can digest plant material and can live on a diet of algae."
    ],
    image: "/lovable-uploads/dcb35bf4-8a2b-471e-8da8-3211c44f19e0.png",
  },
  {
    id: "sarcastic-fringehead",
    name: "Sarcastic Fringehead",
    category: "fierce",
    question: "What fish has a giant mouth and a sassy attitude?",
    facts: [
      "The sarcastic fringehead isn't actually sarcastic; its scientific name is derived from Greek words meaning 'flesh' and 'mouth'.",
      "When threatened, it opens its colorful mouth incredibly wide in a dramatic display to intimidate rivals or predators.",
      "Two males will often fight by pressing their open mouths against each other, like a bizarre kissing contest."
    ],
    image: ["/lovable-uploads/8c79dbe2-73ec-4260-9abb-104b2de92996.png", "/lovable-uploads/ffe1fac4-535b-487d-b4fb-4490a85c9409.png"],
  },
  {
    id: "long-wattled-umbrellabird",
    name: "Long-Wattled Umbrellabird",
    category: "mysterious",
    question: "What bird has a hairstyle like Elvis and a necktie a foot long?",
    facts: [
      "The long-wattled umbrellabird has a large crest of feathers on its head that looks like an umbrella or a fancy hairstyle.",
      "Males have a long, feathered wattle (the 'necktie') hanging from their chest that can be more than 30 cm (12 inches) long.",
      "During courtship, males inflate their wattles and shiver their crest feathers while making sounds like low mooing or rumbling."
    ],
    image: "/lovable-uploads/fb824a16-e514-4e58-a21b-87c220bfdc8e.png",
  },
  {
    id: "blobfish",
    name: "Blobfish",
    category: "weird",
    question: "What deep-sea fish looks like a sad blob of jelly on land?",
    facts: [
      "The blobfish only looks like a blob when taken out of water. In its natural deep-sea environment, it looks like a regular fish.",
      "It lives at depths of up to 1,200 meters (3,900 feet) where the pressure is 120 times greater than at sea level.",
      "Instead of a gas-filled swim bladder, which would collapse under pressure, its body is mainly gelatinous with a density slightly less than water, allowing it to float above the seafloor without much effort."
    ],
    image: "/lovable-uploads/eb0a6e45-42af-4c28-98d3-3f7c6a7a82ff.png",
  },
  {
    id: "pyjama-squid",
    name: "Pyjama Squid",
    category: "sweet",
    question: "What sea creature looks like it's ready for bed?",
    facts: [
      "Despite its name, the pyjama squid isn't a squid at all but a type of cuttlefish.",
      "Its white and brown striped pattern resembles pajamas, giving it its common name.",
      "It can change its color and pattern for camouflage but usually keeps its distinctive striped look."
    ],
    image: ["/lovable-uploads/3ac88dae-5336-4f8d-98c6-26f10b4c4551.png", "/lovable-uploads/298cb0f7-5917-4b2a-bf29-582997fe1d8f.png"],
  },
  {
    id: "cuckoo-wasp",
    name: "Cuckoo Wasp",
    category: "magical",
    question: "What insect looks like a living jewel?",
    facts: [
      "Cuckoo wasps have brilliant metallic blue, green, or red colors that make them look like living gemstones.",
      "They get their name from their habit of laying eggs in the nests of other wasps or bees, similar to cuckoo birds.",
      "When threatened, they can roll into a ball to protect their vital parts, and their hard outer covering helps shield them from attacks."
    ],
    image: ["/lovable-uploads/f157dcd0-9218-4d98-abd2-42e051483a08.png", "/lovable-uploads/0923a6e3-70f6-461a-8912-3ee29c3cb1b5.png"],
  },
  {
    id: "ba-humbugi",
    name: "Ba Humbugi",
    category: "mysterious",
    question: "What snail was named after Ebenezer Scrooge's famous phrase?",
    facts: [
      "The Ba humbugi is a real snail species found only on the island of Ba, in Fiji.",
      "It was named after Ebenezer Scrooge's famous phrase 'Bah! Humbug!' from Charles Dickens' 'A Christmas Carol'.",
      "Scientists sometimes have fun with naming new species, and this is a perfect example of their sense of humor."
    ],
    image: ["/lovable-uploads/7c8c7438-96f5-483c-8f8a-a7b96ebcf229.png", "/lovable-uploads/52a92cf1-d7c1-45e1-a4c3-e14b10da3e91.png"],
  },
  {
    id: "lionhead-rabbit",
    name: "Lionhead Rabbit",
    category: "sweet",
    question: "What pet has a wooly mane but fits in the palm of your hand?",
    facts: [
      "Lionhead rabbits got their name from the ring of long fur around their head that resembles a lion's mane.",
      "They're a relatively new breed of domestic rabbit, first appearing in Belgium in the 1990s.",
      "Despite their wild manes, they're quite small, typically weighing only 2.5 to 3.5 pounds."
    ],
    image: ["/lovable-uploads/fb87f26b-313f-4968-85eb-4f5895bb5ade.png", "/lovable-uploads/a569de47-f3b9-4c4c-95dd-b13244ac767f.png"],
  },
  {
    id: "hagfish",
    name: "Hagfish",
    category: "weird",
    question: "What eel-like fish can tie itself in a knot and produces buckets of slime?",
    facts: [
      "When threatened, a hagfish can produce enough slime in seconds to fill a bucket.",
      "It can tie itself in a knot and slide the knot down its body to clean off the slime or escape a predator's grip.",
      "Despite being called a fish, it has no jaws, true fins, or scales, and its skeleton is made of cartilage, not bone."
    ],
    image: "/lovable-uploads/26ed8a88-1b0b-4643-b0e2-12f1491364d3.png",
  },
  {
    id: "poison-dart-frog",
    name: "Poison Dart Frog",
    category: "fierce",
    question: "What tiny, colorful frog could kill 10 people with its skin toxins?",
    facts: [
      "The golden poison dart frog is one of the most toxic animals on Earth. Just 2 micrograms of its toxin is enough to kill a human.",
      "Indigenous peoples of Colombia used the frogs' toxins to poison the tips of their blowdarts for hunting.",
      "Poison dart frogs raised in captivity aren't toxic because their toxins come from the insects they eat in the wild."
    ],
    image: ["/lovable-uploads/f1e987b7-ef95-43af-8629-a5385bc56ed9.png", "/lovable-uploads/36c20eaf-4b47-443c-9a26-7a337b4862d2.png"],
  },
  {
    id: "bone-eating-snot-flower-worm",
    name: "Bone-Eating Snot Flower Worm",
    category: "weird",
    question: "What bizarre creature grows on whale bones and looks like mucus?",
    facts: [
      "These worms don't have mouths or digestive systems. Instead, they send root-like structures into whale bones to absorb nutrients.",
      "Only the females feed on bones. The microscopic males live inside the females' tubes.",
      "They were only discovered in 2002 and belong to a group of animals called 'zombie worms'."
    ],
    image: ["/lovable-uploads/57f09d26-cde9-4730-8967-b6c037b44528.png", "/lovable-uploads/93960820-e0cd-4fcb-8903-c75302378bb9.png"],
  },
  {
    id: "hickory-horned-devil",
    name: "Hickory Horned Devil",
    category: "fierce",
    question: "What caterpillar looks like a dragon and is as long as your hand?",
    facts: [
      "Despite its fearsome appearance, the hickory horned devil is completely harmless to humans.",
      "It's the largest caterpillar in North America, growing up to 14 centimeters (5.5 inches) long.",
      "When it's ready to pupate, it burrows into the ground and transforms into the regal moth, which has a wingspan of up to 15 centimeters (6 inches)."
    ],
    image: ["/lovable-uploads/b243e9ce-c47f-4f9c-a4a8-cf591b0b54e2.png", "/lovable-uploads/0283ed03-15cc-4ecc-bd41-ec583d2fac4a.png"],
  },
  {
    id: "vampire-squid",
    name: "Vampire Squid",
    category: "mysterious",
    question: "What deep-sea creature has red eyes, webbed arms, and a cloak-like body?",
    facts: [
      "Despite its name, the vampire squid doesn't suck blood. It got its name from its dark color, cloak-like webbing, and red eyes.",
      "It's not actually a squid, but belongs to its own order of animals between squids and octopuses.",
      "When threatened, it can turn its body inside out, displaying spiny projections, and can also release a cloud of bioluminescent mucus instead of ink."
    ],
    image: ["/lovable-uploads/1d7339ad-b285-43e9-a6b6-1314465ec4bc.png", "/lovable-uploads/dfacb60f-ace9-4bdf-8f0c-74e70615a1f1.png"],
  },
  {
    id: "honey-badger",
    name: "Honey Badger",
    category: "fierce",
    question: "What fearless creature can survive snake bites and bee stings just to get a snack?",
    facts: [
      "Honey badgers have been called the world's most fearless animal. They'll attack animals much larger than themselves, including lions.",
      "Their skin is incredibly thick and loose, allowing them to twist around and bite an attacker even when caught.",
      "They have a special immunity to many venoms, allowing them to eat venomous snakes and survive bites that would kill other animals."
    ],
    image: ["/lovable-uploads/ddacacb5-d210-4b3f-a705-0a0958330fc6.png", "/lovable-uploads/99a13886-4fe8-4f52-9d3c-7d99a8350c7a.png"],
  },
  {
    id: "red-lipped-batfish",
    name: "Red-Lipped Batfish",
    category: "weird",
    question: "What fish has bright red lips and walks instead of swims?",
    facts: [
      "The red-lipped batfish uses its pectoral fins to 'walk' along the ocean floor rather than swimming.",
      "Its bright red lips may help attract prey or mates, though scientists aren't entirely sure of their purpose.",
      "It has a modified dorsal fin on its head that acts as a fishing lure to attract prey."
    ],
    image: [
      "/lovable-uploads/f3205e2a-86cf-4934-887f-c40862c21ab0.png", 
      "/lovable-uploads/33cae5a1-1c32-49e5-ad2d-13fd8ba04809.png",
      "/lovable-uploads/2282b28d-4320-4022-b465-d8a1e009082a.png",
      "/lovable-uploads/d8de0004-11df-49e8-a74d-176206ff400c.png"
    ],
  },
  {
    id: "hercules-beetle",
    name: "Hercules Beetle",
    category: "fierce",
    question: "What insect can carry 850 times its own weight?",
    facts: [
      "The Hercules beetle is one of the largest flying insects in the world, with males growing up to 7 inches long including their horns.",
      "Males have large horn-like pincers that they use to fight other males for territory and mates.",
      "Despite their fearsome appearance, they're harmless to humans and feed mainly on rotting fruit and tree sap."
    ],
    image: ["/lovable-uploads/fa0dc4ec-7637-4fd4-91d3-32e96249f92f.png", "/lovable-uploads/07210a5f-1f2f-443a-917e-ea437efd5e89.png"],
  },
  {
    id: "southern-hairy-nosed-wombat",
    name: "Southern Hairy-Nosed Wombat",
    category: "sweet",
    question: "What animal has cube-shaped poop and a nose full of hair?",
    facts: [
      "Southern hairy-nosed wombats are the only animals that produce cube-shaped poop, which they sometimes use to mark their territory.",
      "Their backward-facing pouch keeps dirt out while they dig burrows.",
      "They have extremely tough backsides made of cartilage that they use as a shield to block their burrow entrances from predators."
    ],
    image: [
      "/lovable-uploads/e15c59a6-e20f-47bd-9d62-e5028ecb994c.png", 
      "/lovable-uploads/73762eb7-97bd-44f0-9064-9ec199c90cbd.png", 
      "/lovable-uploads/de9414a0-a291-4caf-8d6d-a889a8e4d749.png"
    ],
  },
  {
    id: "unicorn-fish",
    name: "Unicorn Fish",
    category: "magical",
    question: "What fish has a unicorn-like horn on its forehead?",
    facts: [
      "The unicorn fish gets its name from the unicorn-like horn or projection on its forehead.",
      "Its horn is actually an extension of its skull and can be used for defense or fighting with other males.",
      "It's a type of surgeonfish that has sharp, scalpel-like spines on either side of its tail that can inflict serious wounds."
    ],
    image: "/lovable-uploads/fe2688f7-2b9c-4dfb-87b1-1b59a2847db9.png",
  },
  {
    id: "chocolate-dipped-damselfish",
    name: "Chocolate-Dipped Damselfish",
    category: "delicious",
    question: "What fish looks like it's been dipped in chocolate?",
    facts: [
      "The chocolate-dipped damselfish has a distinctive appearance with a white body and brown rear section, making it look like it was dipped in chocolate.",
      "It lives among coral reefs in the Pacific Ocean.",
      "Like other damselfish, it can be quite territorial and aggressive despite its small size and sweet name."
    ],
    image: "/lovable-uploads/e86cf5b4-84d5-4754-b8a6-ff7b0e604ea2.png",
  },
  {
    id: "pieza-pi",
    name: "Pieza Pi",
    category: "mysterious",
    question: "What fly has a name that's a mathematical pun?",
    facts: [
      "Pieza pi is a species of fly named after the mathematical constant π (pi).",
      "It belongs to a genus whose name sounds like 'pizza pie' when pronounced (Pieza).",
      "The scientist who named it has a tradition of giving flies humorous names, like Pieza rhea (pizza-ria) and Pieza kake (pizza cake)."
    ],
    image: "/lovable-uploads/c843c985-49b9-4baa-8d84-839084778214.png",
  },
  {
    id: "banana-slug",
    name: "Banana Slug",
    category: "delicious",
    question: "What bright yellow creature leaves a trail of slime and can eat poisonous mushrooms?",
    facts: [
      "Banana slugs are among the largest slugs in the world, growing up to 10 inches long.",
      "Their bright yellow color resembles a ripe banana, which gives them their name.",
      "They play an important role in forest ecosystems by eating dead plant material and spreading seeds and spores as they move.",
      "Their slime contains a chemical that numbs the tongue of predators, helping to protect them from being eaten."
    ],
    image: [
      "/lovable-uploads/9b9595ae-b4e2-43fa-b83c-6ca66e17323d.png",
      "/lovable-uploads/7320dbeb-59eb-460c-b8f0-1cad8f7879a3.png"
    ],
  },
  {
    id: "aye-aye",
    name: "Aye-Aye",
    category: "mysterious",
    question: "What nocturnal primate has a long, thin middle finger that it uses to find food?",
    facts: [
      "The aye-aye is a rare lemur native to Madagascar with distinctive features like large eyes, big ears, and a specialized middle finger.",
      "It uses its unusually long middle finger to tap on trees to find hollow areas containing grubs, then extracts them with the same finger.",
      "In Malagasy folklore, the aye-aye is considered an omen of bad luck, which has unfortunately contributed to its endangered status.",
      "Despite its somewhat spooky appearance, it's actually related to monkeys, apes, and humans as a fellow primate."
    ],
    image: [
      "/lovable-uploads/63480d3a-5723-416d-93a4-4493e65d6060.png",
      "/lovable-uploads/8956f0d2-5f9a-4fb2-9f4b-dd2aac0f9de5.png"
    ],
  },
  {
    id: "bird-beak-dogfish",
    name: "Bird Beak Dogfish",
    category: "weird",
    question: "What deep-sea shark got its name from its pointed snout?",
    facts: [
      "The bird beak dogfish has a distinctive pointed, beak-like snout that gives it its unusual name.",
      "It lives in deep waters of the Pacific and Atlantic Oceans, typically at depths of over 600 meters.",
      "Like many deep-sea sharks, it hunts in packs, which is unusual for shark species.",
      "When giving birth, the bird beak dogfish can have up to twelve baby sharks, known as 'pups'."
    ],
    image: [
      "/lovable-uploads/57caccdb-7bca-4144-8ed3-85d3f2128c20.png",
      "/lovable-uploads/4699e393-4c77-4b21-86a7-0830122ef84a.png"
    ],
  }
];

// Get a random animal from the list
export const getRandomAnimal = (): Animal => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

// Get a random image for an animal
export const getRandomImage = (animal: Animal): string => {
  if (animal.image === "?") {
    return "?";
  }
  
  if (typeof animal.image === "string") {
    return animal.image;
  }
  
  // If it's an array, get a random image from the array
  const randomIndex = Math.floor(Math.random() * animal.image.length);
  return animal.image[randomIndex];
};

// Get an animal by ID
export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};
