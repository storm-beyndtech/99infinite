import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-2.png";
import logoDark from "../assets/logo-2-dark.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "md", 
  variant = "auto",
  showText = false
}) => {
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto", 
    lg: "h-12 w-auto"
  };

  const logoSrc = variant === "dark" ? logoDark : logo;

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <img 
        src={logoSrc} 
        alt="99infinite" 
        className={sizeClasses[size]}
      />
      {showText && (
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          99infinite
        </span>
      )}
    </Link>
  );
};

export default Logo;