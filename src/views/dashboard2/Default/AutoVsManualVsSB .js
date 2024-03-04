import { Grid, IconButton, MenuItem, TextField, Tooltip, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useAppSelector, useAppDispatch } from 'store';
import MainCard from 'ui-component/cards/MainCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { menuFilterType } from 'store/thunk/dashboardThunk';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useTheme } from '@mui/system';

const NoDataContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '300px',
  color: (theme) => theme.palette.text.secondary,
  fontSize: '1.2rem'
});

const Icon = styled(SentimentVeryDissatisfiedIcon)({
  fontSize: '4rem',
  marginBottom: (theme) => theme.spacing(1)
});

const status = [
  {
    value: 'ad_spend',
    label: 'Ad Spend'
  },
  {
    value: 'impressions',
    label: 'Impressions'
  },
  {
    value: 'clicks',
    label: 'Clicks'
  },
  {
    value: 'total_attributed_sales',
    label: 'Total Attributed Sales'
  }
];

const AutoVsManualVsSB = () => {
  const theme = useTheme();

  const [value, setValue] = useState('ad_spend');
  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;

  const dispatch = useAppDispatch();
  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);
  const autoCampaign = parseFloat(dashboardData?.pieChart?.autoCampaign) || 0;
  const manualCampaign = parseFloat(dashboardData?.pieChart?.manualCampaign) || 0;
  const SbCampaign = parseFloat(dashboardData?.pieChart?.sbCampaign) || 0;

  const chartOptions = {
    labels: ['Auto', 'Manual', 'SB'],
    series: [autoCampaign, manualCampaign, SbCampaign],
    colors: [primary200, secondaryMain, primaryDark],
    legend: {
      position: 'bottom'
    },
    tooltip: {
      followCursor: true,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return `${Math.abs(y).toLocaleString()}`;
          }
          return y;
        }
      }
    }
  };

  useEffect(() => {
    dispatch(menuFilterType({ metricsFilterType: value }));
  }, [value]);

  const handleChange = (e) => {
    dispatch(menuFilterType({ metricsFilterType: e.target.value }));
    setValue(e.target.value);
  };

  const hasData = autoCampaign !== 0 || manualCampaign !== 0;

  return (
    <MainCard sx={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 550,
                  color: '#5d5d5d'
                }}
              >
                Campaign Type Performance
                <IconButton>
                  <Tooltip title="This Chart shows the performance of Campaign Type ">
                    <InfoOutlinedIcon />
                  </Tooltip>
                </IconButton>
              </Typography>
            </Grid>

            <Grid item>
              <TextField id="standard-select-currency" select value={value} onChange={(e) => handleChange(e)}>
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
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

export default AutoVsManualVsSB;
