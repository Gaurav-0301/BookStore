import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
Courses
import Courses from './Pages/Courses';

import ProtectedRoute from './Components/ProctedRoute/Protect.route'; // Import it

import HomePage from './Pages/HomePage';
import { Toaster } from 'react-hot-toast';
import ContactPage from './Pages/ContactPage';
import Aboutpage from './Pages/Aboutpage';

function App() {
  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
    <Routes>
  <Route path="/" element={<HomePage />} />
 
  
  <Route 
    path="/contact" 
    element={
      <ProtectedRoute>
        <ContactPage />
      </ProtectedRoute>
    } 
  />


  <Route 
    path="/courses" 
    element={
      <ProtectedRoute>
        <Courses />
      </ProtectedRoute>
    } 
  />
    <Route path="/about" element={<Aboutpage />} />

</Routes>

</>
  );
}

export default App;