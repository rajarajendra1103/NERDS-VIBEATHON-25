import React from 'react';
import { TRACKS_DATA } from '../constants';
import { Globe, Smartphone } from 'lucide-react';

export const Tracks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {TRACKS_DATA.map((track) => (
        <div key={track.id} className="relative group overflow-hidden rounded-3xl bg-card-bg border border-white/10 hover:border-nerds-sky/50 transition-all duration-500 hover:-translate-y-2">
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-nerds-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="p-10 relative z-10 flex flex-col h-full">
            <div className={`w-14 h-14 mb-8 rounded-2xl flex items-center justify-center transition-colors ${track.id === 'web' ? 'bg-nerds-sky/10 text-nerds-sky' : 'bg-nerds-orange/10 text-nerds-orange'}`}>
              {track.icon === 'globe' ? (
                <Globe className="w-7 h-7" />
              ) : (
                <Smartphone className="w-7 h-7" />
              )}
            </div>
            
            <h3 className="text-3xl font-bold font-sans text-white mb-4 group-hover:text-nerds-sky transition-colors">
              {track.title}
            </h3>
            
            <p className="text-gray-400 mb-8 font-mono text-sm leading-relaxed flex-grow">
              {track.description}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {track.tech.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-nerds-blue/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};