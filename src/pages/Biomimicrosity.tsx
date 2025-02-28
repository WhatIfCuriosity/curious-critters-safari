
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import AnimalCard from "../components/AnimalCard";
import ActivityCard from "../components/ActivityCard";
import { Button } from "../components/ui/button";
import { getAnimalById, getRandomAnimal, Animal } from "../lib/animals";
import { getRandomActivity, Activity } from "../lib/activities";
import AnimatedContainer from "../components/AnimatedContainer";
import { useAuth } from "../contexts/AuthContext";
import { saveUserActivity } from "../services/databaseService";
import ProfileBadge from "../components/ProfileBadge";

const steps = [
  {
    id: "curiosity",
    title: "Curiosity",
    description: "Meet your animal inspiration and wonder about its connection to service design."
  },
  {
    id: "discovery",
    title: "Discovery", 
    description: "Learn about your animal's unique traits and behaviors."
  },
  {
    id: "reframing",
    title: "Reframing",
    description: "Connect these traits to service design challenges and opportunities."
  },
  {
    id: "creation",
    title: "Creation",
    description: "Apply your insights to a service design activity."
  }
];

const Biomimicrosity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [notes, setNotes] = useState<string[]>(["", "", "", ""]);
  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false]);
  const [animationDirection, setAnimationDirection] = useState<"forward" | "backward">("forward");
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    // Check if specific animal was requested in URL
    const params = new URLSearchParams(location.search);
    const animalId = params.get("animal");
    
    if (animalId) {
      const foundAnimal = getAnimalById(animalId);
      setAnimal(foundAnimal || getRandomAnimal());
    } else {
      setAnimal(getRandomAnimal());
    }
    
    // Get random activity
    setActivity(getRandomActivity());
  }, [location.search]);
  
  const updateNotes = (stepIndex: number, newNote: string) => {
    const newNotes = [...notes];
    newNotes[stepIndex] = newNote;
    setNotes(newNotes);
  };
  
  const markStepComplete = (stepIndex: number) => {
    const newCompleted = [...completed];
    newCompleted[stepIndex] = true;
    setCompleted(newCompleted);
    
    // If not last step, automatically go to next step
    if (stepIndex < steps.length - 1) {
      handleNextStep();
    }
  };
  
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setAnimationDirection("forward");
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setAnimationDirection("backward");
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const handleComplete = async () => {
    if (!animal || !activity) return;
    
    // If user is logged in, save the activity to their profile
    if (user) {
      try {
        setIsSaving(true);
        await saveUserActivity(
          user.id, 
          animal.id, 
          activity.id, 
          notes,
          true
        );
        
        // Successful save, navigate after a small delay
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.error("Error saving activity:", error);
        // Continue navigation even if save failed
        navigate("/");
      } finally {
        setIsSaving(false);
      }
    } else {
      // If no user, just navigate
      navigate("/");
    }
  };
  
  const progressPercentage = ((completed.filter(Boolean).length) / steps.length) * 100;
  
  const renderStepContent = () => {
    if (!animal) return null;
    
    switch (currentStep) {
      case 0: // Curiosity
        return (
          <div className="space-y-6">
            <AnimalCard animal={animal} className="w-full" />
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">What are you curious about?</h3>
              <p className="text-gray-600 mb-6">
                Consider this animal's unique traits. How might they inspire service design solutions?
              </p>
              
              <textarea
                value={notes[0]}
                onChange={(e) => updateNotes(0, e.target.value)}
                placeholder="Write your thoughts and questions here..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-amber/50 min-h-[120px]"
              ></textarea>
              
              <Button
                variant="default"
                className="mt-4"
                onClick={() => markStepComplete(0)}
                disabled={notes[0].trim().length === 0}
              >
                Complete Step
              </Button>
            </div>
          </div>
        );
        
      case 1: // Discovery
        return (
          <div className="space-y-6">
            <AnimalCard animal={animal} showFacts={true} className="w-full" />
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">What have you discovered?</h3>
              <p className="text-gray-600 mb-6">
                Now that you've learned about this animal, note the traits that stand out to you.
              </p>
              
              <textarea
                value={notes[1]}
                onChange={(e) => updateNotes(1, e.target.value)}
                placeholder="Note the most interesting traits you've discovered..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-amber/50 min-h-[120px]"
              ></textarea>
              
              <Button
                variant="default"
                className="mt-4"
                onClick={() => markStepComplete(1)}
                disabled={notes[1].trim().length === 0}
              >
                Complete Step
              </Button>
            </div>
          </div>
        );
        
      case 2: // Reframing
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Reframe the Challenge</h3>
              <p className="text-gray-600 mb-6">
                How could a service embody the traits of the <span className="font-bold">{animal.name}</span>? Think about how these animal characteristics could solve service design challenges.
              </p>
              
              <div className="p-4 bg-gray-50 rounded-lg mb-6">
                <h4 className="font-bold text-gray-700 mb-2">Your Discovery Notes</h4>
                <p className="text-gray-600 italic">{notes[1]}</p>
              </div>
              
              <textarea
                value={notes[2]}
                onChange={(e) => updateNotes(2, e.target.value)}
                placeholder="How might these traits inspire service innovations?"
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-amber/50 min-h-[120px]"
              ></textarea>
              
              <Button
                variant="default"
                className="mt-4"
                onClick={() => markStepComplete(2)}
                disabled={notes[2].trim().length === 0}
              >
                Complete Step
              </Button>
            </div>
          </div>
        );
        
      case 3: // Creation
        return (
          <div className="space-y-6">
            {activity && (
              <ActivityCard 
                activity={activity} 
                onComplete={() => markStepComplete(3)}
              />
            )}
          </div>
        );
        
      default:
        return null;
    }
  };
  
  const animationClass = animationDirection === "forward" ? "animate-slide-in-right" : "animate-fade-in";
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-safari-cream">
      <header className="py-6 px-4 flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <h1 className="text-xl font-bold">Biomimicrosity</h1>
        
        <ProfileBadge />
      </header>
      
      <div className="bg-white shadow-sm py-4 mb-6">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div 
              className="bg-safari-amber h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center relative path-step ${
                  index === currentStep ? "text-safari-amber" : 
                  completed[index] ? "text-safari-leaf" : "text-gray-400"
                }`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    index === currentStep ? "bg-safari-amber text-white" : 
                    completed[index] ? "bg-safari-leaf text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {completed[index] ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                <p className="text-xs font-medium hidden sm:block">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <main className="flex-1 flex flex-col px-4 py-2 max-w-3xl mx-auto w-full">
        <AnimatedContainer 
          animation="fade" 
          className="mb-6"
        >
          <h2 className="text-2xl font-bold mb-1">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600">
            {steps[currentStep].description}
          </p>
        </AnimatedContainer>
        
        <div className={animationClass}>
          {renderStepContent()}
        </div>
        
        <div className="flex justify-between mt-8 mb-6">
          <Button
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button
              variant="outline"
              onClick={handleNextStep}
              disabled={!completed[currentStep]}
              className="flex items-center"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              variant={completed[currentStep] ? "default" : "outline"}
              onClick={handleComplete}
              disabled={!completed[currentStep] || isSaving}
              className="flex items-center"
            >
              <Sparkles className="h-4 w-4 mr-1" />
              {isSaving ? "Saving..." : "Finish Activity"}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Biomimicrosity;
