
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
      "Despite its name, the vampire squid is neither a vampire nor a true squid, but belongs to its own order of cephalopods.",
      "It gets its name from its dark color, red eyes, and cape-like webbing between its arms.",
      "When threatened, it can turn itself inside out, exposing spiny projections that make it look intimidating."
    ],
    image: ["/lovable-uploads/1d7339ad-b285-43e9-a6b6-1314465ec4bc.png", "/lovable-uploads/dfacb60f-ace9-4bdf-8f0c-74e70615a1f1.png"],
  },
  {
    id: "honey-badger",
    name: "Honey Badger",
    category: "fierce",
    question: "What animal is known for not caring and fighting animals much larger than itself?",
    facts: [
      "Honey badgers are notorious for their strength, ferocity and toughness, attacking animals much larger than themselves.",
      "They have incredibly loose, thick skin that allows them to twist and turn to attack even when being held.",
      "They're virtually immune to snake venom and can recover from multiple snake bites that would kill other animals."
    ],
    image: ["/lovable-uploads/ddacacb5-d210-4b3f-a705-0a0958330fc6.png", "/lovable-uploads/99a13886-4fe8-4f52-9d3c-7d99a8350c7a.png"],
  },
  {
    id: "chocolate-dipped-damselfish",
    name: "Chocolate Dipped Damselfish",
    category: "delicious",
    question: "What fish looks like it's been half-dipped in chocolate?",
    facts: [
      "The chocolate dipped damselfish appears to have been dipped into chocolate, with a stark color contrast between its front and back halves.",
      "It was only discovered in 2008 in the Coral Triangle in the western Pacific Ocean.",
      "Like many damselfish, it's territorial and defends its home with surprising ferocity despite its small size."
    ],
    image: "/lovable-uploads/e86cf5b4-84d5-4754-b8a6-ff7b0e604ea2.png",
  },
  {
    id: "pieza-pi",
    name: "Pieza Pi",
    category: "mysterious",
    question: "What fly is named after a mathematical constant?",
    facts: [
      "Pieza pi is a real species of fly named after the mathematical constant π (pi).",
      "It belongs to a genus of flies with other mathematical names including Pieza tau, Pieza rhea (for Rhea, a Greek goddess), and Pieza kake (sounds like 'piece of cake').",
      "This is another example of scientists having fun with the naming of new species they discover."
    ],
    image: "/lovable-uploads/c843c985-49b9-4baa-8d84-839084778214.png",
  },
  {
    id: "banana-slug",
    name: "Banana Slug",
    category: "weird",
    question: "What bright yellow creature leaves a trail of slime wherever it goes?",
    facts: [
      "Banana slugs are among the largest slugs in the world, growing up to 9.8 inches (25 cm) long.",
      "They get their name from their bright yellow color, which resembles a ripe banana.",
      "Their slime contains chemicals that numb the tongue of would-be predators, making them less appealing to eat."
    ],
    image: ["/lovable-uploads/9b9595ae-b4e2-43fa-b83c-6ca66e17323d.png", "/lovable-uploads/7320dbeb-59eb-460c-b8f0-1cad8f7879a3.png"],
  },
  {
    id: "waxy-monkey-tree-frog",
    name: "Waxy Monkey Tree Frog",
    category: "weird",
    question: "What amphibian has a waxy coating and moves like a monkey?",
    facts: [
      "The waxy monkey tree frog gets its name from the waxy secretion it produces to prevent water loss in dry environments.",
      "Instead of jumping like typical frogs, it walks or climbs hand over hand like a monkey.",
      "During dry seasons, it can seal itself in a cocoon made of shed skin to prevent dehydration."
    ],
    image: ["/lovable-uploads/e931cfc9-6e89-4dad-9a01-10bde4da20c1.png", "/lovable-uploads/50d45d98-0a48-440f-bd02-d32114066130.png", "/lovable-uploads/4f3e5526-bca1-48c2-86b2-da7ed3786e46.png"],
  },
  {
    id: "chicken-turtle",
    name: "Chicken Turtle",
    category: "weird",
    question: "What shelled reptile is named after a bird?",
    facts: [
      "Chicken turtles get their name from the taste of their meat, which was said to resemble chicken.",
      "Unlike most turtles, they're most active in the winter and spring rather than summer.",
      "They have extremely long necks and can extend them quickly to catch prey."
    ],
    image: ["/lovable-uploads/8ed3ae0d-1a26-4996-9d15-2a7f04a850d9.png", "/lovable-uploads/fa9636a2-cba8-4b4a-bb78-a4f140e27400.png"],
  },
  {
    id: "dogface-butterfly",
    name: "Dogface Butterfly",
    category: "sweet",
    question: "What insect has wing markings that look like a poodle?",
    facts: [
      "The dogface butterfly gets its name from the pattern on its wings that resembles a dog's face in profile.",
      "It's the state insect of California, having been designated in 1972.",
      "Males and females look quite different, with only the males having the distinctive dog face pattern."
    ],
    image: ["/lovable-uploads/74ad3c1d-8f45-4b60-ab56-b3e8e64a8569.png", "/lovable-uploads/9a2680d2-e921-4a4e-8aae-be364052792a.png"],
  },
  {
    id: "headless-chicken-monster",
    name: "Headless Chicken Monster",
    category: "weird",
    question: "What deep-sea creature looks like a chicken without a head?",
    facts: [
      "Despite its bizarre nickname, the Headless Chicken Monster is actually a sea cucumber (Enypniastes eximia).",
      "It got its name from its unusual body shape that resembles a plucked chicken with no head.",
      "Unlike most sea cucumbers that stay on the ocean floor, this species can swim up into the water column using fin-like structures."
    ],
    image: "/lovable-uploads/10e9d55f-42ff-486c-bd56-59d1e72e36a3.png",
  }
];

// Function to get a random animal from the animals array
export const getRandomAnimal = (): Animal => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

// Function to get random image from an animal's image array or string
export const getRandomImage = (animal: Animal): string => {
  if (typeof animal.image === 'string') {
    return animal.image;
  }
  
  // If it's an array, get a random image
  const randomIndex = Math.floor(Math.random() * animal.image.length);
  return animal.image[randomIndex];
};
