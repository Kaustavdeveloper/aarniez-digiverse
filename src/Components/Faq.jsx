import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
const faqs = [
  {
    question: "How much time does it take to complete a project?",
    answer: "Usually, it takes 2-4 weeks depending on the project complexity and requirements."
  },
  {
    question: "Do you provide after-sales support?",
    answer: "Yes! We provide 3 months of free maintenance and support for every project we deliver."
  },
  {
    question: "Can you help with digital marketing strategy?",
    answer: "Absolutely! Our team specializes in 360° marketing, SEO, and social media management."
  }
]

const Faq = () => {

  const [activeId, setActiveId] = useState(null);
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <button className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setActiveId(activeId === index ? null : index)}>
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-2xl">{activeId === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeId === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden">
                    <div className="p-6 text-gray-600 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq