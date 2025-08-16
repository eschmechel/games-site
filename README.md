# 🎮 20 Games Challenge

A year-long journey to build 20 complete games, documented through devlogs and shared on a fast, performant web platform.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🚀 Project Overview

This is both a personal challenge and a technical showcase. The goal is to ship 20 games while maintaining web performance standards and documenting the entire process.

### Key Features

- **Web-first games**: All games run in browsers when possible
- **Performance optimized**: <14kB total page budget, sub-3kB Brotli compressed
- **Progress tracking**: Real-time challenge progress with visual indicators
- **Development logs**: Behind-the-scenes insights and technical deep-dives
- **Responsive design**: Works perfectly on all devices
- **Dark/Light themes**: Respects system preferences with manual toggle

## 🎯 The Challenge Rules

- **Time-boxed**: Most games built in 1-2 week sprints
- **Learn something**: Each project teaches a new skill or technique
- **Ship complete**: Every game must be fully playable
- **Document everything**: Write devlogs and postmortems for reflection

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Server-first, fast, content-driven
- **Styling**: Vanilla CSS with custom properties and gradients
- **Performance**: System fonts, inlined critical CSS, minimal JavaScript
- **Deployment**: Static site generation with modern web standards

## 🏗️ Project Structure

```text
/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/
│   │   └── images/        # Optimized game screenshots and UI assets
│   ├── components/
│   │   └── ui/           # Reusable UI components (ThemeToggle, etc.)
│   ├── layouts/
│   │   └── Base.astro    # Main layout with inlined styles
│   ├── pages/
│   │   ├── index.astro   # Homepage with progress tracking
│   │   ├── about.astro   # About page and philosophy
│   │   ├── devlogs/      # Development blog posts
│   │   └── games/        # Individual game pages
│   └── utils/
│       └── dataTypes.ts  # Game data and TypeScript types
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/eschmechel/games-site.git
cd games-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📊 Performance Stats

- **Raw HTML**: ~8.8KB
- **Gzipped**: ~2.8KB  
- **Brotli**: ~2.3KB
- **Target**: <14KB total page budget ✅

### Optimizations

- System fonts only (no webfont loading)
- Critical CSS inlined in layout
- Minimal JavaScript (theme toggle only)
- Efficient gradient usage
- Early theme detection prevents FOUC

## 🎨 Design Philosophy

The site embraces a **pixel-flavored** aesthetic with modern web performance. Key design principles:

- **Fast by default**: Performance is a feature, not an afterthought
- **Accessible**: WCAG AA color contrast, proper focus states
- **Progressive enhancement**: Works without JavaScript
- **Responsive**: Mobile-first, scales beautifully

## 🎮 Games Progress

Track the challenge progress at the main site. Each completed game includes:

- Web-playable build (when possible)
- Download links
- Development postmortem
- Technical insights

## 🤝 Contributing

While this is a personal challenge, suggestions and feedback are welcome! Feel free to:

- Open issues for bugs or suggestions
- Share performance optimization ideas
- Discuss game development approaches

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Connect

- **Website**: [View the live challenge](https://games.eschmechel.dev)
- **Development Logs**: Follow the journey through detailed devlogs
- **Contact**: Reach out for discussions about game dev, performance, or tech

---

Built with ❤️ and lots of caffeine. One game at a time.
