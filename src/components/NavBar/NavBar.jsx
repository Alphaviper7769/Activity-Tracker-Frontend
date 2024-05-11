import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-purple-500 to-blue-500 w-1/6 h-full flex flex-col justify-center items-center">
      <Link to="/dashboard" className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Dashboard</Link>
      <Link to="/blacklist" className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Blacklist</Link>
      <button className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Sign Out</button>
    </nav>
  );
};

export default Navbar;
