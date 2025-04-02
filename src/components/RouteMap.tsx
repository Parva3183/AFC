import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const routes = [
  { id: 1, from: "Downtown", to: "Airport", duration: "30 min" },
  { id: 2, from: "Central Station", to: "Business District", duration: "15 min" },
  { id: 3, from: "Shopping Mall", to: "University", duration: "20 min" },
];

const pathVariants = {
  initial: { pathLength: 0 },
  animate: { 
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

export function RouteMap() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Popular Routes</h2>
          <p className="text-gray-400">Explore our most frequently traveled paths</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-auto"
            >
              <motion.path
                d="M40,40 C60,80 140,80 160,160"
                stroke="#3B82F6"
                strokeWidth="4"
                fill="none"
                variants={pathVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              />
              <motion.circle
                cx="40"
                cy="40"
                r="8"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx="160"
                cy="160"
                r="8"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          <div className="space-y-6">
            {routes.map((route, index) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium text-white">{route.from} → {route.to}</h3>
                      <span className="text-sm text-gray-400">{route.duration}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}