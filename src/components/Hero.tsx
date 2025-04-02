import { motion } from 'framer-motion';
import { useState } from 'react';
import { TruckFeatures } from './TruckFeatures';
import { QuoteForm } from './QuoteForm';
import { fadeIn } from '../utils/animations';

export function Hero() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [showTrackingInput, setShowTrackingInput] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrackShipment = (e: React.FormEvent) => {
    e.preventDefault();
    const element = document.getElementById('tracking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set the tracking number in the tracking component
      const trackingInput = document.querySelector('#tracking input') as HTMLInputElement;
      if (trackingInput) {
        trackingInput.value = trackingNumber;
        trackingInput.focus();
      }
    }
  };

  return (
    <div id= "AboutUs" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <img 
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
          alt="Industrial Truck Fleet"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-white mb-8 text-right "
        >
          Reliable Material
          <span className="block text-orange-500 text-right">Transportation</span>
        </motion.h1>

        <div className="flex justify-end">
  <motion.p
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.2 }}
    className="block text-xl text-gray-200 max-w-3xl mb-12 ml-10"
  >
    A leading transport company in Ahmedabad providing reliable transportation services across India, Nepal, and Bangladesh, regardless of size or weight.
  </motion.p>
</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-end gap-4"
        >
          <button 
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Get a Quote
          </button>
          {!showTrackingInput ? (
            <button
              onClick={() => setShowTrackingInput(true)}
              className="bg-white/10 backdrop-blur-lg text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors justify-end"
            >
              Track Shipment
            </button>
          ) : (
            <form onSubmit={handleTrackShipment} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="bg-white/10 backdrop-blur-lg text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Track
              </button>
            </form>
          )}
        </motion.div>

        <TruckFeatures />
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </div>
  );
}