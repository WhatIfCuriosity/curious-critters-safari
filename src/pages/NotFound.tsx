
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import AnimatedContainer from "../components/AnimatedContainer";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-safari-cream p-4 text-center">
      <AnimatedContainer animation="scale">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">Oops! The page you're looking for seems to have wandered off into the wild.</p>
        
        <Button
          variant="default"
          onClick={() => navigate("/")}
          className="mx-auto"
        >
          Return to Safari
        </Button>
      </AnimatedContainer>
    </div>
  );
};

export default NotFound;
