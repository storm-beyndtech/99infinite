import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

interface SectionCTAProps {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  icon?: React.ReactNode;
  className?: string;
}

const SectionCTA: React.FC<SectionCTAProps> = ({
  title,
  description,
  linkText,
  linkTo,
  icon = <Building2 className="w-8 h-8" />,
  className = ''
}) => {
  return (
    <div className={`group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-white hover:from-cyan-800 hover:to-cyan-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-400 transition-colors">
          {icon}
        </div>
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-200 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      <Link 
        to={linkTo}
        className="inline-flex items-center bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
      >
        {linkText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default SectionCTA;