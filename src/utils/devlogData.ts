export interface BlogPost {
  title: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
  filePath: string;
}
//ex
/*
{ 
    title: "Week 4: Input polish", 
    reference: "/posts/week-4",
    excerpt: "Refining player controls and feel",
    tags: ["devlog", "input"],
    filePath: "posts/week-4"
  }
*/
export const posts: BlogPost[] = [
  // { 
  //   title: "Week 1: Press Start", 
  //   excerpt: "Refining player controls and feel",
  //   date: "2025-08-015",
  //   tags: ["Devlog", "Starting", "Game Engine"],
  //   filePath: "posts/press-start"
  // },
];

