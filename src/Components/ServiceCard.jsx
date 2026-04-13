import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-white border border-gray-100 rounded-3xl"
    >
      <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => navigate(`/services/${service.id}`)}
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.desc}</p>
      </div>
    </motion.div>
  )
}

export default ServiceCard