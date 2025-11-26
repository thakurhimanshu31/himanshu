import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Instagram } from 'lucide-react';

interface ProfilePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-80 bg-slate-900/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-white relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/60 hover:text-white">
              <X size={20} />
            </button>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-amber-500 overflow-hidden mb-4 shadow-lg shadow-amber-500/20">
                {/* Replaced with a placeholder or the actual uploaded image URL if available */}
                <img src="https://scontent.frpr1-2.fna.fbcdn.net/v/t39.30808-6/549631797_4000370260273745_1046729583109327805_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FvjXhbapibUQ7kNvwFbaPbv&_nc_oc=AdkMK5ZgEfTLbNFCt1zx0hxbAi3XcUqyPx-SERxRvnQ8nfQjx1Hs0GzfR3z2IuX8EG0dBf0-sDu_mEmqr07kJ8wQ&_nc_zt=23&_nc_ht=scontent.frpr1-2.fna&_nc_gid=pjVrQBOCGNBkFqacdHKYKg&oh=00_Afggx4TjwziErHRfg7on2SHxUzm2SEQw3nLo6yEEJBqD3g&oe=692B8D07" alt="VEERENDRA SINGH PARTE" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-serif text-amber-400 text-center leading-tight">VEERENDRA SINGH PARTE</h3>
              <p className="text-sm text-white/70 mb-6">Founder & CEO</p>
              
              <div className="w-full space-y-3">
                <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/10">
                  <Phone size={16} className="text-amber-400" />
                  <span>+91 9893862775</span>
                </div>
                <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                  <Mail size={16} className="text-amber-400 shrink-0" />
                  <span className="truncate">virendraparte591@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <motion.a 
                  href="https://wa.me/7746991555"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} 
                  className="p-3 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center justify-center cursor-pointer"
                >
                   {/* WhatsApp SVG Icon */}
                   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                   </svg>
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/veerendra_official_real_estate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} 
                  className="p-3 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center cursor-pointer"
                >
                   <Instagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfilePopup;