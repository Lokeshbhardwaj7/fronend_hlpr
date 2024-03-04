import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const MatchTypeChart = () => {
  const chartOptions = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    series: [77, 52, 16, 32, 56],
    colors: ['#0a63ad', '#eebf95', '#a15938', '#7b9ebb', '#775DD0'],
    legend: {
      position: 'bottom'
    }
  };

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
            Match Type
            <IconButton>
              <Tooltip title="This Chart shows the details of Match Type">
                <InfoOutlinedIcon />
              </Tooltip>
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Chart options={chartOptions} series={chartOptions.series} type="pie" width="500" />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default MatchTypeChart;
