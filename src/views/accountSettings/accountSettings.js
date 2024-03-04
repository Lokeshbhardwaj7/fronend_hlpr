import React, { useState, useEffect } from 'react';

//  mui library
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Typography, useMediaQuery, CircularProgress, Avatar } from '@mui/material';

// project import
import { useAppSelector, useAppDispatch } from 'store';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';
import { accountPasswordChange, accountSettingsUpdate } from 'store/thunk/adminUserThunk';
import AccountPassword from './accountPassword';
import PhoneInput from 'ui-component/phoneInput/index';
import TextField from 'ui-component/textField';

//  third-party import
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { UploadProfilePicture } from 'store/thunk/sellerItemsThunk';
import { notificationFail } from 'store/slices/notificationSlice';

const AccountSettings = () => {
  const theme = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [uploadedPhoto, setUploadedPhoto] = useState();
  const [validation, setValidation] = useState('');
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const appDispatch = useAppDispatch();
  const dataLoading = useAppSelector((state) => state.dataLoading);
  const setUserData = useAppSelector((state) => state.authorization);
  const userData = setUserData?.userData?.data;

  //  formschema validation
  const formSchema = Yup.object().shape({
    first_name: Yup.string()
      .matches(/^[^\d]+$/, 'Numbers are not allowed')
      .required('First name is required')
      .trim(),
    last_name: Yup.string()
      .matches(/^[^\d]+$/, 'Numbers are not allowed')
      .required('Last name is required')
      .trim(),

    phone: Yup.string().required('Please enter phone number')
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: userData,
    mode: 'onTouched',
    resolver: yupResolver(formSchema)
  });

  // getrootprops for the upload user image in user settings
  const { getRootProps } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: 800000,
    accept: {
      'image/jpeg': ['.jpeg', '.png']
    },
    onDrop: () => {
      if (acceptedFiles.length > 0) {
        setSelectedPhoto(acceptedFiles[0]);
      }
    },
    onDropRejected: () => {
      toast.error('You can only upload 1 file & maximum size of 2 MB.', {
        duration: 2000
      });
    }
  });

  useEffect(() => {
    setUploadedPhoto(`${userData?.profile}`);
  }, [userData]);

  // updatePassword function
  const updatePassword = (data) => {
    let cpassword = {
      old_password: data?.old_password,
      new_password: data?.new_password,
      email: data?.email,
      id: data?.id
    };
    appDispatch(accountPasswordChange(cpassword));
  };

  // onsubmit function
  const onSubmit = (data) => {
    let newData = {
      id: data?.id,
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      phone: data?.phone,
      user_type: data?.user_type,
      company_name: data?.company_name
    };
    appDispatch(accountSettingsUpdate(newData));
  };

  // function for upload profile picture
  const handlePicture = (event) => {
    let file = event.target.files[0];
    if (file) {
      // Check if the file size is greater than 1MB (in bytes)
      if (file.size > 1048576) {
        setValidation('Allowed Max size of 1MB');
      } else {
        setValidation('');
        const formData = new FormData();
        formData.append('profile', file);
        formData.append('id', userData?.id);
        appDispatch(UploadProfilePicture(formData));
      }
    }
  };

  useEffect(() => {
    appDispatch(notificationFail(validation));
  }, [validation]);

  return (
    <>
      <MainCard sx={{ border: 'none' }} title="Account Settings">
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 5 }}>
              <Avatar
                alt={userData?.first_name}
                sx={{ width: 100, height: 100 }}
                src={selectedPhoto || uploadedPhoto}
                className="single-file-image"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={dataLoading.profileLoading}
                  size="large"
                  variant="contained"
                  color="secondary"
                  {...getRootProps({ className: 'dropzone' })}
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  {dataLoading.profileLoading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />}
                  Upload new photo
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={(e) => handlePicture(e)}
                />
              </AnimateButton>
              <Typography sx={{ fontSize: '12px', mt: 2 }}>Allowed JPG, PNG image. Max size of 1MB</Typography>
            </Box>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid sx={{ mt: 2 }} container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  control={control}
                  rules={{ required: true }}
                  helperText={errors.first_name?.message}
                  name={'first_name'}
                  errors={errors}
                  fullWidth
                  {...register('first_name', { value: '' })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  control={control}
                  rules={{ required: true }}
                  helperText={errors.last_name?.message}
                  name={'last_name'}
                  errors={errors}
                  fullWidth
                  {...register('last_name', { value: '' })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address / Username"
                  control={control}
                  rules={{ required: true }}
                  disabled={userData?.id ? true : false}
                  name={'email'}
                  errors={errors}
                  fullWidth
                  {...register('email', { value: '' })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PhoneInput
                  label="Phone no."
                  control={control}
                  rules={{ required: true }}
                  name={'phone'}
                  errors={errors}
                  fullWidth
                  {...register('phone', { value: '' })}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Company Name"
                  control={control}
                  rules={{ required: true }}
                  name={'company_name'}
                  errors={errors}
                  fullWidth
                  {...register('company_name', { value: '' })}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, display: 'flex' }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={dataLoading.loading}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {dataLoading.loading && <CircularProgress sx={{ color: '#0000001f', mr: '10px' }} size="20px" />}
                  Save
                </Button>
              </AnimateButton>
            </Box>
          </form>
        </>
      </MainCard>
      <AccountPassword updatePassword={updatePassword} />
    </>
  );
};

export default AccountSettings;
