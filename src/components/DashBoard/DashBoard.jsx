// src/App.js
import React, { useState, useEffect } from 'react';
import SwitchComponent from './SwitchComponent';
import PieGraphComponent from './PieGraphComponent';
import BarGraphComponent from './BarGraphComponent';
import LogTableComponent from './LogTableComponent';

function DashBoard() {
  const [selectedGraph, setSelectedGraph] = useState('pie'); // State to manage selected graph

  // Fetch data from backend
  useEffect(() => {
    // Fetch data here
  }, []);

return (
    <div className="DashBoard">
        <header className="text-center mt-8">
            <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
            <p className="text-lg">Today you have used the Browser for 10 hours</p> {/* Replace <x> with actual hours */}
        </header>
        <main>
            <SwitchComponent selectedGraph={selectedGraph} setSelectedGraph={setSelectedGraph} />
            <div className='flex justify-center items-center'>
                {selectedGraph === 'pie' ? <PieGraphComponent /> : <BarGraphComponent />}
            </div>
            <LogTableComponent />
        </main>
    </div>
);
}

export default DashBoard;
