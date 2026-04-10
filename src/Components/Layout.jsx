import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="p-10 bg-gray-900 text-white text-center">
        © 2026 Aarniez Digiverse | All Rights Reserved
      </footer>
    </div>
  )
}

export default Layout