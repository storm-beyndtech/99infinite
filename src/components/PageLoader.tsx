import React from "react";
import { Loader2 } from "lucide-react";
import Logo from "./Logo";

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-50/30 via-amber-50/20 to-cyan-50/40 dark:from-stone-950/90 dark:via-slate-950/95 dark:to-cyan-950/90">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
        </div>
        
        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-cyan-600 dark:text-cyan-400 animate-spin" />
            {/* Outer ring for enhanced effect */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-200 dark:border-cyan-800/30 animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Loading...
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
