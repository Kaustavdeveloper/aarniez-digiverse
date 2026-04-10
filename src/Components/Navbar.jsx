import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-700">
        Aarniez<span className="text-gray-800">Digiverse</span>
      </div>
      <ul className="flex gap-8 font-medium text-gray-600">
        <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
        <li><Link to="/services" className="hover:text-blue-600 transition">Services</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
      </ul>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </nav>
  )
}

export default Navbar