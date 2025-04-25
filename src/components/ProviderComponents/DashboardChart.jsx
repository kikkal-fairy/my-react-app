import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const DashboardChart = ({ bookings }) => {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const advisers = bookings.filter(applicant => applicant.type == "adviser").length;
  const individuals = bookings.filter(applicant => applicant.type == "individual").length;

  const data = {
  labels: ['Individuals', 'Advisers'],
  datasets: [
    {
      label: 'Total Applicants',
      data: [individuals, advisers],
      backgroundColor: [
        'rgb(0, 232, 255)',
        'rgb(71, 0, 255)'
      ]
    },
  ],
  };

  return (
    <div className="dashboard-chart">
      <Doughnut data={data} />
    </div>
  )}

export default DashboardChart;