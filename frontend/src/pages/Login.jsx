import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // 1. ALL state variables must live inside this component bracket!
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  
  const navigate = useNavigate();

  // 2. The Submit Function
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear old errors

    try {
      const response = await fetch('https://medha-nusantara-app.vercel.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        // SUCCESS! Save the token to the browser's vault
        localStorage.setItem('adminToken', data.token);
        // Kick them into the dashboard
        navigate('/admin');
      } else {
        // WRONG PASSWORD! Show the error
        setError(data.message);
      }
    } catch (err) {
      setError('Server is down. Turn on backend.');
    }
  };

  // 3. The Visual Render
  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-center font-bold text-gray-900">Admin Access</h1>
      <p className="text-sm text-muted-foreground text-center mt-2">Secure login for Medha Nusantara personnel.</p>

      <form className="mt-10 bg-cream rounded-lg p-8 space-y-5 shadow-md" onSubmit={handleLogin}>
        
        {/* The Error Message Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-md text-xs text-center font-bold">
            {error}
          </div>
        )}

        {/* Username Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Username</label>
          <input
            type="text"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 h-11 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Password</label>
          <input
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 h-11 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        {error && <p className="text-red-500 text-xs text-center">{error}</p>}
        
        <button
          type="submit"
          className="w-full h-12 rounded-md bg-primary text-white font-bold hover:opacity-90 transition-opacity"
        >
          Sign In
        </button>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Authorized personnel only. <Link to="/contact" className="text-primary underline hover:text-gray-900">Contact IT</Link> if locked out.
        </p>
      </form>
    </section>
  );
};

export default Login;