
import { Button } from "../components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import AnimatedContainer from "../components/AnimatedContainer";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-safari-cream p-4 text-center">
      <AnimatedContainer animation="scale">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-2">Oops! The page you're looking for seems to have wandered off into the wild.</p>
        <p className="text-gray-500 mb-8">This can happen when refreshing the page on certain hosts.</p>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            onClick={() => navigate("/")}
            className="bg-safari-orange hover:bg-safari-orange/90 flex items-center gap-2"
          >
            <Home size={18} />
            Return to Safari
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="flex items-center gap-2"
          >
            Refresh Page
          </Button>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <p>If you continue experiencing issues, try navigating directly to the <Link to="/" className="text-safari-orange underline">home page</Link>.</p>
        </div>
      </AnimatedContainer>
    </div>
  );
};

export default NotFound;
