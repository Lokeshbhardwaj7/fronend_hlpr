import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import { setAdminUserData } from 'store/slices/adminUserSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';
import { getUserDetails } from './authThunk';
import { setResetLoading } from 'store/slices/resetLoading';
import { setClientLoading } from 'store/slices/updateClientId';

export const getAdminUserList = createAsyncThunk('getAdminUserList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`/admin/list`);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setAdminUserData(response?.data?.data));
    } else {
      dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const updateAdminUserData = createAsyncThunk('updateAdminUserData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().put(`/admin/edit/${_request.admin_user_id}`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(getAdminUserList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const accountSettingsUpdate = createAsyncThunk('accountSettingsUpdate', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().put(
      _request.user_type === 1 ? `admin/edit/${_request.id}` : `/users/update/${_request.id}`,
      _request
    );
    dispatch(setLoading(false));
    if (response?.data) {
      const profile = JSON.parse(localStorage.getItem('user_data'));
      Object.keys(response?.data).forEach((key) => {
        profile[key] = response?.data[key];
      });
      localStorage.setItem('user_data', JSON.stringify(profile));
      dispatch(notificationSuccess(response?.data?.message));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const accountPasswordChange = createAsyncThunk('accountPasswordChange', async (_request, { dispatch }) => {
  try {
    dispatch(setResetLoading(true));
    const response = await apiClient().put(`users/change-password/${_request?.id}`, _request);
    dispatch(setResetLoading(false));
    if (response?.data) {
      const profile = JSON.parse(localStorage.getItem('user_data'));
      Object.keys(response?.data).forEach((key) => {
        profile[key] = response?.data[key];
      });
      dispatch(notificationSuccess(response?.data?.message));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setResetLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const accountClientDetails = createAsyncThunk('accountClientDetails', async (_request, { dispatch }) => {
  try {
    dispatch(setClientLoading(true));
    const response = await apiClient().post(`users/check-wallmart-token`, _request);
    dispatch(setClientLoading(false));
    if (response?.data) {
      let request = {
        id: _request.id
      };
      dispatch(getUserDetails(request));
      dispatch(notificationSuccess(Messages.SUCCESS.SELLERCONNECTED));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setClientLoading(false));
    dispatch(notificationFail(Messages.ERROR.SELLERCONNECTEDFAIL));
  }
});

export const createAdminUserData = createAsyncThunk('createAdminUserData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`/users/create`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess('User created successfully'));
      dispatch(getAdminUserList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const deleteAdminUserData = createAsyncThunk('deleteAdminUserData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().delete(`/admin/delete/${_request.admin_user_id}`);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(getAdminUserList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});
