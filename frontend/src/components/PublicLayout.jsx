import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure this path matches where your Navbar is
import Footer from './Footer'; // Ensure this path matches where your Footer is

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* The Navbar stays at the top of every public page */}
      <Navbar />
      
      {/* The main content area expands to push the footer down */}
      <main className="flex-grow">
        {/* <Outlet /> is React Router's magic window. 
            When you go to /contact, the Contact component gets injected right here. */}
        <Outlet />
      </main>

      {/* The Footer stays at the bottom of every public page */}
      <Footer />
    </div>
  );
};

export default PublicLayout;