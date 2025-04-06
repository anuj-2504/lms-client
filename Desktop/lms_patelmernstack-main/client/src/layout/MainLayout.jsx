import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // ✅ Import Footer
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1 mt-16'>
        <Outlet />
      </div>
      <Footer /> {/* ✅ Add footer here */}
    </div>
  )
}

export default MainLayout
