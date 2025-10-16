# ScreenWise - Smart Learning Choices

A personalized learning platform that adapts to every child's unique needs and interests through games, apps, and educational resources.

## Features

- **Personalized Learning**: Adaptive educational experiences
- **Math Corner**: Interactive multiplication game with visual feedback
- **Educational Blog**: Insights on personalized learning and education
- **Game Collection**: Curated learning games for different age groups
- **Resource Library**: Educational materials and guides

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tejal29/tejal29.github.io.git
cd tejal29.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment

This project is configured for GitHub Pages deployment and will be automatically deployed to `https://tejal29.github.io`.

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys the site whenever you push to the `main` branch:

1. Make your changes and commit them
2. Push to the `main` branch
3. The GitHub Action will automatically build and deploy your site

### Manual Deployment

If you prefer to deploy manually:

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### GitHub Pages Setup

To enable GitHub Pages for your repository:

1. Go to your repository settings on GitHub
2. Scroll down to the "Pages" section
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to main

The site will be available at `https://tejal29.github.io`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Card, etc.)
│   └── Layout.tsx      # Main layout component
├── pages/              # Page components
│   ├── Home.ts         # Homepage
│   ├── Blog.ts         # Blog page
│   └── Mathcorner.ts   # Math game page
├── api/                # API client and data fetching
├── utils/              # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
