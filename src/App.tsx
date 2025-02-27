
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Random from "./pages/Random";
import Biomimicrosity from "./pages/Biomimicrosity";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { setupDatabase } from "./services/databaseService";

const App = () => {
  // Set up the database on app initialization
  useEffect(() => {
    setupDatabase().catch(console.error);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/random" element={<Random />} />
      <Route path="/biomimicrosity" element={<Biomimicrosity />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
