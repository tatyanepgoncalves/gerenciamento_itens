import React from 'react'

export default function Main({ children } : { children: React.ReactNode}) {
  return (
    <main className='flex-grow container p-4 sm:p-6 lg:p-8'>
      {children}
    </main>
  )
}
