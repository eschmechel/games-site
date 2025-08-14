// Game data and constants for the 20 Games Challenge

export interface Game {
  title: string;
  slug: string;
  status: 'planned' | 'in-progress' | 'complete';
  webPlay: boolean;
  isDownloadable: boolean;
  engine: 'Godot' | 'Unity' | 'Unreal Engine';
  completedDate: string;
  description?: string;
  tags?: string[];
  filePath: string;
}

export const games: Game[] = [
  {
    title: "Tiny Platformer",
    slug: "tiny-platformer",
    status: "complete",
    webPlay: true,
    isDownloadable: true,
    engine: "Godot",
    completedDate: "2024-01-15",
    description: "A small platformer game built to explore basic movement mechanics",
    tags: ["platformer", "2D", "pixel-art"],
    filePath: "games/tiny-platformer"
  },
  {
    title: "Cave Jam",
    slug: "cave-jam",
    status: "in-progress",
    webPlay: true,
    isDownloadable: false,
    engine: "Godot",
    completedDate: "2024-01-15",
    description: "Cave exploration game with procedural generation",
    tags: ["exploration", "procedural", "cave"],
    filePath: "games/cave-jam"
  },
  {
    title: "Runner X",
    slug: "runner-x",
    status: "complete",
    webPlay: true,
    isDownloadable: true,
    engine: "Unity",
    completedDate: "2024-02-20",
    description: "An endless runner focused on tight controls and speedruns",
    tags: ["runner", "endless", "speedrun"],
    filePath: "games/runner-x"
  },
  {
    title: "Space Trader",
    slug: "space-trader",
    status: "in-progress",
    webPlay: false,
    isDownloadable: false,
    engine: "Unreal Engine",
    completedDate: "",
    description: "A trading and combat sim set in a procedurally generated galaxy",
    tags: ["trading", "space", "simulation"],
    filePath: "games/space-trader"
  },
  {
    title: "Puzzle Garden",
    slug: "puzzle-garden",
    status: "planned",
    webPlay: true,
    isDownloadable: false,
    engine: "Godot",
    completedDate: "",
    description: "A relaxing puzzle game about arranging plants and paths",
    tags: ["puzzle", "casual", "relaxing"],
    filePath: "games/puzzle-garden"
  },
  {
    title: "Neo Racer",
    slug: "neo-racer",
    status: "complete",
    webPlay: false,
    isDownloadable: true,
    engine: "Unity",
    completedDate: "2024-03-30",
    description: "Fast-paced futuristic racing with moddable vehicles",
    tags: ["racing", "3D", "multiplayer"],
    filePath: "games/neo-racer"
  }
];

export const featuredGames = games.slice(0, 3);

export interface BlogPost {
  title: string;
  reference: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
  filePath: string;
}

export const posts: BlogPost[] = [
  { 
    title: "Week 4: Input polish", 
    reference: "/posts/week-4",
    excerpt: "Refining player controls and feel",
    tags: ["devlog", "input"],
    filePath: "posts/week-4"
  },
  { 
    title: "Postmortem: Runner", 
    reference: "/posts/runner-postmortem",
    excerpt: "Lessons learned from building an endless runner",
    tags: ["postmortem", "runner"],
    filePath: "posts/runner-postmortem"
  },
  { 
    title: "Godot WASM tips", 
    reference: "/posts/godot-wasm",
    excerpt: "Optimizing Godot games for web deployment",
    tags: ["godot", "wasm"],
    filePath: "posts/godot-wasm"
  },
];

