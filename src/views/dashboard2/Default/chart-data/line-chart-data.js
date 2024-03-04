// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

const chartData = {
  height: 480,
  type: 'line',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    dataLabels: {
      enabled: false
    },

    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 0,
      max: 360
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: 'Total Order'
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: 'Investment',
      data: [35, 35, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
    },
    {
      name: 'Loss',
      data: [35, 15, 15, 35, 65, 40, 20, 25, 15, 35, 25, 75]
    },
    {
      name: 'Profit',
      data: [35, 11, 35, 35, 20, 10, 100, 10, 65, 45, 30, 10]
    },
    {
      name: 'Maintenance',
      data: [0, 0, 40, 0, 0, 30, 0, 0, 0, 0, 22, 0]
    }
  ]
};

export default chartData;
