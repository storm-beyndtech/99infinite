import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface DarkModeSwitcherProps {
  variant?: "default" | "neutral" | "blue";
  className?: string;
}

const DarkModeSwitcher: React.FC<DarkModeSwitcherProps> = ({ 
  variant = "default",
  className = ""
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is already enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const baseClasses = "flex items-center justify-center p-2 rounded-lg transition-colors duration-200";
  const variantClasses = {
    default: "hover:bg-gray-100 dark:hover:bg-gray-800",
    neutral: "hover:bg-gray-200/50 dark:hover:bg-gray-700/50",
    blue: "hover:bg-blue-500/20 dark:hover:bg-blue-600/20"
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};

export default DarkModeSwitcher;