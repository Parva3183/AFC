import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  name: string;
}

interface Route {
  from: Point;
  to: Point;
}

interface RouteMapProps {
  routes: Route[];
  title: string;
}

export function RouteMap({ routes, title }: RouteMapProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="relative aspect-[4/5]">
        <svg viewBox="0 0 300 400" className="w-full h-full">
          {/* India Map SVG Path */}
          <path
            d="M115,50 L185,50 C200,50 210,60 220,80 L240,120 C250,140 250,160 240,180 L220,220 C210,240 200,250 185,250 L115,250 C100,250 90,240 80,220 L60,180 C50,160 50,140 60,120 L80,80 C90,60 100,50 115,50 Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="2"
          />
          
          {/* State Borders */}
          <path
            d="M150,50 L150,250 M115,150 L185,150 M100,100 L200,100 M100,200 L200,200"
            stroke="#334155"
            strokeWidth="1"
            opacity="0.5"
          />

          {routes.map((route, index) => (
            <g key={index}>
              {/* Curved route path */}
              <motion.path
                d={`M ${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x) / 2} 
                    ${Math.min(route.from.y, route.to.y) - 20} ${route.to.x} ${route.to.y}`}
                stroke="#f97316"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: index * 0.5 }}
              />
              
              {/* Animated dot */}
              <motion.circle
                r="3"
                fill="#f97316"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  x: [route.from.x, route.to.x],
                  y: [route.from.y, route.to.y],
                }}
                transition={{ 
                  duration: 4,
                  delay: index * 0.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* City markers */}
              <motion.circle
                cx={route.from.x}
                cy={route.from.y}
                r="4"
                fill="#f97316"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.5 }}
              />
              <motion.circle
                cx={route.to.x}
                cy={route.to.y}
                r="4"
                fill="#f97316"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.5 + 1 }}
              />
              
              {/* City labels */}
              <text
                x={route.from.x + 8}
                y={route.from.y + 4}
                className="text-xs fill-white font-medium"
              >
                {route.from.name}
              </text>
              <text
                x={route.to.x + 8}
                y={route.to.y + 4}
                className="text-xs fill-white font-medium"
              >
                {route.to.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}