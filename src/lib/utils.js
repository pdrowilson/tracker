export const games = [
  {
    id: 1,
    name: "Ghost of Tsushima",
    console: "PS5",
    genre: "Ação",
    category: "Exploração 3D",
    startDate: "2025-02-06",
    completionDate: "2025-02-27",
    condition: "Terminar a história",
    rating: 10,
    difficulty: "Normal",
  },
  {
    id: 2,
    name: "God of War",
    console: "PS4",
    genre: "Ação",
    category: "Exploração 3D",
    startDate: "2025-01-25",
    completionDate: "",
    condition: "Terminar a história",
    rating: 10,
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Chrono Trigger",
    console: "PSX",
    genre: "RPG",
    category: "Turno",
    startDate: "2025-02-18",
    completionDate: "2025-03-06",
    condition: "Terminar a história",
    rating: 10,
    difficulty: "Normal",
  },
  {
    id: 4,
    name: "Aladdin",
    console: "SNES",
    genre: "Plataforma",
    category: "2D Clássico",
    startDate: "2025-02-17",
    completionDate: "2025-02-17",
    condition: "Vencer Ivan Ooze",
    rating: 9,
    difficulty: "Hard",
  },
  {
    id: 5,
    name: "Mighty Morphin Power Rangers - The Fighting Edition",
    console: "SNES",
    genre: "Luta",
    category: "2D Luta",
    startDate: "2025-02-18",
    completionDate: "2025-02-18",
    condition: "Vencer o último chefe",
    rating: 8,
    difficulty: "Easy",
  },
  {
    id: 6,
    name: "Teenage Mutant Ninja Turtles: Turtles in Time",
    console: "SNES",
    genre: "Beat'em Up",
    category: "Isométrico",
    startDate: "2025-02-18",
    completionDate: "2025-02-18",
    condition: "Vencer o último chefe",
    rating: 9,
    difficulty: "Very Hard",
  },
  {
    id: 7,
    name: "Mega Man X",
    console: "SNES",
    genre: "Plataforma",
    category: "2D Clássico",
    startDate: "2025-02-08",
    completionDate: "2025-02-09",
    condition: "Vencer o último chefe",
    rating: 10,
    difficulty: "Very Hard",
  },
  {
    id: 8,
    name: "Warhammer 40,000: Space Marine 2",
    console: "PC",
    genre: "Ação",
    category: "TPS",
    startDate: "2024",
    completionDate: "2024",
    condition: "Terminar a história",
    rating: "8k+",
    difficulty: "Easy",
  },
  {
    id: 9,
    name: "Chained Together",
    console: "PC",
    genre: "Climb UP",
    category: "3D",
    startDate: "2024",
    completionDate: "2024",
    condition: "Chegar ao topo",
    rating: 5,
    difficulty: "Insane",
  },
  {
    id: 10,
    name: "Super Mario 3D Land",
    console: "3DS",
    genre: "Plataforma",
    category: "3D",
    startDate: "2011-02-05",
    completionDate: "2011-02-07",
    condition: "Vencer o último chefe",
    rating: 10,
    difficulty: "Normal",
  },
  {
    id: 11,
    name: "Grand Theft Auto: San Andreas",
    console: "PC",
    genre: "Ação",
    category: "Mundo Aberto",
    startDate: "2009",
    completionDate: "2009",
    condition: "Terminar a história",
    rating: "8k+",
    difficulty: "Hard",
  },
];

export const consoleColors = {
  PS5: "bg-[#0b5394]", // blue for PS5
  PS4: "bg-[#0b5394]", // light blue for PS4
  PSX: "bg-[#0b5394]", // gray for PSX
  SNES: "bg-red-500", // red for SNES
  "3DS": "bg-red-500", // green for PC
  PC: "bg-[#434343]",
};

export const ratingColors = {
  0: "bg-red-700", // Dark red for worst rating
  1: "bg-red-600",
  2: "bg-red-500",
  3: "bg-orange-500",
  4: "bg-yellow-500",
  5: "bg-yellow-400",
  6: "bg-yellow-300",
  7: "bg-green-400",
  8: "bg-green-500",
  9: "bg-green-600",
  10: "bg-green-700", // Dark green for best rating
};

export const difficultyColors = {
  Easy: "bg-green-500", // Green for easy
  Normal: "bg-yellow-500", // Yellow for normal
  Hard: "bg-orange-500", // Orange for hard
  "Very Hard": "bg-red-500", // Red for very hard
  Insane: "bg-purple-600", // Purple for extreme difficulty
};
