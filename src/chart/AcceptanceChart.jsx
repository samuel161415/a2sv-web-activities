import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const AcceptanceChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if a chart already exists on the canvas
    const existingChart = Chart.getChart('0');
    if (existingChart) {
      // Destroy the existing chart
      existingChart.destroy();
    }

    // Create a new horizontal bar chart with labels on top of the bars
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4'], // Add labels on top of the bars
        datasets: [
          {
            label: 'Average Acceptance',
            data: [2, 27, 59, 70],
            backgroundColor: [
              'rgba(0, 191, 255, 0.7)',
              'rgba(65, 105, 225, 0.7)',
              'rgba(102, 204, 51, 0.7)',
              'rgba(173, 216, 230, 0.7)',
            ],
          },
        ],
      },
      options: {
        indexAxis: 'y', // Swap the axes to make it a horizontal bar chart
        scales: {
          x: { // Use the x scale for horizontal bar charts
            beginAtZero: true,
            max: 100,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        layout: {
          padding: 10, // Add padding to the chart area
        },
        tooltips: {
          enabled: false, // Disable tooltips
        },
      },
    });

    // Store the chart instance in a ref
    chartRef.current = newChart;
  }, []);

  return (
    <div className=" p-4 rounded-lg shadow-md w-2/3 m-auto mt-5">
      <canvas ref={chartRef} style={{ width: '50%' }} /> {/* Set the chart's width to 50% */}
    </div>
  );
};

export default AcceptanceChart;
