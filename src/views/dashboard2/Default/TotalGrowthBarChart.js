//  React import
import { useState, useEffect } from 'react';

// Mui import
import { Grid, MenuItem, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { BarChart } from '@mui/icons-material';
import { StackedLineChart } from '@mui/icons-material';

//  project import

import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import TotalSalesBarChart from './TotalSalesBarChart';
import TotalSalesLineChart from './TotalLineChart';
import { menuFilterTypeChart } from 'store/thunk/dashboardThunk';
import { useAppDispatch } from 'store';

//  third party import
import PropTypes from 'prop-types';

//  linechart/barchart switch value
const statusNew = [
  {
    value: 'linechart',
    label: <StackedLineChart />
  },
  {
    value: 'barchart',
    label: <BarChart />
  }
];

// bar chart dropdown value
const status = [
  {
    value: 'ad_spend',
    label: 'Ad Spend'
  },
  {
    value: 'total_attributed_sales',
    label: 'Ad Sales'
  },
  {
    value: 'clicks',
    label: 'Total Clicks'
  }
];

const TotalGrowthBarChart = ({ isLoading }) => {
  const dispatch = useAppDispatch();
  const [newValue, setNewValue] = useState('ad_spend');
  const [value, setValue] = useState('linechart');
  useEffect(() => {
    dispatch(menuFilterTypeChart({ metricsFilterTypeChart: newValue }));
  }, [newValue]);

  //  change the value of bar chart as per status
  const handleChange = (e) => {
    dispatch(menuFilterTypeChart({ metricsFilterTypeChart: e.target.value }));
    setNewValue(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard sx={{ height: '100%' }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography sx={{ mb: '10px', color: '#5d5d5d' }} variant="h4">
                    Total PPC Performance
                  </Typography>
                  <ToggleButtonGroup
                    value={value}
                    aria-label="Small sizes"
                    exclusive
                    onChange={(e, newValue) => setValue(newValue)}
                  >
                    {statusNew.map((option) => (
                      <ToggleButton key={option.value} value={option.value}>
                        {option.label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
                {value == 'barchart' && (
                  <Grid item>
                    <TextField id="standard-select-currency" select value={newValue} onChange={(e) => handleChange(e)}>
                      {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {value == 'linechart' ? (
                <TotalSalesLineChart isLoading={isLoading} />
              ) : (
                <TotalSalesBarChart isLoading={isLoading} />
              )}
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
