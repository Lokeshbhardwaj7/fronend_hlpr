import React from 'react';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import { useAppSelector } from 'store';
import MainCard from 'ui-component/cards/MainCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, useTheme } from '@mui/system';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NoDataContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '200px',
  color: (theme) => theme.palette.text.secondary,
  fontSize: '1.2rem'
});

const Icon = styled(SentimentVeryDissatisfiedIcon)({
  fontSize: '4rem',
  marginBottom: (theme) => theme.spacing(1)
});

const OrganicVsAdSales = () => {
  const theme = useTheme();

  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);
  const totalSales = dashboardData?.data?.total_sale || 0;
  const adSales = dashboardData?.data?.ad_sales || 0;
  const organicSales = dashboardData?.data?.organic_sales || 0;

  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const organicPercentage = (organicSales / parseFloat(totalSales)) * 100;
  const adPercentage = (adSales / parseFloat(totalSales)) * 100;

  const chartOptions = {
    tooltip: {
      followCursor: true,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return `${y < 0 ? '-$' : '$'}${Math.abs(y).toLocaleString()}`;
          }
          return y;
        }
      }
    },
    labels: ['Organic Sales', 'Ad Sales'],
    series: [parseFloat(organicSales), parseFloat(adSales)],
    colors: [primaryDark, secondaryMain],

    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, { seriesIndex }) {
        // Display percentages in the pie chart itself with two decimal places
        return seriesIndex === 0 ? `${organicPercentage.toFixed(2)}%` : `${adPercentage.toFixed(2)}%`;
      }
    }
  };

  const hasData = totalSales !== 0 || adSales !== 0 || organicSales !== 0;

  return (
    <MainCard sx={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 550,
              color: '#5d5d5d'
            }}
          >
            Organic vs Ad Sales %
            <IconButton>
              <Tooltip title="This Chart shows the diffrence between Organic Sales vs Ad Sales">
                <InfoOutlinedIcon />
              </Tooltip>
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {hasData ? (
            <Chart options={chartOptions} series={chartOptions.series} type="pie" width="500" />
          ) : (
            <NoDataContainer>
              <Icon />
              No data found for the chart.
            </NoDataContainer>
          )}
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default OrganicVsAdSales;
