import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import { useAppSelector } from 'store';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalSalesLineChart = ({ isLoading }) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);

  const { navType } = customization;
  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const darkLight = theme.palette.dark.light;

  const lineChartData = {
    height: 480,
    type: 'line',
    options: {
      colors: [primary200, primaryDark, secondaryMain, darkLight],
      chart: {
        stacked: false,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },

      dataLabels: {
        enabled: false
      },

      xaxis: {
        type: 'datetime',
        categories: dashboardData?.date
      },

      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1
      },

      tooltip: {
        followCursor: true,
        y: {
          formatter: function (value, { seriesIndex }) {
            if (seriesIndex === 0 || seriesIndex === 1) {
              return '$' + value.toLocaleString();
            }
            return value;
          }
        }
      }
    },
    series: [
      {
        name: 'Ad Sales',
        data: dashboardData?.ad_sales,
        yAxisIndex: 0
      },
      {
        name: 'Ad Spends',
        data: dashboardData?.ad_spends,
        yAxisIndex: 0
      },
      {
        name: 'Total Clicks',
        data: dashboardData?.total_clicks,
        yAxisIndex: 1
      }
    ]
  };

  // ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

  useEffect(() => {
    const newChartData = {
      ...lineChartData.options
    };

    if (!isLoading) {
      ApexCharts.exec(`line-chart`, 'updateOptions', newChartData);
    }
  }, [navType, primary200, primaryDark, secondaryMain, isLoading]);

  return <Chart {...lineChartData} />;
};

TotalSalesLineChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalSalesLineChart;
