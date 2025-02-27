
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthForm from "../components/AuthForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "../components/ui/button";
import AnimatedContainer from "../components/AnimatedContainer";

const Auth = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("sign-in");
  
  // Redirect if already logged in
  if (user && !loading) {
    return <Navigate to="/" replace />;
  }
  
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
        
        <h1 className="text-xl font-bold">Account</h1>
        
        <div className="w-24" /> {/* Spacer for balance */}
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <AnimatedContainer 
          animation="scale" 
          className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 border border-gray-100"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-safari-amber/10 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-safari-amber" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-6">
            {activeTab === "sign-in" ? "Welcome Back" : "Create Account"}
          </h2>
          
          <Tabs
            defaultValue="sign-in"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sign-in">
              <AuthForm
                mode="signIn"
                onSuccess={() => navigate("/")}
              />
              <p className="text-center mt-4 text-gray-500 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => setActiveTab("sign-up")}
                  className="text-safari-amber hover:underline focus:outline-none"
                >
                  Sign up
                </button>
              </p>
            </TabsContent>
            
            <TabsContent value="sign-up">
              <AuthForm
                mode="signUp"
                onSuccess={() => navigate("/")}
              />
              <p className="text-center mt-4 text-gray-500 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => setActiveTab("sign-in")}
                  className="text-safari-amber hover:underline focus:outline-none"
                >
                  Sign in
                </button>
              </p>
            </TabsContent>
          </Tabs>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default Auth;
