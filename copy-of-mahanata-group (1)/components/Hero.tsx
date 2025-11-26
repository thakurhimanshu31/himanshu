import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900 z-10" />
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-4xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Redefining <span className="text-amber-400">Luxury</span> Living
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto"
        >
          Discover curated spaces that blend timeless elegance with modern innovation. Your legacy begins here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button variant="glass" onClick={() => document.getElementById('colonies')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Projects
            <ArrowDown size={16} />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;