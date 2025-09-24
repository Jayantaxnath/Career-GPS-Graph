'use client'

import React, { useState } from 'react'

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false)

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
        setIsDark(!isDark)
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 z-10 bg-white dark:bg-gray-800 shadow-md rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
            {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
    )
}