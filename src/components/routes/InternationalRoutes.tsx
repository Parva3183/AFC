import { motion } from 'framer-motion';
import { RouteCard } from './RouteCard';
import { fadeIn } from '../../utils/animations';

const internationalRoutes = [
  { 
    id: 1, 
    from: "Delhi", 
    to: "Kathmandu", 
    cargo: "Industrial Equipment",
    capacity: "40 tonnes" 
  },
  { 
    id: 2, 
    from: "Kolkata", 
    to: "Dhaka", 
    cargo: "Manufacturing Materials",
    capacity: "30 tonnes"
  },
  { 
    id: 3, 
    from: "Mumbai", 
    to: "Kathmandu", 
    cargo: "Construction Materials",
    capacity: "35 tonnes"
  },
  {
    id: 4,
    from: "Ahmedabad",
    to: "Dhaka",
    cargo: "Heavy Machinery",
    capacity: "40 tonnes"
  }
];

export function InternationalRoutes() {
  return (
    <div id="International" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">International Routes</h2>
          <p className="text-gray-400">Cross-border transportation to Nepal and Bangladesh</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internationalRoutes.map((route, index) => (
            <RouteCard key={route.id} route={route} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}