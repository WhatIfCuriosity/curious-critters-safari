
import { Activity } from "../lib/activities";
import { cn } from "../lib/utils";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import { Button } from "./ui/button";

interface ActivityCardProps {
  activity: Activity;
  onComplete?: () => void;
  className?: string;
}

const ActivityCard = ({ 
  activity,
  onComplete,
  className 
}: ActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatedContainer 
      animation="scale" 
      className={cn(
        "rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100",
        isCompleted ? "border-l-4 border-l-safari-leaf" : "",
        className
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
          {isCompleted && (
            <span className="flex items-center text-safari-leaf text-sm font-medium">
              <Check className="h-4 w-4 mr-1" />
              Completed
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{activity.description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-safari-amber hover:text-safari-amber/80 font-medium focus:outline-none"
        >
          {isExpanded ? "Hide instructions" : "Show instructions"}
          {isExpanded ? (
            <ChevronUp className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-1 h-4 w-4" />
          )}
        </button>
        
        {isExpanded && (
          <AnimatedContainer animation="fade" className="mt-4 p-4 bg-safari-amber/5 rounded-lg">
            <p className="text-gray-700">{activity.instructions}</p>
          </AnimatedContainer>
        )}
        
        <div className="mt-6">
          <h4 className="font-medium text-gray-800 mb-2">Your Notes</h4>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your ideas, sketches, or responses here..."
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-amber/50 min-h-[120px] text-gray-700"
          ></textarea>
          
          {!isCompleted && (
            <Button 
              variant="default"
              className="mt-4"
              onClick={handleComplete}
              disabled={notes.trim().length === 0}
            >
              Mark as Complete
            </Button>
          )}
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default ActivityCard;
