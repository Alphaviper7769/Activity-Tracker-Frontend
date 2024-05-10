// // src/PieGraphComponent.js
// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// function PieGraphComponent({ data }) {
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
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(75, 192, 192, 0.6)',
//           'rgba(153, 102, 255, 0.6)',
//           'rgba(255, 159, 64, 0.6)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//         hoverBackgroundColor: [
//           'rgba(255, 99, 132, 0.8)',
//           'rgba(54, 162, 235, 0.8)',
//           'rgba(255, 206, 86, 0.8)',
//           'rgba(75, 192, 192, 0.8)',
//           'rgba(153, 102, 255, 0.8)',
//           'rgba(255, 159, 64, 0.8)',
//         ],
//         hoverBorderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         data: data ? data.map(item => item.value) : sampleData.map(item => item.value),
//       },
//     ],
//   };

//   return (
//     // <div className="mt-8">
//     //   <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
//     //   <div style={{ height: '400px', width: '600px' }}>
//     //     <Pie data={chartData} />
//     //   </div>
//     // </div>
//     <h1>PieGraph</h1>
//   );
// }

// export default PieGraphComponent;



// src/PieGraphComponent.js

// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// function PieGraphComponent() {
//   const data = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [
//       {
//         data: [300, 50, 100],
//         backgroundColor: ['red', 'blue', 'yellow'],
//         hoverBackgroundColor: ['red', 'blue', 'yellow'],
//       },
//     ],
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Simple Pie Chart</h2>
//       <div style={{ height: '400px', width: '600px' }}>
//         <Pie data={data} />
//       </div>
//     </div>
//   );
// }

// export default PieGraphComponent;

// src/PieGraphComponent.js

// import React from 'react';
// import { PieChart, Pie, Legend, Tooltip } from 'recharts';

// function PieGraphComponent() {
//   const data = [
//     { name: 'Red', value: 300 },
//     { name: 'Blue', value: 50 },
//     { name: 'Yellow', value: 100 },
//   ];

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Simple Pie Chart with Recharts</h2>
//       <div style={{ height: '400px', width: '600px' }}>
//         <PieChart width={600} height={400}>
//           <Pie dataKey="value" data={data} nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </div>
//     </div>
//   );
// }

// export default PieGraphComponent;

// src/PieGraphComponent.js

import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

function PieGraphComponent({ data }) {
  // Sample data if no data is provided
  const sampleData = [
    { label: 'Category 1', value: 30 },
    { label: 'Category 2', value: 20 },
    { label: 'Category 3', value: 50 },
  ];

  const chartData = data ? data : sampleData;

  return (
    <div className="mt-8">
      <h2 className="text-xl text-center font-semibold mb-4">Pie Chart</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <PieChart width={600} height={400}>
          <Pie
            dataKey="value"
            data={chartData}
            nameKey="label"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default PieGraphComponent;
