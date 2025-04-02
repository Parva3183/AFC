import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

interface Route {
  id: number;
  from: string;
  to: string;
}

interface IndiaMapProps {
  routes: Route[];
  isInternational?: boolean;
}

// City coordinates mapping
const cityCoordinates: Record<string, [number, number]> = {
  "Delhi": [80, 90],
  "Mumbai": [70, 160],
  "Bangalore": [90, 180],
  "Chennai": [110, 190],
  "Kolkata": [130, 130],
  "Hyderabad": [100, 160],
  "Ahmedabad": [75, 120],
  "Kathmandu": [120, 70],
  "Dhaka": [150, 120]
};

export function IndiaMap({ routes, isInternational = false }: IndiaMapProps) {
  const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);

  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <svg
        viewBox="0 0 200 300"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0px 0px 8px rgba(249, 115, 22, 0.2))' }}
      >
        {/* India outline */}
        <path
          d="M60,40 C60,40 70,30 90,30 C110,30 120,35 130,40 
             C140,45 150,55 160,70 C170,85 175,100 175,120
             C175,140 170,160 160,180 C150,200 140,210 130,220
             C120,230 110,235 100,240 C90,245 80,245 70,240
             C60,235 50,225 45,210 C40,195 35,180 35,160
             C35,140 40,120 45,100 C50,80 55,60 60,40Z"
          fill="#1e293b"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* State borders - simplified */}
        <g stroke="#334155" strokeWidth="1" opacity="0.5">
          <path d="M60,100 L140,100" />
          <path d="M70,150 L130,150" />
          <path d="M80,200 L120,200" />
          <path d="M100,40 L100,240" />
        </g>

        {/* Routes */}
        {routes.map((route) => {
          const fromCoords = cityCoordinates[route.from];
          const toCoords = cityCoordinates[route.to];
          
          if (!fromCoords || !toCoords) return null;

          const [x1, y1] = fromCoords;
          const [x2, y2] = toCoords;
          
          // Calculate control points for curved paths
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          const curvature = 20; // Adjust this value to change curve intensity
          
          // Calculate perpendicular offset for curve control point
          const dx = x2 - x1;
          const dy = y2 - y1;
          const norm = Math.sqrt(dx * dx + dy * dy);
          const offX = -dy / norm * curvature;
          const offY = dx / norm * curvature;

          const path = `M${x1},${y1} Q${midX + offX},${midY + offY} ${x2},${y2}`;

          const isHovered = hoveredRoute === route.id;

          return (
            <g key={route.id} onMouseEnter={() => setHoveredRoute(route.id)} onMouseLeave={() => setHoveredRoute(null)}>
              <motion.path
                d={path}
                stroke={isHovered ? "#f97316" : "#475569"}
                strokeWidth={isHovered ? "3" : "2"}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {isHovered && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.circle
                    cx={x1}
                    cy={y1}
                    r="4"
                    fill="#f97316"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                  <motion.circle
                    cx={x2}
                    cy={y2}
                    r="4"
                    fill="#f97316"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                  <motion.g
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ offsetPath: `path("${path}")` }}
                  >
                    <Truck className="w-4 h-4 text-orange-500" />
                  </motion.g>
                </motion.g>
              )}
              
              <text
                x={x1}
                y={y1 - 5}
                className="text-xs fill-gray-300"
                textAnchor="middle"
              >
                {route.from}
              </text>
              <text
                x={x2}
                y={y2 - 5}
                className="text-xs fill-gray-300"
                textAnchor="middle"
              >
                {route.to}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}