# Career GPS Graph Component Project

This project contains a 2D Career GPS Graph React component for Next.js 14 with TypeScript and TailwindCSS.

## Component Features:
- Self-contained CareerGPSGraph.tsx component
- Uses react-force-graph-2d for graph visualization
- Node types: role (indigo), skill (green), internship (amber)
- Interactive tooltips and click handling
- Client-side only with local JSON data
- Dark/light mode support

## Project Structure:
- `/components/CareerGPSGraph.tsx` - Main component
- `/data/careerGraphData.ts` - Data structure and sample data
- TailwindCSS for styling
- TypeScript for type safety

## Usage:
```tsx
<CareerGPSGraph centerNode="Data Analyst" />
```