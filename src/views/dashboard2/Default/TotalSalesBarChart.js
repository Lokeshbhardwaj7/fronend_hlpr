import PropTypes from 'prop-types';
import { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import Chart from 'react-apexcharts';

// project imports
import { useAppSelector } from 'store';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalSalesBarChart = ({ isLoading }) => {
  const theme = useTheme();
  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);
  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  const color =
    dashboardData?.barChart?.name === 'Ad Spend'
      ? primaryDark
      : dashboardData?.barChart?.name === 'Ad Sales'
      ? primary200
      : secondaryMain;
  const chartData = {
    height: 480,
    type: 'bar',
    options: {
      colors: color,
      chart: {
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded'
        }
      },
      xaxis: {
        type: 'datetime',
        categories: dashboardData?.barChart?.dates
      },
      dropShadow: {
        enabled: true,
        opacity: 0.5,
        blur: 10,
        left: 5,
        top: 5
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 20,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5
        },
        itemMargin: {
          horizontal: 8,
          vertical: 8
        }
      },
      fill: {
        type: 'solid'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true
      },
      grid: {
        show: true
      },
      yaxis: [
        {
          labels: {
            style: {
              colors: [primary]
            }
          }
        }
      ]
    },

    series: [
      {
        name: dashboardData?.barChart?.name,
        data: dashboardData?.barChart?.values
      }
    ]
  };

  // ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

  useEffect(() => {
    const newChartData = {
      ...chartData.options,

      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },

      grid: {
        borderColor: grey200
      },
      tooltip: {
        theme: 'light'
      },
      legend: {
        labels: {
          colors: grey500
        }
      }
    };

    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500, dashboardData]);

  return <Chart {...chartData} />;
};

TotalSalesBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalSalesBarChart;
