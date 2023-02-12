import React from "react";
import { Radar } from "react-chartjs-2";
import 'chart.js/auto';

const Chart = (allDayPredictions) => {
    console.log(allDayPredictions)
  const pieChartData = {
    labels: ["00 AM", "01 AM", "02 AM", "03 AM", "04 AM", "05 AM", "06 AM", "07 AM", "08 AM", "09 AM", "10 AM", "11 AM", "12 PM", "01 PM","02 PM","03 PM","04 PM","05 PM","06 PM","07 PM","08 PM","09 PM","10 PM","11 PM"],
    datasets: [{
        data: allDayPredictions.allDayPredictions,
        label: "Chances of Crime Happening",
        backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
    }]
  };
  const pieChart = (
    <Radar
      type="pie"
      width={100}
      height={20}
      options={{
        title: {
          display: true,
          text: "Crime Distribution",
          fontSize: 15
        },
        legend: {
          display: true,
          position: "top"
        },
        color:"white"
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};
export default Chart;