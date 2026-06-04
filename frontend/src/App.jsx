import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- LAYOUTS & PROTECTIONS ---
import PublicLayout from './components/PublicLayout';
import ProtectedRoute from './components/ProtectedRoute';

// --- PUBLIC PAGES ---
// (Assuming you have a Home page. If not, just comment it out!)
import Home from './pages/Home'; 
import Commodities from './pages/Commodities';
import Contacts from './pages/Contacts'; // <-- Updated to Contacts with an 's'
import Services from './pages/Services';
import About from './pages/About';

// --- ADMIN PAGES ---
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ZONE 1: THE PUBLIC WEBSITE (Has Navbar & Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/contacts" element={<Contacts />} /> {/* <-- Updated URL and Component */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* ZONE 2: THE LOGIN VAULT (Blank screen with just the form) */}
        <Route path="/login" element={<Login />} />

        {/* ZONE 3: THE SECURE ADMIN DASHBOARD (Has Sidebar, No public UI) */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;