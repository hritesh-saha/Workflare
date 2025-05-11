import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      {/*min-h-screen container */}
        <main className='min-h-screen max-w-screen-xl mx-auto px-2'>
          <Header />
        <Outlet/>
        </main>
        <div className='p-10 text-center bg-gray-800 mt-10'>Made By API-Alchemist</div>
    </div>
  )
}

export default AppLayout