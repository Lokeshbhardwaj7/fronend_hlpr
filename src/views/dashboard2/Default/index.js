import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
// project imports
import AdPerformance from './AdPerformance';

// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

import Awareness from './Awareness';

import PpcTotalPerformance from './PpcTotalPerformance';
import moment from 'moment';
import { getPPCDashboardDataByDate } from 'store/thunk/dashboardThunk';
import { useAppSelector, useAppDispatch } from 'store';
import { notificationSuccess } from 'store/slices/notificationSlice';
import Messages from '../../../utils/messages';
import { Loader } from 'rsuite';

const Dashboard = () => {
  const [shouldCallAPI, setShouldCallAPI] = useState(false);
  const dataLoading = useAppSelector((state) => state.dataLoading);

  const datePicker = useAppSelector(
    (state) => state.dashboardSlice.date,
    (prevDate, nextDate) => prevDate === nextDate
  );

  const storeId = useAppSelector((state) => state.dashboardSlice.storeId);
  const menuFilterType = useAppSelector((state) => state.dashboardSlice.menuFilterType);

  const menuFilterTypeChart = useAppSelector((state) => state.dashboardSlice.menuFilterTypeChart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (menuFilterType && menuFilterTypeChart && datePicker) {
      if (Array.isArray(storeId) && storeId.length === 0) {
        return;
      }
      setShouldCallAPI(true);
    }
  }, [storeId]);

  useEffect(() => {
    if (shouldCallAPI) {
      const storedValue = JSON.parse(localStorage.getItem('user_data'));
      let store = {
        startDate: datePicker?.startDate
          ? moment(datePicker?.startDate).format('YYYY-MM-DD')
          : moment().subtract(6, 'days').format('YYYY-MM-DD'),
        endDate: datePicker?.endDate
          ? moment(datePicker?.endDate).format('YYYY-MM-DD')
          : moment().startOf('day').format('YYYY-MM-DD'),
        comparison_startDate: datePicker?.comparison_startDate
          ? moment(datePicker?.comparison_startDate).format('YYYY-MM-DD')
          : moment().subtract(13, 'days').format('YYYY-MM-DD'),
        comparison_endDate: datePicker?.comparison_endDate
          ? moment(datePicker?.comparison_endDate).format('YYYY-MM-DD')
          : moment().startOf(7, 'day').format('YYYY-MM-DD'),
        store_id: storeId || storedValue?.data?.store_id,
        metricsFilterType: menuFilterType?.metricsFilterType,
        menuFilterTypeChart: menuFilterTypeChart?.metricsFilterTypeChart
      };
      dispatch(getPPCDashboardDataByDate(store));
    }
  }, [datePicker, storeId, shouldCallAPI, menuFilterTypeChart, menuFilterType]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('success');
  useEffect(() => {
    if (myParam == 'true') {
      dispatch(notificationSuccess(Messages.SUCCESS.PAYMENTSUCCESSFULL));
    }
  }, [myParam]);

  return (
    <>
      {dataLoading?.loading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999
          }}
        >
          <Loader />
        </div>
      )}
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            

            <Grid item lg={4} xs={12} md={4}>
              <Grid container spacing={gridSpacing}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <AdPerformance isLoading={isLoading} />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <PpcTotalPerformance isLoading={isLoading} />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <Awareness isLoading={isLoading} />
                </Grid>
              </Grid>
            </Grid>

           

           
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
