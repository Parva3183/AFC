import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="text-orange-500"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <motion.path
        d="M8 24 L24 8 L40 24 L32 24 L24 16 L16 24 Z"
        fill="url(#logoGradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M16 28 L24 20 L32 28 L28 28 L24 24 L20 28 Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx="24"
        cy="32"
        r="4"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </motion.svg>
  );
}