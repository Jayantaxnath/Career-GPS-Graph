# Career GPS Graph Component

> **Note**: This is a standalone component extracted from a larger career guidance platform project. It demonstrates the interactive graph visualization feature.

An interactive 2D career graph component that visualizes career paths, skills, and internships using React and D3.js force-directed layout.

<img width="1920" height="1080" alt="Screenshot 2025-09-24 132331" src="https://github.com/user-attachments/assets/c73d38f3-159a-4c46-bdee-edb4b79cfc63" />

## Features

- Interactive career path visualization
- 70+ career roles, skills, and internships
- Dark/light mode support
- Zoom and pan navigation
- Color-coded nodes: Roles (blue), Skills (green), Internships (yellow)

## Getting Started

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Career-GPS-Graph.git
   cd Career-GPS-Graph
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage

```tsx
import CareerGPSGraph from '@/components/CareerGPSGraph'

export default function MyPage() {
  return <CareerGPSGraph centerNode="Data Analyst" />
}
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- react-force-graph-2d

## Project Structure

```
components/
├── CareerGPSGraph.tsx    # Main graph component
└── DarkModeToggle.tsx    # Theme toggle

data/
└── careerGraphData.ts    # Career data and types

app/
├── page.tsx              # Main page
└── demo/page.tsx         # Demo page
```

## License

MIT License