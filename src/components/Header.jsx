// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Md. Nazim Uddin</h1>
        <nav className="flex space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
