import React from 'react'
import dynamic from 'next/dynamic'
import DarkModeToggle from '@/components/DarkModeToggle'

// Dynamically import the component to avoid SSR issues
const CareerGPSGraph = dynamic(() => import('@/components/CareerGPSGraph'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  ),
})

export default function Home() {
  return (
    <>
      <DarkModeToggle />
      <main className="h-screen bg-gray-50 dark:bg-gray-900 p-1 flex flex-col">
        <div className="max-w-7xl mx-auto flex-1 flex flex-col">
          <div className="text-center mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Career GPS Graph
            </h1>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Interactive 2D career path exploration
            </p>
          </div>

          {/* Navigation Bar - Features Left, Legend Right */}
          <div className="px-3 py-1 bg-gray-50 dark:bg-gray-900 mb-2">
            <div className="flex items-center justify-between text-sm">
              {/* Left Side - Features */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <span className="text-sm">🎯</span>
                  <span className="text-gray-700 dark:text-gray-300">Interactive</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm">🔍</span>
                  <span className="text-gray-700 dark:text-gray-300">Zoom</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm">🔄</span>
                  <span className="text-gray-700 dark:text-gray-300">Drag</span>
                </div>
              </div>

              {/* Right Side - Legend */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Internships</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Roles</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">Skills</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Graph */}
          <div className="flex-1">
            <CareerGPSGraph centerNode="Data Analyst" />
          </div>
        </div>
      </main>
    </>
  )
}