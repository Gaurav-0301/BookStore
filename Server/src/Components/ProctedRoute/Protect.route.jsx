import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("You need to login/signup first!!");
    }
  }, [isAuthenticated]); // Only runs when authentication status changes

  if (!isAuthenticated) {
    // Redirect to home page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the children (e.g., Courses)
  return children;
};

export default ProtectedRoute;