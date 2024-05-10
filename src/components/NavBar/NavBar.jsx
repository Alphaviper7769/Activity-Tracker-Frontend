// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-purple-500 to-blue-500 w-1/6 h-full flex flex-col justify-center items-center">
      <button className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Button 1</button>
      <button className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Button 2</button>
      <button className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Button 3</button>
      <button className="text-white py-2 px-4 mb-4 rounded-lg hover:bg-yellow-500 focus:bg-red-500 focus:outline-none">Button 4</button>
    </nav>
  );
};

export default Navbar;
