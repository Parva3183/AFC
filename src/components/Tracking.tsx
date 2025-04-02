import { motion } from 'framer-motion';
import { Search, Package, Truck } from 'lucide-react';
import { useState } from 'react';
import { fadeIn } from '../utils/animations';

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<null | {
    status: string;
    location: string;
    lastUpdate: string;
    estimatedDelivery: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking result
    setTrackingResult({
      status: 'In Transit',
      location: 'Ahmedabad, Gujarat',
      lastUpdate: new Date().toLocaleString(),
      estimatedDelivery: '2024-03-25'
    });
  };

  return (
    <div className="bg-slate-800 py-24" id="tracking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Track Your Shipment</h2>
          <p className="text-gray-400">Enter your tracking number to get real-time updates</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-xl p-8 border border-slate-700"
          >
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number"
                  className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Track
                </motion.button>
              </div>
            </form>

            {trackingResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-white font-medium">{trackingResult.status}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Tracking Number</p>
                    <p className="text-white font-medium">{trackingNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <Truck className="w-6 h-6 text-orange-500 mb-2" />
                    <p className="text-sm text-gray-400">Current Location</p>
                    <p className="text-white font-medium">{trackingResult.location}</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <p className="text-sm text-gray-400">Last Updated</p>
                    <p className="text-white font-medium">{trackingResult.lastUpdate}</p>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <p className="text-sm text-gray-400">Estimated Delivery</p>
                    <p className="text-white font-medium">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}