import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import PopularCard from './PopularCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'store';
import { ViewJobApplied } from 'store/thunk/dashboardThunk';
import { useLocation } from 'react-router';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const ViewAppliedJobs = () => {
  const locations = useLocation();
  console.log('locations', locations);
  const  jobsList  = useAppSelector((state) => state.dashboardSlice?.viewJobApplied);
  const userData = useSelector((state) => state.authorization.userData);
  console.log('userData', userData);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (locations?.state?.id) {
      const data = {
        id: locations?.state?.id
      };
      dispatch(ViewJobApplied(data));
    }
  }, [locations]);

  useEffect(() => {
    if (jobsList) {
      setLoading(false);
    }
  }, [jobsList]);
  console.log('jobsList', jobsList);
  return (
    <Grid container spacing={gridSpacing}>
      {jobsList?.map((value) => (
        <Grid item key={value.id} xs={12} md={4}>
          <PopularCard value={value} isLoading={isLoading} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewAppliedJobs;
