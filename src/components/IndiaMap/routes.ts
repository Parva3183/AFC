export const transportRoutes = [
  {
    id: 1,
    name: "Delhi-Mumbai",
    from: { city: "Delhi", coordinates: "75,30" },
    to: { city: "Mumbai", coordinates: "45,120" },
    distance: "1,400 km",
    path: "M75,30 Q60,75 45,120"
  },
  {
    id: 2,
    name: "Mumbai-Bangalore",
    from: { city: "Mumbai", coordinates: "45,120" },
    to: { city: "Bangalore", coordinates: "70,180" },
    distance: "980 km",
    path: "M45,120 Q57.5,150 70,180"
  },
  {
    id: 3,
    name: "Delhi-Kolkata",
    from: { city: "Delhi", coordinates: "75,30" },
    to: { city: "Kolkata", coordinates: "150,100" },
    distance: "1,500 km",
    path: "M75,30 Q112.5,65 150,100"
  },
  {
    id: 4,
    name: "Chennai-Hyderabad",
    from: { city: "Chennai", coordinates: "100,190" },
    to: { city: "Hyderabad", coordinates: "85,140" },
    distance: "625 km",
    path: "M100,190 Q92.5,165 85,140"
  }
];