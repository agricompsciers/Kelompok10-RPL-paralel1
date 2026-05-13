import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const nav = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/commodities", label: "Commodities" },
  { to: "/contacts", label: "Contacts" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight font-bold">
          Medha <span className="opacity-70 font-normal">Nusantara</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => 
                isActive 
                  ? "opacity-100 font-bold underline decoration-2 underline-offset-4" 
                  : "opacity-80 hover:opacity-100 transition-opacity"
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side Icons & Login */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden sm:inline-flex h-9 items-center rounded-md bg-white text-primary px-4 text-sm font-medium hover:bg-cream transition-colors"
          >
            Admin Sign In
          </Link>
          <button className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10 transition-colors">
            <Search className="h-4 w-4" />
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link 
                key={n.to} 
                to={n.to} 
                onClick={() => setOpen(false)} 
                className="text-sm opacity-90 hover:opacity-100"
              >
                {n.label}
              </Link>
            ))}
            <Link 
              to="/login" 
              onClick={() => setOpen(false)} 
              className="text-sm font-bold mt-2 pt-2 border-t border-white/10"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;