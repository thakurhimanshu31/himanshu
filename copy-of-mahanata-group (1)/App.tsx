import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Colonies from './components/Colonies';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-amber-500/30">
      <Header />
      <Hero />
      <Colonies />
      <Footer />
    </main>
  );
};

export default App;