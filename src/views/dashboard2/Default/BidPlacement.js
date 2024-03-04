import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const BidPlacement = () => {
  const chartOptions = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    series: [10, 5, 87, 44, 6],
    colors: ['#e4444c', '#78dcf8', '#3c1c24', '#9b6478', '#cba7b6'],
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
            Bid Placement
            <IconButton>
              <Tooltip title="This Chart shows the details of Bid Placement">
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

export default BidPlacement;
