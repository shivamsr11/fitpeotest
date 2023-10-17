import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import React, { useState, Component } from "react";

const Charts = () =>{
    const [graph, setGraph] = useState({ options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [60, 40, 90, 65, 75, 30, 75, 90, 80, 70, 65, 75]
        }
      ]
    });

    const [myChart, setMyChart] = useState({
      series: [25, 40, 35],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    })
   
    return(
        <div className="flex   h-[47vh] bg-gray-100 ">
            <div className=" bg-white  h-[47vh] w-[90vh]  rounded-lg">
            <Chart
              options={graph.options}
              series={graph.series}
              type="bar"
              width="500"
            />
            </div>
            <div className=" bg-white  h-[47vh] w-[60vh]  ml-16 rounded-lg">
              <div className="mt-3 ml-3">
                <div className="font-bold ">Customers</div>
                <div className="text-sm font-gray-200">Customers that buy products</div>
              </div>
            <ReactApexChart className = "mt-3" options={myChart.options} series={myChart.series} type="donut" width={380} />
           </div>
        </div>
    )
}

export default Charts;