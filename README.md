# Career GPS Graph Component

An interactive 2D Career GPS Graph React component built with Next.js 14, TypeScript, and TailwindCSS. This component provides a comprehensive visualization of career paths, skills, and internship opportunities across multiple sectors (IT, Finance, Engineering) using force-directed graph layout with advanced navigation controls.

## 🚀 Key Features

- **🎯 Interactive Career Visualization**: Navigate through 70+ career roles, skills, and internships
- **🔍 Advanced Navigation Controls**: Transparent glass-effect controls with zoom in/out and directional panning
- **🌙 Dark Mode Support**: Seamless theme switching with automatic detection
- **📊 Multi-Sector Coverage**: IT, Finance, and Engineering career paths
- **🎨 Smart Color Coding**: Visual distinction between roles, skills, and internships
- **� Relationship Mapping**: Shows career progression pathways and skill similarities
- **📱 Responsive Design**: Optimized for desktop and mobile experiences
- **⚡ Client-Side Rendering**: No backend required, perfect for integration

## � Top 5 Important Files

### 1. **`components/CareerGPSGraph.tsx`** - Main Component
The core React component that renders the interactive career graph visualization. Contains custom node painting, link rendering, navigation controls, and all interactive functionality.

### 2. **`data/careerGraphData.ts`** - Data Layer
Defines the complete career graph structure with 70+ nodes (roles, skills, internships) and their relationships across IT, Finance, and Engineering sectors. Includes TypeScript interfaces for type safety.

### 3. **`app/page.tsx`** - Main Application Page
The primary application entry point that displays the career graph with navigation features, legend, and responsive layout. Implements dynamic imports for optimal performance.

### 4. **`package.json`** - Project Configuration
Contains all project dependencies including Next.js 14, React, react-force-graph-2d, and TypeScript configurations. Essential for project setup and deployment.

### 5. **`components/DarkModeToggle.tsx`** - Theme Controller
Provides seamless dark/light mode switching functionality with persistent theme state and smooth transitions.

## �📦 Installation

```bash
npm install react-force-graph-2d react-tooltip
npm install --save-dev @types/d3 @types/d3-force
```

## 🎯 Usage

### Basic Implementation

```tsx
import CareerGPSGraph from '@/components/CareerGPSGraph'

export default function MyPage() {
  return (
    <div>
      <CareerGPSGraph centerNode="Data Analyst" />
    </div>
  )
}
```

### With Custom Data

```tsx
import CareerGPSGraph from '@/components/CareerGPSGraph'
import { GraphData } from '@/data/careerGraphData'

const customData: GraphData = {
  nodes: [
    { id: 'Node 1', type: 'role', sector: 'IT' },
    { id: 'Node 2', type: 'skill', sector: 'IT' },
  ],
  links: [
    { source: 'Node 1', target: 'Node 2', type: 'pathway' }
  ]
}

export default function MyPage() {
  return (
    <CareerGPSGraph 
      data={customData} 
      centerNode="Node 1"
      className="my-custom-class" 
    />
  )
}
```

## 🏗️ Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `GraphData` | `defaultGraphData` | Graph data containing nodes and links |
| `centerNode` | `string` | `undefined` | ID of node to center the view on |
| `className` | `string` | `''` | Additional CSS classes for the component |

### Data Structure

```typescript
interface Node {
  id: string;
  type: 'role' | 'skill' | 'internship';
  sector?: 'IT' | 'Finance' | 'Engineering';
}

interface Link {
  source: string;
  target: string;
  type?: 'pathway' | 'similarity';
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}
```

## 🎨 Node Types & Visual Design

- **🟦 Roles (Indigo)**: Career positions like Data Analyst, Financial Analyst, Software Engineer
- **🟩 Skills (Green)**: Technical competencies like Python, Excel, Financial Modeling  
- **🟨 Internships (Amber)**: Entry-level opportunities and learning positions

## 🔗 Connection Types

- **Solid Arrows**: Career progression pathways (skills → roles → advanced roles)
- **Dashed Lines**: Skill similarity relationships and complementary competencies

## 🎮 Navigation Controls

The transparent glass-effect navigation panel includes:
- **Zoom Controls**: + and - buttons for scaling the view
- **Directional Controls**: Arrow buttons for panning up, down, left, right
- **Reset Button**: Centers and resets the graph view
- **Glass Effect**: Ultra-transparent design with backdrop blur for minimal interference

## 🌙 Dark Mode

The component automatically detects system dark mode preferences and responds to manual theme changes. Use the `DarkModeToggle` component for manual control:

```tsx
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Layout() {
  return (
    <>
      <DarkModeToggle />
      {/* Your content */}
    </>
  )
}
```

## 🚀 Getting Started

1. **Clone the project**
   ```bash
   git clone <repository-url>
   cd career-gps-proto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
career-gps-proto/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main application page with graph
│   └── demo/
│       └── page.tsx         # Simple demo page
├── components/
│   ├── CareerGPSGraph.tsx   # Main interactive graph component
│   └── DarkModeToggle.tsx   # Theme switching control
├── data/
│   └── careerGraphData.ts   # Career data and TypeScript types
├── types/
│   └── global.d.ts          # Global TypeScript definitions
└── package.json             # Dependencies and scripts
```

## 🔧 Customization & Integration

### Adding New Career Data

Edit `data/careerGraphData.ts` to expand career paths:

```typescript
export const graphData: GraphData = {
  nodes: [
    { id: 'Senior Software Engineer', type: 'role', sector: 'IT' },
    { id: 'System Architecture', type: 'skill', sector: 'IT' },
    { id: 'Tech Lead Internship', type: 'internship', sector: 'IT' },
  ],
  links: [
    { source: 'System Architecture', target: 'Senior Software Engineer', type: 'pathway' },
    { source: 'Senior Software Engineer', target: 'Tech Lead Internship', type: 'pathway' },
  ]
}
```

### Integration with Main Website

Multiple integration options available:
1. **NPM Package**: Convert to standalone package for easy installation
2. **Direct Integration**: Copy components to existing Next.js project
3. **Micro Frontend**: Deploy separately and embed via iframe
4. **API Integration**: Use career data via REST API endpoints

### Styling Customization

- **TailwindCSS Classes**: Modify component styling directly
- **CSS Variables**: Customize colors and spacing in `globals.css`
- **Graph Appearance**: Adjust node sizes, colors, and link widths in component
- **Navigation Controls**: Customize transparency and positioning

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🧰 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and developer experience  
- **TailwindCSS** - Utility-first CSS framework
- **react-force-graph-2d** - D3.js-based force-directed graphs
- **react-tooltip** - Interactive hover tooltips

## 🔄 Future Enhancements

- [ ] Node filtering by sector/type
- [ ] Search functionality
- [ ] Export graph as image
- [ ] Animation controls
- [ ] Custom node shapes
- [ ] API integration for dynamic data
- [ ] Breadcrumb navigation
- [ ] Graph statistics panel

## 🐛 Known Issues

- Some TypeScript JSX namespace warnings (component works correctly)
- Graph may need refresh after hot reload in development

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.