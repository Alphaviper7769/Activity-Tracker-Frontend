// src/LogTableComponent.js
import React from "react";

function LogTableComponent({ data }) {
  return (

        // <tbody>
        //   {data.map((entry, index) => (
        //     <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
        //       <td className="border border-gray-400 px-4 py-2">{entry.date}</td>
        //       <td className="border border-gray-400 px-4 py-2">{entry.time}</td>
        //       <td className="border border-gray-400 px-4 py-2">{entry.action}</td>
        //       {/* Add more table cells for additional data */}
        //     </tr>
        //   ))}
        // </tbody>
        
    <>
      <div className="mt-8">
        <h2 className="text-xl text-center font-semibold mb-4">Log Table</h2>
        <table className="w-full border-collapse border border-gray-400">

          <thead>

            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Date</th>
              <th className="border border-gray-400 px-4 py-2">Time</th>
              <th className="border border-gray-400 px-4 py-2">Action</th>
              {/* Add more table headers as needed */}
            </tr>

          </thead>

            add tbody
          
        </table>
      </div>
    </>
  );
}

export default LogTableComponent;
