import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => navigate(`/services/${service.id}`)}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.desc}</p>
    </div>
  )
}

export default ServiceCard