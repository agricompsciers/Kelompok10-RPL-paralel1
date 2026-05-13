import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the browser vault has a token
  const token = localStorage.getItem('adminToken');

  if (!token) {
    // If no token, kick them back to the login page immediately
    return <Navigate to="/login" replace />;
  }

  // If they have a token, let them see the page
  return children;
};

export default ProtectedRoute;