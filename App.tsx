import React, { useEffect, useState } from 'react';
import { Timeline } from './components/Timeline';
import { Tracks } from './components/Tracks';
import { AIChatModal } from './components/AIChatModal';
import { WHATSAPP_LINK, DISCORD_LINK, RUNANYWHERE_REPO, FORM_LINK, HACKSS_REPO, LINKEDIN_LINK } from './constants';
import { Terminal, Calendar, Trophy, Zap, Download, MessageCircle, Github, ExternalLink, ArrowRight, CheckCircle2, Code2, Users, Video } from 'lucide-react';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Height of fixed header + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-nerds-lime selection:text-nerds-primary font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-nerds-primary/20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-nerds-lime/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-dark-bg/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="nerds-logo-text text-3xl tracking-tighter">
              <span className="text-nerds-blue">nerds</span>
              <span className="text-nerds-blue">r</span>
              <span className="text-nerds-lime inline-flex tracking-tighter" style={{ letterSpacing: '-0.1em' }}>oo</span>
              <span className="text-nerds-blue">m</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
             <a 
               href="#timeline" 
               onClick={(e) => scrollToSection(e, 'timeline')}
               className="text-sm font-medium hover:text-nerds-lime transition-colors cursor-pointer"
             >
               TIMELINE
             </a>
             <a 
               href="#tracks" 
               onClick={(e) => scrollToSection(e, 'tracks')}
               className="text-sm font-medium hover:text-nerds-lime transition-colors cursor-pointer"
             >
               TRACKS
             </a>
             <a 
               href="#rewards" 
               onClick={(e) => scrollToSection(e, 'rewards')}
               className="text-sm font-medium hover:text-nerds-lime transition-colors cursor-pointer"
             >
               REWARDS
             </a>
             <a 
               href={WHATSAPP_LINK} 
               target="_blank" 
               rel="noreferrer" 
               className="flex items-center gap-2 px-5 py-2 bg-nerds-lime text-nerds-primary font-bold text-sm hover:bg-white hover:scale-105 transition-all rounded-full cursor-pointer shadow-lg hover:shadow-nerds-lime/50"
             >
               <MessageCircle className="w-4 h-4" /> JOIN GROUP
             </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 relative">
          <div className="text-center max-w-5xl mx-auto space-y-6">
            
            {/* MAIN NERDS ROOM LOGO */}
            <div className="flex flex-col items-center justify-center mb-6 select-none animate-float">
              <div className="flex items-baseline leading-none">
                <span className="text-[7rem] sm:text-[9rem] md:text-[11rem] font-bold text-nerds-primary tracking-tighter font-sans">nr</span>
                <span className="text-[7rem] sm:text-[9rem] md:text-[11rem] font-bold text-nerds-lime tracking-tighter font-sans -ml-2 sm:-ml-4">oo</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-nerds-primary tracking-tight font-sans -mt-3 sm:-mt-6">
                nerds room
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-nerds-blue/30 bg-nerds-primary/20 text-nerds-sky text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-nerds-lime animate-pulse"></span>
              NOV 9 - NOV 23 • ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              NERDS <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-nerds-blue to-nerds-primary">VIBEATHON</span> 
              <span className="text-nerds-lime ml-2">'25</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-nerds-blue/80 font-light max-w-3xl mx-auto leading-relaxed">
              14-day AI Build Festival where college students create usable projects <strong className="text-white font-bold">only by prompting</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-nerds-lime text-nerds-primary font-bold text-lg hover:bg-nerds-sky hover:scale-105 hover:shadow-[0_0_45px_rgba(101,214,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl shadow-[0_0_30px_rgba(178,232,0,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                JOIN WHATSAPP (MANDATORY)
              </a>
              <a 
                href={FORM_LINK}
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-nerds-blue/30 bg-nerds-primary/10 text-white font-bold text-lg hover:border-nerds-lime hover:bg-nerds-primary/30 hover:scale-105 hover:shadow-[0_0_25px_rgba(178,232,0,0.2)] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl"
              >
                REGISTER NOW <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy / Intro */}
        <section id="about" className="py-20 bg-card-bg border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              We’re not doing <span className="line-through text-gray-500 decoration-nerds-orange">old syllabus coding</span> here.
            </h2>
            <p className="text-2xl md:text-3xl font-light text-nerds-sky leading-relaxed">
              We’re doing <span className="text-nerds-lime font-bold bg-nerds-lime/10 px-2 rounded">next-generation creative building</span>.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { label: "Participants", value: "Students ONLY" },
                 { label: "Team Size", value: "1 - 4 Members" },
                 { label: "Tools", value: "Unlimited AI" },
               ].map((stat, i) => (
                 <div key={i} className="p-6 rounded-2xl bg-dark-bg border border-white/10 hover:border-nerds-lime hover:bg-white/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(178,232,0,0.2)] transition-all duration-300">
                   <div className="text-nerds-blue text-sm font-mono uppercase tracking-wider mb-2">{stat.label}</div>
                   <div className="text-2xl font-bold text-white">{stat.value}</div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Mandatory Group */}
        <section className="py-16 bg-nerds-primary/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
             <div className="inline-block p-3 bg-nerds-orange/20 rounded-full mb-4">
               <Zap className="w-6 h-6 text-nerds-orange" />
             </div>
             <h2 className="text-2xl font-bold mb-4">COMMUNICATION HQ</h2>
             <p className="text-gray-300 mb-8">All updates, sprint tasks, guidelines, and submissions happen <strong className="text-white">ONLY</strong> in the official group.</p>
             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-nerds-lime hover:text-white font-mono underline underline-offset-4 decoration-nerds-lime/50">
               {WHATSAPP_LINK} <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </section>

        {/* How it Works */}
        <section id="timeline" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="mb-16 text-center md:text-left">
             <h2 className="text-4xl font-black text-white mb-4">HOW IT WORKS</h2>
             <p className="text-nerds-blue text-xl">6 Build Sprints | 14 Days | Unlimited Creativity</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-card-bg border border-white/10 hover:border-nerds-blue/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-nerds-blue/10 transition-all duration-300">
                   <h3 className="text-2xl font-bold text-nerds-lime mb-2">Sprints 1-5</h3>
                   <p className="text-gray-400 mb-4 font-mono">Build & Ship 1 mini-project every 48 hours.</p>
                   <div className="flex items-center gap-2 text-sm text-nerds-sky">
                     <CheckCircle2 className="w-4 h-4" /> 5 Mini Projects Total
                   </div>
                </div>
                
                <div className="p-8 rounded-2xl bg-gradient-to-br from-nerds-primary/40 to-card-bg border border-nerds-primary hover:border-nerds-lime hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(178,232,0,0.15)] transition-all duration-300 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-3 bg-nerds-lime text-nerds-primary font-bold text-xs font-mono">FINALE</div>
                   <h3 className="text-2xl font-bold text-white mb-2">Sprint 6</h3>
                   <p className="text-gray-300 mb-4">The 4-Day Website Build Sprint.</p>
                   <p className="text-sm text-gray-400 mb-4">Build the Official Nerds Room Website using the Brand Kit.</p>
                   
                   <div className="p-4 bg-black/40 rounded border border-white/5 text-sm text-gray-400 font-mono">
                     References: buildclub.ai • hackclub.com
                   </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               <Timeline />
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section id="tracks" className="py-24 bg-dark-bg border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
               <h2 className="text-4xl font-black text-white mb-6">CHOOSE YOUR TRACK</h2>
               <p className="text-gray-400 max-w-2xl">
                 Whether you're a web wizard or want to vibe-code on mobile, we've got you covered.
               </p>
            </div>
            <Tracks />
          </div>
        </section>

        {/* Setup */}
        <section className="py-24 max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-nerds-teal" />
            SETUP & ACCESS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-nerds-sky mb-6">Step 1: Enterprise Access</h3>
              <div className="space-y-4">
                <a href={RUNANYWHERE_REPO} target="_blank" rel="noreferrer" className="block p-4 bg-black rounded-xl border border-white/10 hover:border-nerds-lime hover:scale-[1.02] hover:shadow-md transition-all duration-300 group">
                   <div className="flex items-center justify-between mb-1">
                     <span className="font-mono text-sm text-gray-400 group-hover:text-white">RunAnywhere SDKs</span>
                     <Github className="w-4 h-4 text-gray-500 group-hover:text-nerds-lime" />
                   </div>
                   <div className="font-bold text-white">Star the Repo</div>
                </a>
                <a href={FORM_LINK} target="_blank" rel="noreferrer" className="block p-4 bg-black rounded-xl border border-white/10 hover:border-nerds-lime hover:scale-[1.02] hover:shadow-md transition-all duration-300 group">
                   <div className="flex items-center justify-between mb-1">
                     <span className="font-mono text-sm text-gray-400 group-hover:text-white">Registration</span>
                     <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-nerds-lime" />
                   </div>
                   <div className="font-bold text-white">Fill Entry Form</div>
                </a>
              </div>
            </div>

            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-nerds-orange mb-6">Step 2: Environment</h3>
              <ul className="space-y-4">
                {[
                  "Install Android Studio",
                  "Install Firebender Plugin (JetBrains)",
                  "Clone Hackss Repo"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-mono text-nerds-orange border border-white/10">{i+1}</div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5">
                <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                   <MessageCircle className="w-4 h-4" /> Mentor Support on Discord
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards */}
        <section id="rewards" className="py-24 bg-gradient-to-b from-card-bg to-dark-bg border-t border-white/5">
           <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl font-black text-center mb-16">REWARDS & RECOGNITION</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                 <div className="p-6 bg-dark-bg border border-nerds-lime/30 rounded-2xl hover:bg-nerds-lime/10 hover:-translate-y-2 transition-all duration-300 group text-center">
                    <div className="w-12 h-12 mx-auto bg-nerds-lime/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Trophy className="w-6 h-6 text-nerds-lime" />
                    </div>
                    <h3 className="font-bold text-white mb-2">Cash Prizes</h3>
                    <p className="text-sm text-gray-400">Announced Soon</p>
                 </div>

                 <div className="p-6 bg-dark-bg border border-nerds-sky/30 rounded-2xl hover:bg-nerds-sky/10 hover:-translate-y-2 transition-all duration-300 group text-center">
                    <div className="w-12 h-12 mx-auto bg-nerds-sky/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-nerds-sky" />
                    </div>
                    <h3 className="font-bold text-white mb-2">Firebender Perk</h3>
                    <p className="text-sm text-gray-400">1 Month Enterprise Access</p>
                 </div>

                 <div className="p-6 bg-dark-bg border border-nerds-orange/30 rounded-2xl hover:bg-nerds-orange/10 hover:-translate-y-2 transition-all duration-300 group text-center">
                    <div className="w-12 h-12 mx-auto bg-nerds-orange/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-nerds-orange" />
                    </div>
                    <h3 className="font-bold text-white mb-2">Internships</h3>
                    <p className="text-sm text-gray-400">Fast-track Interviews</p>
                 </div>
              </div>

              {/* Social Media Star Section */}
              <div className="bg-gradient-to-r from-nerds-primary/10 to-nerds-blue/10 border border-nerds-blue/30 rounded-3xl p-8 md:p-12 relative overflow-hidden hover:border-nerds-blue/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nerds-blue/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-nerds-blue/20 rounded-full flex items-center justify-center border border-nerds-blue/50">
                        <Video className="w-8 h-8 text-nerds-blue" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Social Media Star + Extra Marks</h3>
                        <p className="text-nerds-sky mb-6 font-mono">Earn bonus recognition for clarity & creativity.</p>
                        
                        <div className="grid sm:grid-cols-3 gap-4 text-left">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-nerds-blue/20 flex items-center justify-center text-nerds-blue font-bold text-xs mt-0.5">1</div>
                                <p className="text-sm text-gray-300">Follow <strong className="text-white">Nerds Room</strong> on LinkedIn</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-nerds-blue/20 flex items-center justify-center text-nerds-blue font-bold text-xs mt-0.5">2</div>
                                <p className="text-sm text-gray-300">Post your project/demo</p>
                            </div>
                             <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-nerds-blue/20 flex items-center justify-center text-nerds-blue font-bold text-xs mt-0.5">3</div>
                                <p className="text-sm text-gray-300">Tag: <span className="text-nerds-lime">Nerds Room + RunAnywhere + Firebender</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="px-6 py-3 bg-nerds-blue text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
                            Visit LinkedIn <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex flex-col items-center md:items-start">
               <div className="nerds-logo-text text-2xl mb-2">
                  <span className="text-nerds-blue">nerds</span><span className="text-nerds-lime" style={{ letterSpacing: '-0.1em' }}>oo</span><span className="text-nerds-blue">m</span>
               </div>
               <p className="text-gray-500 text-sm">© 2025 NERDS VIBEATHON</p>
             </div>
             
             <div className="flex gap-6">
               <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-nerds-lime transition-colors">WhatsApp</a>
               <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-nerds-sky transition-colors">Discord</a>
               <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-nerds-blue transition-colors">LinkedIn</a>
             </div>
          </div>
        </footer>
      </main>

      <AIChatModal />
    </div>
  );
};

export default App;