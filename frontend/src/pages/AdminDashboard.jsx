import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsManager from '../components/ProductsManager';
import MessagesViewer from '../components/MessagesViewer';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      
      {/* THE SIDEBAR */}
      <aside className="w-64 bg-primary text-white p-6 flex flex-col shadow-xl z-10">
        <h2 className="text-2xl font-bold mb-10 font-display">Medha Admin</h2>
        
        <nav className="space-y-2 flex-1">
          <button 
            onClick={() => setActiveTab('products')} 
            className={`w-full text-left px-4 py-3 rounded transition-colors ${activeTab === 'products' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
          >
            Commodities
          </button>
          <button 
            onClick={() => setActiveTab('messages')} 
            className={`w-full text-left px-4 py-3 rounded transition-colors ${activeTab === 'messages' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}
          >
            Messages
          </button>
        </nav>

        <button onClick={handleLogout} className="mt-auto text-sm text-left hover:underline opacity-80 pt-4 border-t border-white/20">
          ← Logout
        </button>
      </aside>

      {/* THE WORKSPACE */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Conditional Rendering: Shows whichever component is clicked in the sidebar */}
          {activeTab === 'products' && <ProductsManager />}
          {activeTab === 'messages' && <MessagesViewer />}
        </div>
      </main>

    </div>
  );
};

export default AdminDashboard;