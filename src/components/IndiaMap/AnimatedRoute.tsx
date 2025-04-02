import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

interface AnimatedRouteProps {
  path: string;
  isActive: boolean;
}

export function AnimatedRoute({ path, isActive }: AnimatedRouteProps) {
  return (
    <>
      <motion.path
        d={path}
        stroke={isActive ? "#f97316" : "#475569"}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {isActive && (
        <motion.g
          initial={{ offsetdistance: "0%" }}
          animate={{ offsetdistance: "100%" }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          style={{ offsetPath: `path("${path}")` }}
        >
          <Truck className="w-4 h-4 text-orange-500" />
        </motion.g>
      )}
    </>
  );
}