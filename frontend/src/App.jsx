import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import your Layout Components (The "TV Frame")
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Import your Finished Pages (The "Shows")
import Home from './pages/Home';
import AboutUs from './pages/About';
import Services from './pages/Services';
import AdminDashboard from './pages/AdminDashboard';
import Commodities from './pages/Commodities';
import Contacts from './pages/Contacts';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      
      {/* The top frame that stays on every page */}
      <Navbar /> 
      
      {/* The dynamic screen area */}
      <main className="min-h-[80vh]">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          
          {/* Routes waiting for your groupmates */}
          <Route path="/commodities" element={<Commodities />} /> 
          <Route path="/contact" element={<Contacts />} /> 
          <Route path="/login" element={<Login />} /> 
          
          {/* Your isolated Admin Route */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      {/* The bottom frame that stays on every page */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;