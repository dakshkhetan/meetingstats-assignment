import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ meetings }) => {
  const dailyMeetingsCount = meetings.map((day) => day.count);
  const dailyMeetingsDateLabels = meetings.map((day) => day.date);

  const data = {
    labels: dailyMeetingsDateLabels,
    datasets: [
      {
        label: "Daily Meetings Count",
        data: dailyMeetingsCount,
        fill: false,
        backgroundColor: "rgb(203, 48, 81)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          type: "linear",
          ticks: {
            beginAtZero: true,
            stepSize: 1
          },
          gridLines: {
            drawOnArea: false
          }
        }
      ]
    }
  };

  return <Line data={data} options={options} height={400} />;
};

export default LineChart;
