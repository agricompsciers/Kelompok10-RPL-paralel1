import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react'; // Make sure lucide-react is installed!

const ProductsManager = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for the "Add New" form
  const [formData, setFormData] = useState({ name: '', description: '', price: '', imageUrl: '' });

  // 1. INITIAL FETCH (READ)
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  // 2. CREATE FUNCTION
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price) // Make sure price goes to DB as a number!
        })
      });
      
      if (response.ok) {
        setFormData({ name: '', description: '', price: '', imageUrl: '' }); // Clear form
        fetchProducts(); // Refresh the list!
      }
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  // 3. DELETE FUNCTION
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this commodity?")) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
      if (response.ok) fetchProducts(); // Refresh the list!
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  if (loading) return <p className="text-gray-500">Loading database...</p>;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* THE CREATE FORM */}
      <div className="lg:col-span-1">
        <div className="bg-cream p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold mb-4 font-display">Add New Commodity</h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <input required type="text" placeholder="Name (e.g. Gayo Arabica)" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-2 text-sm border rounded" />
            <input required type="number" placeholder="Price (USD)" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full p-2 text-sm border rounded" />
            <textarea required placeholder="Description (Origin, Grade, etc)" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2 text-sm border rounded h-24" />
            <input type="text" placeholder="Image URL" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full p-2 text-sm border rounded" />
            <button type="submit" className="w-full bg-primary text-white py-2 rounded text-sm font-bold hover:opacity-90">Save Product</button>
          </form>
        </div>
      </div>

      {/* THE READ/DELETE TABLE */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-bold text-gray-600">Product</th>
                <th className="p-4 font-bold text-gray-600">Price</th>
                <th className="p-4 font-bold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p._id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <p className="font-bold text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500 truncate max-w-xs">{p.description}</p>
                  </td>
                  <td className="p-4 font-medium">${p.price}</td>
                  <td className="p-4">
                    <button onClick={() => handleDelete(p._id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && <p className="p-8 text-center text-gray-500">No products in database.</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductsManager;