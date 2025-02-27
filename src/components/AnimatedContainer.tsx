
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  animation?: "fade" | "scale" | "slide-up" | "slide-down" | "none";
  delay?: number;
  className?: string;
  once?: boolean;
}

const AnimatedContainer = ({
  children,
  animation = "fade",
  delay = 0,
  className = "",
  once = true,
}: AnimatedContainerProps) => {
  const [isVisible, setIsVisible] = useState(!once);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case "fade":
        return "animate-fade-in";
      case "scale":
        return "animate-scale-in";
      case "slide-up":
        return "animate-slide-up";
      case "slide-down":
        return "animate-slide-down";
      case "none":
      default:
        return "opacity-100";
    }
  };
  
  return (
    <div
      className={cn(
        "transition-all duration-500",
        getAnimationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
