import { motion } from 'framer-motion';
import { useState } from 'react';
import { Logo } from './Logo';
import { QuoteForm } from './QuoteForm';

export function Navbar() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full z-50 bg-black/20 backdrop-blur-lg"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img src="https://i.postimg.cc/05Z9DVvG/afc.png" alt="Logo" className = "w-11 h-11"/>
              <span className="text-xl font-bold text-white">Alok Freight Carriers</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' },
                { name: 'Tracking', id: 'tracking' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Request Quote
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </>
  );
}