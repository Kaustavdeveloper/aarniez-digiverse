import React from 'react'
import { servicesData } from '../ServiceData'
import { useParams } from 'react-router-dom'
const ServiceDetail = () => {

  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === parseInt(serviceId));
  if (!service) return <div className="p-20 text-center text-2xl font-bold">Service Not Found!</div>;
  return (
    <div className="py-20 px-10 max-w-4xl mx-auto">
      <div className="text-6xl mb-6">{service.icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.desc}</p>
      <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">
        Book this Service
      </button>
    </div>
  )
}

export default ServiceDetail