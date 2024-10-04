// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Md. Nazim Uddin. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
