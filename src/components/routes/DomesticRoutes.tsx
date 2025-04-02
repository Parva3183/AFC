import { motion } from 'framer-motion';
import { RouteCard } from './RouteCard';
import { fadeIn } from '../../utils/animations';

const domesticRoutes = [
  { 
    id: 1, 
    from: "Ahmedabad", 
    to: "Pune", 
    cargo: "Industrial Equipment",
    capacity: "40 tonnes" 
  },
  { 
    id: 2, 
    from: "Bangalore", 
    to: "Chennai", 
    cargo: "Manufacturing Materials",
    capacity: "30 tonnes"
  },
  { 
    id: 3, 
    from: "Jaipur", 
    to: "Lucknow", 
    cargo: "Construction Materials",
    capacity: "35 tonnes"
  },
  {
    id: 4,
    from: "Kashmir",
    to: "Kolkata",
    cargo: "Heavy Machinery",
    capacity: "45 tonnes"
  }
];

export function DomesticRoutes() {
  return (
    <div className="bg-slate-800 py-24" id="Domestic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Domestic Routes</h2>
          <p className="text-gray-400">Major transportation corridors across India</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {domesticRoutes.map((route, index) => (
            <RouteCard key={route.id} route={route} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}