'use client'

import React, { useCallback, useRef, useEffect, useState } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import { Tooltip } from 'react-tooltip'
import { graphData as defaultGraphData, GraphData, Node } from '@/data/careerGraphData'

interface CareerGPSGraphProps {
    data?: GraphData
    centerNode?: string
    className?: string
}

// Node colors based on type
const getNodeColor = (node: Node): string => {
    switch (node.type) {
        case 'role':
            return '#6366f1' // Indigo
        case 'skill':
            return '#10b981' // Green
        case 'internship':
            return '#f59e0b' // Amber
        default:
            return '#6b7280' // Gray
    }
}

// Node size based on type
const getNodeSize = (node: Node): number => {
    switch (node.type) {
        case 'role':
            return 7
        case 'skill':
            return 3
        case 'internship':
            return 9
        default:
            return 4
    }
}

export default function CareerGPSGraph({
    data = defaultGraphData,
    centerNode,
    className = ''
}: CareerGPSGraphProps) {
    const graphRef = useRef<any>()
    const [hoveredNode, setHoveredNode] = useState<Node | null>(null)
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Check for dark mode
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'))
        }

        checkDarkMode()

        // Watch for changes to dark mode
        const observer = new MutationObserver(checkDarkMode)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        return () => observer.disconnect()
    }, [])

    // Custom force simulation for better spacing
    useEffect(() => {
        if (graphRef.current && graphRef.current.d3Force) {

            // Less spacing:  
            graphRef.current.d3Force('link')?.distance(100);     // ← Decrease to 80
            graphRef.current.d3Force('charge')?.strength(-200); // ← Decrease to -200

            graphRef.current.d3Force('center')?.strength(0.05); // ← Weaker centering

            // Restart simulation with new forces
            graphRef.current.d3ReheatSimulation();
        }
    }, [data])

    // Center the graph on a specific node
    useEffect(() => {
        if (centerNode && graphRef.current) {
            const node = data.nodes.find(n => n.id === centerNode)
            if (node) {
                // Wait for the graph to be ready
                setTimeout(() => {
                    graphRef.current?.centerAt(0, 0, 1000)
                }, 1000)
            }
        }
    }, [centerNode, data])

    // Handle node click
    const handleNodeClick = useCallback((node: Node) => {
        console.log('Node clicked:', node)
        // Placeholder for navigation logic
        // You can implement routing or modal opening here
    }, [])

    // Handle node hover
    const handleNodeHover = useCallback((node: Node | null) => {
        setHoveredNode(node)
    }, [])

    // Get font size based on node type
    const getFontSize = (node: Node, globalScale: number): number => {
        const baseFontSize = 12 / globalScale
        switch (node.type) {
            case 'skill':
                return baseFontSize * 0.8  // Small font for skills
            case 'role':
                return baseFontSize * 1.0  // Medium font for roles
            case 'internship':
                return baseFontSize * 1.1  // Large font for internships
            default:
                return baseFontSize
        }
    }

    // Custom node painting
    const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
        const label = node.id
        const fontSize = getFontSize(node, globalScale)
        const nodeColor = getNodeColor(node)
        const nodeSize = getNodeSize(node)

        // Draw node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, 2 * Math.PI)
        ctx.fillStyle = nodeColor
        ctx.fill()

        // Add border if hovered
        if (hoveredNode && hoveredNode.id === node.id) {
            ctx.strokeStyle = isDarkMode ? '#ffffff' : '#000000'
            ctx.lineWidth = 2 / globalScale
            ctx.stroke()
        }

        // Draw label above the node
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        ctx.fillStyle = isDarkMode ? '#e5e7eb' : '#374151'
        ctx.font = `${fontSize}px Inter, sans-serif`

        // Position label above node
        const labelY = node.y - nodeSize - 2
        ctx.fillText(label, node.x, labelY)
    }, [hoveredNode, isDarkMode])

    // Custom link painting
    const paintLink = useCallback((link: any, ctx: CanvasRenderingContext2D) => {
        const { source, target } = link

        if (!source || !target) return

        // Calculate link properties
        const dx = target.x - source.x
        const dy = target.y - source.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Don't draw very short links
        if (distance < 1) return

        // Normalize direction
        const unitX = dx / distance
        const unitY = dy / distance

        // Calculate arrow position (stop before target node)
        const arrowDistance = getNodeSize(target) + 2
        const arrowX = target.x - unitX * arrowDistance
        const arrowY = target.y - unitY * arrowDistance

        // Draw line
        ctx.beginPath()
        ctx.moveTo(source.x, source.y)
        ctx.lineTo(arrowX, arrowY)
        ctx.strokeStyle = link.type === 'similarity' ? '#9ca3af' : '#d1d5db'
        ctx.lineWidth = link.type === 'similarity' ? 0.8 : 1.0
        ctx.setLineDash(link.type === 'similarity' ? [5, 5] : [])
        ctx.stroke()
        ctx.setLineDash([]) // Reset dash

        // Draw arrow
        const arrowSize = 6
        const arrowAngle = Math.PI / 6

        ctx.beginPath()
        ctx.moveTo(arrowX, arrowY)
        ctx.lineTo(
            arrowX - arrowSize * Math.cos(Math.atan2(dy, dx) - arrowAngle),
            arrowY - arrowSize * Math.sin(Math.atan2(dy, dx) - arrowAngle)
        )
        ctx.lineTo(
            arrowX - arrowSize * Math.cos(Math.atan2(dy, dx) + arrowAngle),
            arrowY - arrowSize * Math.sin(Math.atan2(dy, dx) + arrowAngle)
        )
        ctx.closePath()
        ctx.fillStyle = link.type === 'similarity' ? '#9ca3af' : '#d1d5db'
        ctx.fill()
    }, [])

    // Navigation controls
    const handleZoomIn = useCallback(() => {
        if (graphRef.current) {
            const currentZoom = graphRef.current.zoom()
            graphRef.current.zoom(Math.min(currentZoom * 1.5, 3), 400)
        }
    }, [])

    const handleZoomOut = useCallback(() => {
        if (graphRef.current) {
            const currentZoom = graphRef.current.zoom()
            graphRef.current.zoom(Math.max(currentZoom / 1.5, 0.5), 400)
        }
    }, [])

    const handlePanUp = useCallback(() => {
        if (graphRef.current) {
            const { x, y } = graphRef.current.centerAt()
            graphRef.current.centerAt(x || 0, (y || 0) + 50, 400)
        }
    }, [])

    const handlePanDown = useCallback(() => {
        if (graphRef.current) {
            const { x, y } = graphRef.current.centerAt()
            graphRef.current.centerAt(x || 0, (y || 0) - 50, 400)
        }
    }, [])

    const handlePanLeft = useCallback(() => {
        if (graphRef.current) {
            const { x, y } = graphRef.current.centerAt()
            graphRef.current.centerAt((x || 0) + 50, y || 0, 400)
        }
    }, [])

    const handlePanRight = useCallback(() => {
        if (graphRef.current) {
            const { x, y } = graphRef.current.centerAt()
            graphRef.current.centerAt((x || 0) - 50, y || 0, 400)
        }
    }, [])

    const handleReset = useCallback(() => {
        if (graphRef.current) {
            graphRef.current.centerAt(0, 0, 1000)
            graphRef.current.zoom(1, 1000)
        }
    }, [])

    return (
        <div className={`w-full ${className}`}>
            <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 overflow-hidden relative">
                <div className="h-[600px] w-full">
                    <ForceGraph2D
                        ref={graphRef}
                        graphData={data}
                        nodeId="id"
                        linkSource="source"
                        linkTarget="target"
                        nodeCanvasObject={paintNode}
                        linkCanvasObject={paintLink}
                        onNodeClick={handleNodeClick}
                        onNodeHover={handleNodeHover}
                        nodePointerAreaPaint={(node: any, color: any, ctx: any) => {
                            // Increase clickable area
                            ctx.fillStyle = color
                            ctx.beginPath()
                            ctx.arc(node.x || 0, node.y || 0, getNodeSize(node) + 2, 0, 2 * Math.PI)
                            ctx.fill()
                        }}
                        // Distance and spacing controls - using available properties
                        nodeRelSize={8}                // ← Increased node size for better visual spacing
                        linkWidth={2}                  // ← Thicker links for better visibility
                        linkDirectionalParticles={0}
                        linkDirectionalArrowLength={0} // We draw custom arrows
                        linkDirectionalArrowRelPos={0}
                        backgroundColor={isDarkMode ? '#1f2937' : '#ffffff'}
                        linkHoverPrecision={3}
                        enableNodeDrag={true}
                        enableZoomInteraction={true}
                        enablePanInteraction={true}
                        minZoom={0.5}
                        maxZoom={3}
                        cooldownTicks={100}            // ← Increased for better settling and spacing
                        d3AlphaDecay={0.01}            // ← Much slower cooling for natural spacing
                        d3VelocityDecay={0.5}          // ← Higher damping for stability
                        warmupTicks={100}
                        width={undefined} // Auto-size to container
                        height={600}
                    />
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-4 right-4 z-10">
                    <div className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-xl rounded-lg p-2 shadow-2xl border border-white/10 dark:border-gray-700/10">
                        {/* Zoom Controls */}
                        <div className="flex space-x-1 mb-2">
                            <button
                                onClick={handleZoomOut}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Zoom Out"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleZoomIn}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Zoom In"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>

                        {/* Directional Controls */}
                        <div className="grid grid-cols-3 gap-1 mb-2">
                            {/* Top row */}
                            <div></div>
                            <button
                                onClick={handlePanUp}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Pan Up"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            <div></div>
                            
                            {/* Middle row */}
                            <button
                                onClick={handlePanLeft}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Pan Left"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleReset}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Reset View"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                            <button
                                onClick={handlePanRight}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Pan Right"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            {/* Bottom row */}
                            <div></div>
                            <button
                                onClick={handlePanDown}
                                className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                                title="Pan Down"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tooltip */}
            <Tooltip
                id="career-graph-tooltip"
                place="top"
                content={hoveredNode ? `${hoveredNode.id} (${hoveredNode.type})` : ''}
                style={{
                    backgroundColor: isDarkMode ? '#374151' : '#1f2937',
                    color: isDarkMode ? '#f3f4f6' : '#ffffff',
                    borderRadius: '0.375rem',
                    padding: '0.5rem',
                    fontSize: '0.875rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                }}
            />
        </div>
    )
}