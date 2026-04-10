import React from 'react'
import ServiceCard from '../Components/ServiceCard';
import { servicesData } from '../ServiceData';

const Service = () => {

  return (
    <div className="py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-16">Our Specialized Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
export default Service