
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Bell, BellOff } from "lucide-react";
import Button from "@/components/Button";
import AnimatedContainer from "@/components/AnimatedContainer";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  
  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
    // In a real app, you'd persist this to user preferences in Supabase
    toast({
      title: checked ? "Dark mode enabled" : "Light mode enabled",
      description: "Your preference has been saved.",
    });
  };
  
  const handleNotificationsToggle = (checked: boolean) => {
    setNotifications(checked);
    // In a real app, you'd persist this to user preferences in Supabase
    toast({
      title: checked ? "Notifications enabled" : "Notifications disabled",
      description: "Your preference has been saved.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-safari-cream">
      <header className="py-6 px-4 flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/profile")}
          className="flex items-center text-gray-600"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <h1 className="text-xl font-bold">Settings</h1>
        
        <div className="w-24" /> {/* Spacer for balance */}
      </header>
      
      <main className="flex-1 flex flex-col px-4 py-6 max-w-3xl mx-auto w-full">
        <AnimatedContainer animation="scale" className="bg-white rounded-2xl shadow-md border border-gray-100">
          <div className="p-6 space-y-6">
            <h2 className="text-xl font-bold mb-4">App Settings</h2>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={handleDarkModeToggle}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {notifications ? <Bell className="h-5 w-5" /> : <BellOff className="h-5 w-5" />}
                <Label htmlFor="notifications">Daily Challenges</Label>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={handleNotificationsToggle}
              />
            </div>
          </div>
          
          <div className="border-t border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-600 mb-4">
              Curious Service Safari helps service design professionals enhance their creativity and skills through animal-inspired design challenges.
            </p>
            <div className="text-sm text-gray-500">
              <p>Version 1.0.0</p>
              <p className="mt-1">© 2023 Curious Service Safari</p>
            </div>
          </div>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default Settings;
