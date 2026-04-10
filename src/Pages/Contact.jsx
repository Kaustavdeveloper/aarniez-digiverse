import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_81ejij8', 'template_fku2zkl', formData, 'z-4q5RQVpBInDaUVj')
      .then((response) => {
        alert("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      }).catch((err) => {
        alert("Something went wrong!");
      });

    console.log('submited data', formData);
    alert(`Thank You ${formData.name}! We will contact you soon.`);
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }
  return (
    <div className="py-20 px-10 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
      <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input type="text"
            className="w-full p-3 border rounded-lg outline-blue-500"
            placeholder='Your Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Email Address</label>
          <input type="email" className="w-full p-3 border rounded-lg outline-blue-500"
            placeholder='Enter EMail'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea className="w-full p-3 border rounded-lg h-32 outline-blue-500"
            placeholder='Your Message'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>
        <button type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact