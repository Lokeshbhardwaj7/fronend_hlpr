import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store';
import { getStoreId, getStoreListData, storeSelection } from 'store/thunk/dashboardThunk';
import { setSelectedStoreIds } from 'store/slices/dashboardSlice';
import AnimateButton from 'ui-component/extended/AnimateButton';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Button } = require('@mui/material');

const DashboardStoreList = () => {
  const [userList, setUserList] = useState([]);
  const [storeListValue, setStoreListValue] = useState([]);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.authorization.userData);
  const storeList = useAppSelector((state) => state.dashboardSlice.storeList);
  useEffect(() => {
    const storedStoreId = JSON.parse(localStorage.getItem('user_data'));
    if (storedStoreId) {
      const defaultStore = storeList.find((store) => store?.userSetting?.store_id === parseInt(storedStoreId?.data?.store_id));
      if (defaultStore) {
        dispatch(setSelectedStoreIds([defaultStore]));
        setStoreListValue([defaultStore]); // Set it as an array
        dispatch(getStoreId([storedStoreId?.data?.store_id]));
      }
    }
  }, [storeList]);

  useEffect(() => {
    if (storeList && storeList.length > 0) {
      setUserList([...storeList]);
    }
  }, [storeList]);

  useEffect(() => {
    dispatch(getStoreListData());
  }, []);
  // storeListValue

  const handleSelectChange = (event) => {
    const selectedStoreNames = event.target.value;
    console.log('selectedStoreNames', selectedStoreNames);
    // Ensure at least one value is checked
    if (selectedStoreNames.length === 0) {
      dispatch(storeSelection());
      return;
    }

    if (selectedStoreNames.includes('all')) {
      dispatch(setSelectedStoreIds(userList));
      setStoreListValue(userList);
      return;
    }

    dispatch(setSelectedStoreIds(selectedStoreNames));
    setStoreListValue(selectedStoreNames);

    if (selectedStoreNames.length > 0) {
      dispatch(getStoreId(selectedStoreNames?.map((value) => value?.id)));
    }
  };

  const handleSelectAll = () => {
    dispatch(setSelectedStoreIds(userList));
    setStoreListValue(userList);
    dispatch(getStoreId(userList?.map((value) => value?.id)));
  };

  // const handleSelectAll = () => {
  //   // dispatch(setSelectedStoreIds(storeList));
  //   setStoreListValue(storeList);
  //   if (storeList && storeList.length > 0) {
  //     setUserList([...storeList]);
  //   }
  //   dispatch(getStoreId(storeList.map((store) => store.id)));
  // };
  return (
    <>
      {userList?.length === 1 && userList[0]?.store_name && !userList[0]?.userSetting ? (
        <AnimateButton>
          <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="warning"
              sx={{ mr: 2 }}
              onClick={() => navigate('/manage-store')}
            >
              Add Store
            </Button>
          </Box>
        </AnimateButton>
      ) : (
        <>
          {userData?.user_type !== 1 && (
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="choose-store-label">Choose Store</InputLabel>
              <Select
                sx={{ backgroundColor: 'warning' }}
                color="warning"
                labelId="choose-store-label"
                id="choose-store"
                multiple
                value={storeListValue.map((store) => store)} // Extract store names from storeListValue
                onChange={handleSelectChange}
                input={<OutlinedInput label="Choose Store" />}
                renderValue={(selected) => {
                  let temp = [];
                  selected?.map((val) => temp.push(val?.name));
                  return temp?.join(', ');
                }}
                MenuProps={MenuProps}
              >
                <MenuItem key="select-all" value="all" onClick={handleSelectAll}>
                  <Checkbox
                    checked={storeListValue.length === userList.length}
                    indeterminate={storeListValue.length > 0 && storeListValue.length < userList.length}
                  />
                  <ListItemText primary="Select All" />
                </MenuItem>
                {userList?.map((name, index) => (
                  <MenuItem key={name?.userSetting?.store_id || index} value={name}>
                    <Checkbox checked={storeListValue.some((store) => store?.id === name?.id)} />
                    <ListItemText primary={name.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </>
      )}
    </>
  );
};

export default DashboardStoreList;
