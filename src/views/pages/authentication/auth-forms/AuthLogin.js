import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { loginUser } from '../../../../store/thunk/authThunk';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setVerifyEmailMessage } from 'store/slices/authSlice';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const dataLoading = useAppSelector((state) => state.dataLoading);
  const verifyEmailMessage = useAppSelector((state) => state.authorization.verifyEmailMessage);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [open, setOpen] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (verifyEmailMessage) {
      setOpen(true);
    }
  }, [verifyEmailMessage]);

  const handleClose = () => {
    appDispatch(setVerifyEmailMessage(null));
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ '& .MuiDialogTitle-root': { backgroundColor: theme.palette.primary.main, color: '#fff' } }}
      >
        <DialogTitle sx={{ fontSize: '20px' }}>{'Verification Required'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Stack alignItems="center" spacing={2}>
              <Typography variant="h4" color="primary"></Typography>
              <Typography variant="body1" color="textSecondary">
                {verifyEmailMessage}
              </Typography>
              <Button color="secondary" variant="contained" size="large" onClick={handleClose}>
                Close
              </Button>
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
          <Grid item>
            <Stack alignItems="center" justifyContent="center" spacing={1}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h4' : 'h3'}>
                Sign In
              </Typography>
              <Typography variant="caption" textAlign="center" sx={{ margin: '0px 15px 5px 15px !important' }}></Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          username: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              const { username, password } = values;
              const requestData = {
                username,
                password,
                navigate
              };

              appDispatch(loginUser(requestData));
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.username && errors.username)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">User Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="text"
                value={values.username}
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                label="User Name"
                inputProps={{}}
              />
              {touched.username && errors.username && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.username}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
              sx={{ justifyContent: 'right' }}
            >
             
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={dataLoading.loading}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {dataLoading.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />}
                  Sign in
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
