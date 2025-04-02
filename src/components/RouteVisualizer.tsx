import { motion } from 'framer-motion';

const pathVariants = {
  initial: { pathLength: 0 },
  animate: { 
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

export function RouteVisualizer() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-auto"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#F97316"
            />
          </marker>
        </defs>
        <motion.path
          d="M40,40 C60,80 140,80 160,160"
          stroke="#F97316"
          strokeWidth="4"
          fill="none"
          markerEnd="url(#arrowhead)"
          variants={pathVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
        <motion.circle
          cx="40"
          cy="40"
          r="8"
          fill="#F97316"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.circle
          cx="160"
          cy="160"
          r="8"
          fill="#F97316"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}