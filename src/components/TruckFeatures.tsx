import { motion } from 'framer-motion';
import { Truck, Weight, Clock, Shield } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const features = [
  { 
    icon: Truck, 
    label: "Heavy Hauling",
    description: "Specialized in multi-axle transportation"
  },
  { 
    icon: Weight, 
    label: "Load Capacity",
    description: "Up to 100 tonnes gross weight"
  },
  { 
    icon: Clock, 
    label: "24/7 Service",
    description: "Round-the-clock logistics support"
  },
  { 
    icon: Shield, 
    label: "Secure Transit",
    description: "Real-time tracking & monitoring"
  }
];

export function TruckFeatures() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.label}
          variants={fadeInUp}
          custom={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
        >
          <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{feature.label}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}