
export interface Activity {
  id: string;
  title: string;
  description: string;
  instructions: string;
}

export const activities: Activity[] = [
  {
    id: "service-blueprint",
    title: "Sketch a Service Blueprint",
    description: "Create a visual representation of the service process inspired by this animal.",
    instructions: "Draw a simple blueprint showing how users interact with a service, including the animal's traits as inspiration. Include user actions, touchpoints, and behind-the-scenes processes."
  },
  {
    id: "user-story",
    title: "Write a User Story",
    description: "Create a story from a user's perspective, incorporating the animal's qualities.",
    instructions: "Write a short user story in the format: 'As a [user], I want to [action] so that [benefit].' Use the animal's characteristics as inspiration for the story."
  },
  {
    id: "touchpoint-design",
    title: "Design a Touchpoint",
    description: "Imagine a new user interaction based on the animal's behavior.",
    instructions: "Sketch or describe a single touchpoint (e.g., app screen, physical object, conversation) inspired by how this animal interacts with its environment."
  },
  {
    id: "persona-creation",
    title: "Create a Persona",
    description: "Build a persona reflecting the animal's characteristics.",
    instructions: "Create a user persona with needs, goals, and pain points inspired by this animal's traits. Give them a name, background, and key characteristics."
  },
  {
    id: "customer-journey",
    title: "Map a Customer Journey",
    description: "Outline a journey map inspired by the animal's habits.",
    instructions: "Create a simple customer journey map showing the stages a user goes through when using a service. Use the animal's movements or behaviors as inspiration."
  },
  {
    id: "feature-brainstorm",
    title: "Brainstorm Features",
    description: "List three service features based on the animal.",
    instructions: "Come up with three innovative features for a service that are inspired by this animal's unique traits or behaviors."
  },
  {
    id: "interface-prototype",
    title: "Prototype an Interface",
    description: "Sketch a mobile screen embodying the animal's essence.",
    instructions: "Draw a simple mobile interface for a service that captures the essence or characteristics of this animal."
  },
  {
    id: "value-proposition",
    title: "Craft a Value Proposition",
    description: "Write a one-sentence value proposition inspired by the animal.",
    instructions: "Create a compelling value proposition for a service that incorporates the unique qualities of this animal."
  },
  {
    id: "feedback-loop",
    title: "Develop a Feedback Loop",
    description: "Design a feedback mechanism based on the animal's environment.",
    instructions: "Create a system for gathering and responding to user feedback, inspired by how this animal interacts with its environment."
  },
  {
    id: "collaborative-process",
    title: "Imagine a Collaborative Process",
    description: "Describe a team process mirroring the animal's habitat.",
    instructions: "Design a collaborative work process for a service design team that reflects how this animal lives or interacts with others in its environment."
  }
];

// Utility function to get a random activity
export const getRandomActivity = (): Activity => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  return activities[randomIndex];
};

// Utility function to get activity by ID
export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};
