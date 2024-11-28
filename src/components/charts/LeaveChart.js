import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LeaveChart = ({ data }) => {
  const chartData = {
    labels: ["Sick Leave", "Earned Leave", "Casual Leave"],
    datasets: [
      {
        data: [data.sickLeave, data.earnedLeave, data.casualLeave],
        backgroundColor: ["#00b4d8", "#44797F", "#9e65f9"],
        hoverBackgroundColor: ["#48cae4", "#3a6368", "#ca7df9"],
      },
    ],
  };
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
  };

  return (
    <div className="max-w-xs mx-auto">
      <p className="text-base font-medium text-black">Leaves</p>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default LeaveChart;
