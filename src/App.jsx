import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import ServiceDetail from './Pages/ServiceDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path='/services/:serviceId' element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
