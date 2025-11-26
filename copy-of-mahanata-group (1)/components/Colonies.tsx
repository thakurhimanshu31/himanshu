import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Colony } from '../types';

const colonies: Colony[] = [
  { 
    id: 1, 
    name: "Rudraaksh Aangan", 
    description: "Khushiyon ki fulwari mein basaiye apna ghar aangan.\n\nSirf plot nahi, yeh hai aapka Pride.\n\nExperience a luxury lifestyle located centrally yet close to nature ('Shahar ke bicho-bich prakriti ke paas').\n\n• 5 Mins from Arvindo Hospital\n• 10 Mins from Shishukunj School\n• Near TCS & Infosys Super Corridor\n• Located on Paliya Main Road (Indore-Ujjain Highway)\n\nPlots Available: 600 - 1200 Sq.Ft.\nMarketed by SOS Infrabulls.", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", 
    features: ["Grand Entrance Gate", "Beautiful Temple", "Lush Landscape Gardens", "Kids Play Zone", "24/7 Security", "Basketball Court", "Concrete Roads", "Covered Campus"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", // Grand Entrance
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000&auto=format&fit=crop", // Temple View
      "https://images.unsplash.com/photo-1558036117-15db5275252b?q=80&w=1000&auto=format&fit=crop", // Landscape Garden
      "https://images.unsplash.com/photo-1596489397635-429944d1566f?q=80&w=1000&auto=format&fit=crop", // Happy Family/Lifestyle
      "https://images.unsplash.com/photo-1532549248232-a5e623f993d5?q=80&w=1000&auto=format&fit=crop", // Site Layout Plan (Representative)
      "https://images.unsplash.com/photo-1519861531473-92002639313e?q=80&w=1000&auto=format&fit=crop", // Basketball/Amenities
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop", // Kids Play Area
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000&auto=format&fit=crop", // Wide Roads
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop"  // Luxury Villa Concept
    ]
  },
  { 
    id: 2, 
    name: "Tulip Park ", 
    description: "Sky-high luxury with panoramic city views.", 
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", 
    features: ["Rooftop Pool", "Private Elevators"],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  { 
    id: 3, 
    name: "Golden Enclave", 
    description: "Exclusive gated community for the elite.", 
    image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=1000&auto=format&fit=crop", 
    features: ["24/7 Concierge", "Golf Course"],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  { 
    id: 4, 
    name: "Emerald Bay", 
    description: "Waterfront serenity redefining peace.", 
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", 
    features: ["Private Docks", "Beach Access"],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  { 
    id: 5, 
    name: "Platinum Towers", 
    description: "The pinnacle of urban sophistication.", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop", 
    features: ["Helipad", "Smart Security"],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop"
    ]
  },
];

const Colonies: React.FC = () => {
  const [selectedColony, setSelectedColony] = useState<Colony | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedColony) {
      setActiveImage(selectedColony.image);
    }
  }, [selectedColony]);

  return (
    <section id="colonies" className="py-24 px-6 md:px-12 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Premium <span className="text-amber-400">Colonies</span></h3>
          <p className="text-white/60">Select a location to explore details.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {colonies.map((colony, index) => (
            <motion.button
              key={colony.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 0px 20px rgba(251, 191, 36, 0.3)"
              }}
              onClick={() => setSelectedColony(colony)}
              className="h-40 md:h-56 rounded-2xl border border-white/10 flex flex-col items-center justify-center group relative overflow-hidden text-center shadow-lg bg-slate-800"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={colony.image} 
                  alt={colony.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10" />
              </div>

              {/* Text Content */}
              <div className="relative z-20 w-full p-2">
                <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-amber-400 transition-colors drop-shadow-lg">
                  {colony.name}
                </h4>
                <span className="inline-block mt-2 text-xs text-amber-200/80 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 uppercase tracking-widest font-semibold">
                  View Details
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail Modal - Slide-in Drawer Style */}
      <AnimatePresence>
        {selectedColony && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedColony(null)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 w-full md:w-[500px] lg:w-[600px] h-full bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedColony(null)} 
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white/80 hover:bg-white hover:text-slate-900 transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>

              {/* Image Header */}
              <div className="relative h-64 md:h-80 shrink-0 bg-slate-800">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={activeImage || selectedColony.image} 
                  alt={selectedColony.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8 pointer-events-none">
                  <h3 className="text-3xl md:text-4xl font-serif text-white font-bold drop-shadow-lg leading-tight">
                    {selectedColony.name}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light border-l-4 border-amber-500 pl-6 py-1 whitespace-pre-line">
                  {selectedColony.description}
                </p>
                
                <div className="space-y-6 mb-8">
                  <h5 className="text-sm font-bold text-amber-400 uppercase tracking-widest border-b border-white/10 pb-3">
                    Exclusive Features
                  </h5>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedColony.features.map(f => (
                      <li key={f} className="flex items-center gap-4 text-white/90 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-amber-500/30 transition-colors group">
                        <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery Grid */}
                {selectedColony.gallery && selectedColony.gallery.length > 0 && (
                  <div className="mb-8">
                    <h5 className="text-sm font-bold text-amber-400 uppercase tracking-widest border-b border-white/10 pb-3 mb-4">
                      Gallery
                    </h5>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedColony.gallery.map((img, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setActiveImage(img)}
                          className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${activeImage === img ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-transparent hover:border-white/30'}`}
                        >
                          <img 
                            src={img} 
                            alt={`${selectedColony.name} view ${idx + 1}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-white/10">
                  <button className="w-full py-4 bg-amber-500 text-slate-900 font-bold uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-transform">
                    Request Private Viewing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Colonies;