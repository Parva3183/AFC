import { motion } from 'framer-motion';
import { Package, Weight } from 'lucide-react';
import { staggerContainer, fadeInRight } from '../utils/animations';

interface Route {
  id: number;
  from: string;
  to: string;
  cargo: string;
  capacity: string;
}

interface RouteListProps {
  routes: Route[];
}

export function RouteList({ routes }: RouteListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {routes.map((route, index) => (
        <motion.div
          key={route.id}
          variants={fadeInRight}
          custom={index}
          className="bg-slate-800 rounded-lg p-6 border border-slate-700"
        >
          <div className="flex items-start space-x-4">
            <Package className="w-6 h-6 text-orange-500 mt-1" />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium text-white">{route.from} → {route.to}</h3>
                  <p className="text-gray-400 text-sm">{route.cargo}</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Weight className="w-4 h-4 mr-1" />
                  <span className="text-sm">{route.capacity}</span>
                </div>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-orange-500"
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
    </motion.div>
  );
}