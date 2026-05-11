import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">Medha Nusantara</div>
          <p className="mt-3 max-w-sm text-sm opacity-70 leading-relaxed">
            Sourcing premium Indonesian commodities and connecting growers to global markets with integrity.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest opacity-50 mb-4 font-bold">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/services" className="opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
            <li><Link to="/commodities" className="opacity-80 hover:opacity-100 transition-opacity">Commodities</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest opacity-50 mb-4 font-bold">Office</div>
          <p className="text-sm opacity-80 leading-relaxed">
            Jakarta, Indonesia<br/>
            hello@medhanusantara.co<br/>
            +62 21 0000 0000
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs opacity-50">
          © {new Date().getFullYear()} Medha Nusantara. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;