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
//ex
/*{
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
  }
*/

export const games: Game[] = [
  {//Flappy Bird
    title: "Flappy Bird",
    slug: "flappy-bird",
    status: "in-progress",
    webPlay: true,
    isDownloadable: true,
    engine: "Godot",
    completedDate: "",
    description: "One button arcade game, comparitive to sisyphus",
    tags: ["arcade", "casual", "relaxing"],
    filePath: "games/flappy-bird"
  },
  {//Jetpack Joyride
    title:"Jetpack Joyride",
    slug: "jetpack-joyride",
    status: "planned",
    webPlay: true,
    isDownloadable: true,
    engine: "Godot",
    completedDate: "",
    description: "A side-scrolling endless runner with jetpacks",
    tags: ["arcade", "casual", "action"],
    filePath: "games/jetpack-joyride"
  },
  {
    title: "Frogger",
    slug: "frogger",
    status: "planned",
    webPlay: true,
    isDownloadable: true,
    engine: "Godot",
    completedDate: "",
    description: "A modern reimagining of the classic Frogger game",
    tags: ["arcade", "casual", "action"],
    filePath: "games/frogger"
  }
];

