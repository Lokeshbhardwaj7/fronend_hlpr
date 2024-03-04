import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import { setUserData, setUserDetails } from 'store/slices/authSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';

export const loginUser = createAsyncThunk('loginUser', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const { username, password, navigate } = _request;
    const response = await apiClient().post(`/sign-in`, { username, password });
    console.log("response", response)
    dispatch(setLoading(false));
    if (response?.data && response?.data.token) {
      if (response?.data && response?.data?.data?.user_type === 1) {
        navigate('/sellers');
      } else {
        navigate('/dashboard');
      }

      localStorage.setItem('user_data', JSON.stringify(response?.data));
      dispatch(setUserData(response?.data));
      dispatch(notificationSuccess(Messages.SUCCESS.LOGIN));
    } else {
      dispatch(notificationFail('Failed to login using this credentials' || Messages.ERROR.LOGIN));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.LOGIN));
  }
});

export const loginWithGoogle = createAsyncThunk('loginWithGoogle', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const { google_access_token, navigate } = _request;
    const response = await apiClient().post(`auth/google-login`, { google_access_token: google_access_token });

    dispatch(setLoading(false));
    if (response?.data && response?.data.accessToken) {
      localStorage.setItem('user_data', JSON.stringify(response?.data));
      dispatch(setUserData(response?.data));
      dispatch(notificationSuccess(Messages.SUCCESS.LOGIN));
      navigate('/dashboard');
    } else {
      dispatch(notificationFail('Failed to login using this credentials' || Messages.ERROR.LOGIN));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.LOGIN));
  }
});

export const registerUser = createAsyncThunk('registerUser', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`sign-up`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      console.log("response00000", response)
      // dispatch(notificationSuccess(response.data.message));
      _request.callbackFunc();
      _request.navigate('/login');
      dispatch(notificationSuccess(response.data.message));
    } else {
      console.log("errrrrrror", response)
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.REGISTER));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.REGISTER));
  }
});

export const createJob = createAsyncThunk('createJob', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    console.log('newwwwwwdata', _request)
    const response = await apiClient().post(`job/create`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      console.log("response00000", response)
      // dispatch(notificationSuccess(response.data.message));
      dispatch(notificationSuccess(response.data.message));
    } else {
      console.log("errrrrrror", response)
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.REGISTER));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.REGISTER));
  }
});


export const registerEmployer = createAsyncThunk('registerEmployer', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`employer/sign-up`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      console.log("response00000", response)
      // dispatch(notificationSuccess(response.data.message));
      _request.callbackFunc();
      _request.navigate('/login');
      dispatch(notificationSuccess(response.data.message));
    } else {
      console.log("errrrrrror", response)
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.REGISTER));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.REGISTER));
  }
});

export const forgetPassword = createAsyncThunk('forgetPassword', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const { email, navigate } = _request;
    const response = await apiClient().post(`auth/forgot-password`, { email });
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(Messages.SUCCESS.RESETSUCCESS));
      navigate('/login');
    } else {
      dispatch(notificationFail(Messages.ERROR.RESETFAIL));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const accountPasswordUpdate = createAsyncThunk('accountPasswordUpdate', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const { navigate } = _request;
    const response = await apiClient().post(`auth/reset-password`, _request?.cpassword);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      navigate('/login');
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const verifyAccountPassword = createAsyncThunk('verifyAccountPassword', async (_request, { dispatch }) => {
  const { verify_code } = _request.cpassword;
  try {
    dispatch(setLoading(true));
    const { navigate } = _request;
    const response = await apiClient().put(`auth/set-password/${verify_code?.id}/${verify_code?.avc}`, _request?.cpassword);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      navigate('/login');
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const getUserDetails = createAsyncThunk('getUserDetails', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`users/user/${_request.id}`);
    dispatch(setUserDetails(response?.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const logout = createAsyncThunk('logout', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    await apiClient().get(`auth/logout`);
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});
