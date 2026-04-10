import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="bg-white">
      <section className="py-20 px-10 text-center bg-linear-to-r from-blue-50 to-indigo-50">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Elevate Your Brand with <br />
          <span className="text-blue-600">Digital Excellence</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          We provide 360° marketing solutions, from reputation management to
          high-impact content creation. Let's build your digital legacy together.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition">
            Start a Project
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition">
            <Link to='/services'>Our Services</Link>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-around py-12 border-b border-gray-100 bg-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">150+</h3>
            <p className="text-gray-500">Clients Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-500">Retention Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">10M+</h3>
            <p className="text-gray-500">Ad Reach</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home