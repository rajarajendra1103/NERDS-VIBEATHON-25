import React from 'react';
import { TIMELINE_DATA } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <div className="relative py-10">
      {/* Vertical Line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nerds-blue/20 via-nerds-lime/50 to-nerds-blue/20"></div>
      
      <div className="space-y-12">
        {TIMELINE_DATA.map((item, index) => (
          <div key={item.id} className="relative pl-16 md:pl-20 group">
            {/* Dot */}
            <div className={`absolute left-4 md:left-6 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-[7px] rounded-full border-2 z-10 transition-all duration-300 ${item.highlight ? 'bg-nerds-lime border-nerds-lime shadow-[0_0_15px_rgba(178,232,0,0.6)] scale-110' : 'bg-dark-bg border-nerds-blue group-hover:border-nerds-lime'}`}></div>
            
            {/* Content */}
            <div className={`transition-all duration-300 ${item.highlight ? 'transform md:translate-x-2' : ''}`}>
               <span className={`inline-block px-3 py-1 mb-2 text-xs font-mono font-bold rounded-sm ${item.highlight ? 'bg-nerds-lime text-black' : 'bg-white/5 text-nerds-sky'}`}>
                  {item.date}
               </span>
               <h3 className={`text-xl font-bold font-sans mb-1 ${item.highlight ? 'text-nerds-lime' : 'text-white group-hover:text-nerds-blue transition-colors'}`}>
                  {item.title}
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {item.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};