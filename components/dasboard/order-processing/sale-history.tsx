"use client";

import { useEffect, useRef } from "react";

var options = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  },
};

const SaleHistory = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      import("apexcharts").then(({ default: ApexCharts }) => {
        const chart = new ApexCharts(ref.current, options);
        chart.render();
      });
    }
  }, [options]);

  return (
    <div className="bg-white w-1/2 p-5">
      <h1>Sales History</h1>
      <div id="chart" ref={ref}></div>
    </div>
  );
};

export default SaleHistory;
