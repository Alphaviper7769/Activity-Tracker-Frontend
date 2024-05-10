// src/SwitchComponent.js
import React from 'react';

function SwitchComponent({ selectedGraph, setSelectedGraph }) {
  const handleSwitch = () => {
    // Toggle between 'pie' and 'bar' graph
    setSelectedGraph(selectedGraph === 'pie' ? 'bar' : 'pie');
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`mx-2 px-4 py-2 rounded ${selectedGraph === 'pie' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => setSelectedGraph('pie')}
      >
        Pie Graph
      </button>
      <button
        className={`mx-2 px-4 py-2 rounded ${selectedGraph === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => setSelectedGraph('bar')}
      >
        Bar Graph
      </button>
      <div
        className={`w-10 h-6 bg-white rounded-full shadow-inner cursor-pointer ${selectedGraph === 'bar' ? 'transform translate-x-6' : ''}`}
        onClick={handleSwitch}
      />
    </div>
  );
}

export default SwitchComponent;
