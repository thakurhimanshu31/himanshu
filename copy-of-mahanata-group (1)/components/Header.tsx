import React, { useState } from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfilePopup from './ProfilePopup';

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // Removed AI tagline generation to use the specific requested static tagline
  const tagline = "Build by SOS Infrabulls";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-12 transition-all duration-300 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold font-serif tracking-widest text-white"
            >
              MAHANATA <span className="text-amber-400">GROUP</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs md:text-sm text-amber-200/80 uppercase tracking-wider font-light mt-1"
            >
              {tagline}
            </motion.p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsProfileOpen(true)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-400/50 transition-colors"
          >
            <User className="text-white" size={20} />
          </motion.button>
        </div>
      </header>
      <ProfilePopup isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};

export default Header;