import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // 1. THE STATE: This is React's version of grabbing IDs.
  // These variables automatically update every time you type a letter.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // This hook lets us redirect the user after a successful login
  const navigate = useNavigate();

  // 2. THE SUBMIT FUNCTION: This intercepts the form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Stops the page from doing a hard refresh
    
    // For now, let's just log it to prove the wiring works.
    console.log("Attempting login with:", { username, password });
    
    // LATER: This is where we will write the fetch() request to your backend.
    // If the backend sends back the JWT token, we will do:
    // navigate('/admin');
  };

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-center font-bold text-gray-900">Admin Access</h1>
      <p className="text-sm text-muted-foreground text-center mt-2">Secure login for Medha Nusantara personnel.</p>
      
      {/* Notice the onSubmit handler pointing to our function */}
      <form className="mt-10 bg-cream rounded-lg p-8 space-y-5 shadow-md" onSubmit={handleLogin}>
        
        {/* Username Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Username</label>
          <input 
            type="text" 
            value={username} // Bound to state
            onChange={(e) => setUsername(e.target.value)} // Updates state on every keystroke
            required
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 h-11 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Password</label>
          <input 
            type="password" 
            value={password} // Bound to state
            onChange={(e) => setPassword(e.target.value)} // Updates state on every keystroke
            required
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 h-11 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
          />
        </div>

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
}

export default Login;