import { motion } from 'framer-motion';

interface RouteInfoProps {
  route: {
    name: string;
    distance: string;
    from: { city: string };
    to: { city: string };
  };
}

export function RouteInfo({ route }: RouteInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-slate-700 rounded-lg p-4 mb-2"
    >
      <h3 className="text-lg font-semibold text-white">{route.name}</h3>
      <p className="text-gray-300 text-sm">Distance: {route.distance}</p>
      <div className="text-gray-400 text-sm mt-1">
        <span>{route.from.city}</span>
        <span className="mx-2">→</span>
        <span>{route.to.city}</span>
      </div>
    </motion.div>
  );
}