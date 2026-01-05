import React from 'react'
import { Button } from '@/components/ui/button'
import Link  from 'next/link'

function App() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Link href={"/dashboard"} className='px-4 py-4 bg-blue-950 rounded-2xl font-bold text-4xl'>Click Me</Link>
    </div>
  )
}

export default App