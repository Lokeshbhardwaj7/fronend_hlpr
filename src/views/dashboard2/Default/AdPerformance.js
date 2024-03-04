import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

// project imports
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobListing } from 'store/thunk/dashboardThunk';

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const AdPerformance = ({ isLoading }) => {
  const dispatch = useDispatch()
  // dashboardData
  const theme = useTheme();

  useEffect(() => {
    dispatch(getJobListing())
  }, [])
  
  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <Card
          sx={{
            borderTop: `20px solid ${theme.palette.secondary[800]}`
          }}
        >
          <CardHeader title={<Typography className="report-card-title">Jobs</Typography>} />
          <CardContent sx={{ mt: '-40px' }}>

          </CardContent>
        </Card>
      )}
    </>
  );
};

AdPerformance.propTypes = {
  isLoading: PropTypes.bool
};

export default AdPerformance;
