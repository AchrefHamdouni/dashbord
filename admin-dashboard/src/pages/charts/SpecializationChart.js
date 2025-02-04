import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const SpecializationChart = ({ doctorsCount, patientsCount }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Doctors", "Patients"],
          datasets: [
            {
              data: [doctorsCount, patientsCount],
              backgroundColor: ["#FF6384", "#36A2EB"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
        },
      });

      return () => {
        newChartInstance.destroy();
      };
    }
  }, [doctorsCount, patientsCount]);

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default SpecializationChart;