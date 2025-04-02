import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

interface RouteProps {
  route: {
    from: string;
    to: string;
    cargo: string;
    capacity: string;
  };
  index: number;
}

export function RouteCard({ route, index }: RouteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-slate-700 rounded-lg p-6 mb-4 relative overflow-hidden group"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {route.from} → {route.to}
          </h3>
          <p className="text-gray-300">{route.cargo}</p>
          <p className="text-gray-400 mt-2">Capacity: {route.capacity}</p>
        </div>
        
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-orange-500"
        >
          <Truck className="w-8 h-8" />
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-orange-500"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, delay: index * 0.2 }}
      />
    </motion.div>
  );
}