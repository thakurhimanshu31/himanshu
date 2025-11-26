import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Loader2, Download } from 'lucide-react';
import { generateDesignImage } from '../services/geminiService';
import { ImageSize } from '../types';
import Button from './Button';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>('1K');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setGeneratedImage(null);
    try {
      const img = await generateDesignImage(prompt, size);
      setGeneratedImage(img);
    } catch (e) {
      alert("Failed to generate image. Please ensure you are using a supported key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
            <Wand2 size={14} /> AI Powered
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-4">Design Your Dream Space</h3>
          <p className="text-white/60">Visualize your future home with our AI design studio.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Describe your vision</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., A modern living room with floor-to-ceiling windows, gold accents, and a marble fireplace."
                  className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Image Quality</label>
                <div className="flex gap-4">
                  {(['1K', '2K', '4K'] as ImageSize[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex-1 py-3 rounded-xl border font-semibold transition-all ${
                        size === s 
                          ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-lg shadow-amber-500/20' 
                          : 'bg-slate-800 border-slate-700 text-white/50 hover:bg-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isLoading || !prompt}
                className="w-full flex justify-center"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'Generate Concept'}
              </Button>
            </div>
          </div>

          {/* Result */}
          <div className="relative aspect-video bg-slate-900 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
            {isLoading ? (
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-amber-500 animate-spin mx-auto mb-4" />
                <p className="text-white/50 animate-pulse">Dreaming up your space...</p>
              </div>
            ) : generatedImage ? (
              <div className="relative group w-full h-full">
                <img src={generatedImage} alt="Generated Design" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={generatedImage} download="mahanata-design.png" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                    <Download size={18} /> Download
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="text-white/20" size={32} />
                </div>
                <p className="text-white/30">Your masterpiece will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;