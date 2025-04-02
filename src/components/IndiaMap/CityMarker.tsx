import { motion } from 'framer-motion';

interface CityMarkerProps {
  x: number;
  y: number;
  name: string;
}

export function CityMarker({ x, y, name }: CityMarkerProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <motion.circle
        r="4"
        fill="#f97316"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.5 }}
      />
      <motion.text
        x="8"
        y="4"
        className="text-xs fill-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {name}
      </motion.text>
    </g>
  );
}