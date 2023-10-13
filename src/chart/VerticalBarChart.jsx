import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const VerticalBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [
        {
          label: 'Students',
          data: [34, 34, 107, 200, 300, 500],
          backgroundColor: 'royalblue',
          type: 'bar',
          yAxisID: 'students',
        },
        {
          label: 'Countries',
          data: [1, 1, 1, 2, 3, 5],
          backgroundColor: 'lightgreen',
          type: 'bar',
          yAxisID: 'countries',
        },
      ],
    };

    const options = {
      scales: {
        students: {
          beginAtZero: true,
          max: 500,
          ticks: {
            stepSize: 100,
          },
        },
        countries: {
          beginAtZero: true,
          max: 5,
          ticks: {
            stepSize: 1,
          },
        },
      },
    };

    const chart = new Chart(ctx, {
      type: 'bar',
      data,
      options,
    });

    chartRef.current = chart;
  }, []);

  return (
    <div className=" p-4 rounded-lg shadow-md w-2/3 m-auto mt-5">
        <h1 class = 'text-center font-semibold text-xl my-5'> The Growth of A2SV</h1>
      <canvas ref={chartRef} />
    </div>
  );
};

export default VerticalBarChart;