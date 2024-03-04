import React from 'react';

// mui library import
import { useTheme } from '@mui/material/styles';
import { Grid, useMediaQuery, Box, Button, CircularProgress } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';
import PasswordField from 'ui-component/passwordField';
import { useAppSelector } from '../../store';

// third-party import
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const AccountPassword = React.forwardRef((props) => {
  const { updatePassword } = props;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const setUserData = useAppSelector((state) => state.authorization);
  const userData = setUserData?.userData?.data;
  const resetLoadingSlice = useAppSelector((state) => state.resetLoadingSlice);

  // validations for the user setting form
  const formSchema = Yup.object().shape({
    old_password: Yup.string()
      .required('Password is required')
      .min(8, 'Password length should be at least 8 characters')
      .matches(/^(\S+$)/, '* This field cannot contain blankspaces'),
    new_password: Yup.string()
      .required('Password is required')
      .min(8, 'Password length should be at least 8 characters')
      .matches(/^(\S+$)/, '* This field cannot contain blankspaces'),
    cpassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('new_password')], 'Passwords do not match')
      .min(4, 'Password length should be at least 4 characters')
      .matches(/^(\S+$)/, '* This field cannot contain blankspaces')
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema),
    defaultValues: userData
  });

  // update the password
  const onSubmit = (data) => {
    updatePassword(data);
  };

  return (
    <MainCard sx={{ border: 'none' }} style={{ marginTop: '10px' }} title="Change Password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={matchDownSM ? 0 : 2}>
          <Grid item xs={12} sm={12}>
            <PasswordField
              label="Old Password"
              control={control}
              rules={{ required: true }}
              helperText={errors.old_password?.message}
              name={'old_password'}
              errors={errors}
              fullWidth
              {...register('old_password', { value: '' })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordField
              label="New Password"
              control={control}
              rules={{ required: true }}
              helperText={errors.new_password?.message}
              name={'new_password'}
              errors={errors}
              fullWidth
              {...register('new_password', { value: '' })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordField
              label="Confirm Password"
              control={control}
              rules={{ required: true }}
              name={'cpassword '}
              helperText={errors.cpassword?.message}
              errors={errors}
              fullWidth
              {...register('cpassword', { value: '' })}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, display: 'flex' }}>
          <Button
            disabled={resetLoadingSlice.loading}
            type="submit"
            sx={{ mr: 2 }}
            variant="contained"
            color={'secondary'}
            size="large"
          >
            {resetLoadingSlice.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />}
            Change
          </Button>
        </Box>
      </form>
    </MainCard>
  );
});

export default AccountPassword;
