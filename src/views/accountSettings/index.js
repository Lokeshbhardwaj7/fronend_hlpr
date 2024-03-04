import React, { useState, useEffect } from 'react';

//  mui library
import { Box, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// project import
import AccountSettingsNew from './accountSettings';
import MainCard from 'ui-component/cards/MainCard';
import { useAppSelector, useAppDispatch } from 'store';
import { getUserDetails } from 'store/thunk/authThunk';
import { isUndefined } from 'lodash';

const AccountSettings = () => {
  const appDispatch = useAppDispatch();

  const [selectedTab, setSelectedTab] = useState(() => {
    const storedTab = localStorage.getItem('selectedTab');
    return storedTab ? parseInt(storedTab, 10) : 3;
  });
  const [disabledTab, setDisabledTab] = useState(false);
  const setUserData = useAppSelector((state) => state.authorization);
  const userData = setUserData?.userData?.data;
  const userDetails = useAppSelector((state) => state.authorization.userDetails);

  useEffect(() => {
    localStorage.setItem('selectedTab', selectedTab.toString());
  }, [selectedTab]);

  // updatePassword function
  useEffect(() => {
    if (!userDetails?.data?.stripePlanDetails || userDetails?.data?.is_subscribed == false || isUndefined(userDetails)) {
      if (userDetails?.data?.user_type === 2) {
        setDisabledTab(true);
        setSelectedTab(3);
      }
    }
  }, [userDetails]);

  // onClick function for change the tab
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    if (selectedTab >= 0) {
      let request = {
        id: userData?.id
      };
      appDispatch(getUserDetails(request));
    }
  }, [selectedTab]);

  // onsubmit function
  const TabPanel = ({ children, value, index }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <MainCard>
      <Tabs sx={{ background: 'white', borderRadius: '10px', mb: '-23px' }} value={selectedTab} onChange={handleTabChange}>
        <Tab label="General Settings" disabled={disabledTab} />
        <Tab label="User Management" disabled={disabledTab} />
        <Tab label="Store Management" disabled={disabledTab} />
        {userDetails?.data?.user_type === 2 && <Tab label="Billing" />}
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <AccountSettingsNew />
      </TabPanel>    
    </MainCard>
  );
};

export default AccountSettings;
