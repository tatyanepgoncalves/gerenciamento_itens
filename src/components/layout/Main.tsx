import React from 'react'

export default function Main({ children } : { children: React.ReactNode}) {
  return (
    <main className='flex-grow container mx-auto max-w-6xl p-8'>
      {children}
    </main>
  )
}
