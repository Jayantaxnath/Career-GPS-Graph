import React from 'react'
import dynamic from 'next/dynamic'

const CareerGPSGraph = dynamic(() => import('@/components/CareerGPSGraph'), {
  ssr: false
})

export default function Demo() {
  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#111827' }}>
        Career GPS Demo
      </h1>
      <CareerGPSGraph centerNode="Data Analyst" />
    </div>
  )
}