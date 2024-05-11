// // src/BarGraphComponent.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// function BarGraphComponent({ data }) {
//   // Sample data if no data is provided
//   const sampleData = [
//     { label: 'Category 1', value: 30 },
//     { label: 'Category 2', value: 20 },
//     { label: 'Category 3', value: 50 },
//   ];

//   const chartData = {
//     labels: data ? data.map((item, index) => `Label ${index + 1}`) : sampleData.map(item => item.label),
//     datasets: [
//       {
//         label: 'Data',
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
//         hoverBorderColor: 'rgba(54, 162, 235, 1)',
//         data: data ? data.map(item => item.value) : sampleData.map(item => item.value),
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     // <div className="mt-8">
//     //   <h2 className="text-xl font-semibold mb-4">Bar Graph</h2>
//     //   <div style={{ height: '400px', width: '600px' }}>
//     //     <Bar data={chartData} options={options} />
//     //   </div>
//     // </div>
//     <h1>BarGraph</h1>
//   );
// }

// export default BarGraphComponent;


// src/BarGraphComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function BarGraphComponent({ data }) {
  // Sample data if no data is provided
  const sampleData = [
    { label: 'Category 1', value: 30, color: '#8884d8' },
    { label: 'Category 2', value: 20, color: '#82ca9d' },
    { label: 'Category 3', value: 50, color: '#ffc658' },
  ];

  const chartData = data ? data : sampleData;

  return (
    <div className="mt-8">
      <h2 className="text-xl text-center font-semibold mb-4">Bar Graph</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <BarChart width={600} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default BarGraphComponent;
