import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import { RouteList } from './RouteList';

const routes = [
  { 
    id: 1, 
    from: "Delhi", 
    to: "Kathmandu, Nepal", 
    cargo: "Industrial Equipment",
    capacity: "40 tonnes" 
  },
  { 
    id: 2, 
    from: "Kolkata", 
    to: "Dhaka, Bangladesh", 
    cargo: "Manufacturing Materials",
    capacity: "30 tonnes"
  },
  { 
    id: 3, 
    from: "Mumbai", 
    to: "Kathmandu, Nepal", 
    cargo: "Construction Materials",
    capacity: "35 tonnes"
  },
  { 
    id: 4, 
    from: "Chennai", 
    to: "Chittagong, Bangladesh", 
    cargo: "Industrial Goods",
    capacity: "25 tonnes"
  },
  {
    id: 5,
    from: "Hyderabad",
    to: "Dhaka, Bangladesh",
    cargo: "Heavy Machinery",
    capacity: "50 tonnes"
  }
];

export function ServiceMap() {
  return (
    <div className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">International Routes</h2>
          <p className="text-gray-400">Specialized routes for cross-border transportation to Nepal and Bangladesh</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <RouteList routes={routes} />
        </div>
      </div>
    </div>
  );
}