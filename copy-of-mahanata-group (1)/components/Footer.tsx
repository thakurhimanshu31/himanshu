import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold text-white mb-2">MAHANATA <span className="text-amber-400">GROUP</span></h2>
          <p className="text-white/40 text-sm mb-4">Building the future, one masterpiece at a time.</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-sm">
            <MapPin size={16} className="text-amber-400" />
            <span>Shagun Tower Vijay Nagar</span>
          </div>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-white/60 hover:text-amber-400 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-white/60 hover:text-amber-400 transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-white/60 hover:text-amber-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-white/60 hover:text-amber-400 transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} Mahanata Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;