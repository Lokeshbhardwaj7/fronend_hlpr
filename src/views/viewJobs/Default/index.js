import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import PopularCard from './PopularCard';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'store';
import { viewJobList } from 'store/thunk/dashboardThunk';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const { jobsList } = useAppSelector((state) => state.dashboardSlice);
  const userData = useSelector((state) => state.authorization.userData);
  console.log("userData", userData);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = {
      id: userData?.id
    }
    dispatch(viewJobList(data));
  }, []);

  useEffect(() => {
    if (jobsList) {
      setLoading(false);
    }
  }, [jobsList]);
  console.log("jobsList", jobsList);
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

export default Dashboard;
