import { useEffect, useState } from 'react';

// material-ui
import {
  Grid
  //  Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography
} from '@mui/material';
import // useTheme
// styled
'@mui/material/styles';

// assets
// import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
// import MainCard from 'ui-component/cards/MainCard';

// project imports
// import AdPerformance from './AdPerformance';

// import TotalPerformance from './TotalPerformance';

import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
// import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// import Awareness from './Awareness';
import MatchTypeChart from './MatchTypeChart';
import OrganicVsAdSales from './OrganicVsAdSales';
import AutoVsManualVsSB from './AutoVsManualVsSB ';
import BidPlacement from './BidPlacement';
import AdPerformance1 from './AdPerformance1';
import TotalPerformance1 from './TotalPerformance1';
import Awareness1 from './Awareness1';

// ==============================|| DEFAULT DASHBOARD ||============================== //

//styles
// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.dark,
//   color: theme.palette.primary.light,
//   overflow: 'hidden',
//   position: 'relative',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: '50%',
//     top: -30,
//     right: -180
//   },
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
//     borderRadius: '50%',
//     top: -160,
//     right: -130
//   }
// }));

const Dashboard = () => {
  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);

  // const theme = useTheme();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <AdPerformance1 isLoading={isLoading} />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TotalPerformance1 isLoading={isLoading} />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Awareness1 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={12} xs={12} md={8}>
              <TotalGrowthBarChart isLoading={isLoading} />
            </Grid>
            <Grid item lg={6} xs={12} md={8}>
              <OrganicVsAdSales isLoading={isLoading} />
            </Grid>

            <Grid item lg={6} xs={12} md={8}>
              <AutoVsManualVsSB isLoading={isLoading} />
            </Grid>

            <Grid item lg={6} xs={12} md={8}>
              <BidPlacement isLoading={isLoading} />
            </Grid>

            <Grid item lg={6} xs={12} md={8}>
              <MatchTypeChart isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </>
      ;
    </Grid>
  );
};

export default Dashboard;
