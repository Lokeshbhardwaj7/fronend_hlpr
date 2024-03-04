import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  Stack,
  CircularProgress,
  InputAdornment,
  IconButton,
  MenuItem,
  Select
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

import { registerEmployer, registerUser } from '../../../../store/thunk/authThunk';
import { useAppDispatch, useAppSelector } from '../../../../store';
// import TermsConditions from 'ui-component/popup/TermsConditions';
import { IMaskInput } from 'react-imask';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  // const [checked, setChecked] = useState(false);
  const appDispatch = useAppDispatch();
  const dataLoading = useAppSelector((state) => state.dataLoading);
  // const [showTerms, setShowTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowCPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const roleExperience = [
    ' Domestic help',
    'Security guard',
    'Cashier',
    'Waiter',
    'Housekeeping',
    'Steward',
    'Warehouse Assistant',
    'Office Assistant',
    'Commi'
  ];

  const areaNames = [
    'Downtown Dubai',
    'Dubai Marina',
    'Jumeirah Beach Residence (JBR)',
    'Palm Jumeirah',
    'Al Barsha',
    'Deira',
    'Bur Dubai',
    'International City',
    'Satwa',
    'Al Quoz',
    'Business Bay',
    'Dubai Sports City',
    'Dubai Silicon Oasis',
    'Dubai Investment Park (DIP)',
    'Dubai Healthcare City (DHCC)',
    'Discovery Gardens',
    'Jumeirah Village Circle (JVC)',
    'Jumeirah Village Triangle (JVT)',
    'Al Nahda',
    'Muhaisnah',
    'Al Rigga',
    'Al Karama',
    'Hor Al Anz',
    'Al Mamzar',
    'Al Qusais',
    'Barsha Heights (Tecom)',
    'Al Muraqqabat',
    'Al Rashidiya',
    'Al Warqaa',
    'Al Khail',
    'Umm Suqeim',
    'Silicon Oasis',
    'Jebel Ali',
    'Academic City',
    'Remraam',
    'Motor City',
    'Dubai Production City (IMPZ)',
    'Dubai International City',
    'Dubai South',
    'Dubai Investment Park (DIP)',
    'Dubai Residence Complex',
    'Al Mizhar',
    'Al Furjan',
    'Al Sufouh',
    'Dubai Industrial City',
    'Dubai Knowledge Park',
    'Dubai Studio City',
    'Dubai Media City',
    'Dubai Internet City',
    'Al Awir'
  ];

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
          <Grid item>
            <Stack alignItems="center" justifyContent="center" spacing={1}>
              <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                Sign Up
              </Typography>
              <Typography
                variant="caption"
                textAlign={matchDownSM ? 'center' : 'center'}
                sx={{ margin: '0px 15px 5px 15px !important' }}
              ></Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          company_name: '',
          registration_number: '',
          email: '',
          phone_number: '',
          name: '',
          username: '',
          password: '',
          gender: '',
          role: 'Employee',
          area: '',
          role_exp: '',
          submit: null,
          expected_salary: '',
          cpassword: '',
          nationality: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(50)
            .when('role', {
              is: 'Employee',
              then: Yup.string()
                .required('Name is required')
                .matches(/^(\S+$)/, '* This field cannot contain blank spaces')
                .matches(/^[^\d]+$/, 'Numbers are not allowed'),
              otherwise: Yup.string()
            }),
          company_name: Yup.string().when('role', {
            is: 'Employer',
            then: Yup.string().max(50).required('Company Name is required'),
            otherwise: Yup.string().max(50)
          }),
          registration_number: Yup.string().when('role', {
            is: 'Employer',
            then: Yup.string().required('Registration Number is required'),
            otherwise: Yup.string()
          }),
          role_exp: Yup.string().when('role', {
            is: 'Employee',
            then: Yup.string().required('Role Experience is required'),
            otherwise: Yup.string()
          }),
          email : Yup.string()
          .required('Email is required')
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 'Email is not valid'),
          username: Yup.string()
            .max(50)
            .required('User name is required')
            .matches(/^(\S+$)/, '* This field cannot contain blank spaces'),
          password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
          cpassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .min(4, 'Password length should be at least 4 characters')
            .matches(/^(\S+$)/, '* This field cannot contain blankspaces'),
          gender: Yup.string().when('role', {
            is: 'Employee',
            then: Yup.string().required('Gender is required'),
            otherwise: Yup.string()
          }),
          role: Yup.string().required('Role is required'),
          phone_number: Yup.string()
            .matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Phone number is not valid')
            .required('Phone number is required'),
            expected_salary: Yup.string().when('role', {
            is: 'Employee',
            then: Yup.string().required('Expected Salary is required'),
            otherwise: Yup.string()
          }),
          nationality: Yup.string().when('role', {
            is: 'Employee',
            then: Yup.string().required('Nationality is required'),
            otherwise: Yup.string()
          }),
          area: Yup.string().when('role', {
            is: 'Employee',
            then: Yup.string().required('Area is required'),
            otherwise: Yup.string()
          })
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);

              const {
                name,
                username,
                phone_number,
                nationality,
                gender,
                role_exp,
                role,
                email,
                area,
                expected_salary,
                registration_number,
                password,
                cpassword,
                company_name
              } = values; // Include area in values
              console.log('valuesvalues', values);

              if (values.role == 'Employee') {
                const requestData = {
                  name,
                  username,
                  password,
                  cpassword,
                  company_name,
                  phone_number,
                  nationality,
                  gender,
                  role_exp,
                  expected_salary,
                  registration_number,
                  role,
                  email,
                  area, 
                  callbackFunc: resetForm,
                  navigate: navigate
                };
                appDispatch(registerUser(requestData));
                console.log('requestData', requestData);
              }else if(values.role == "Employer") {
                const requestData = {
                  username,
                  password,
                  cpassword,
                  company_name,
                  phone_number,
                  registration_number,
                  role,
                  callbackFunc: resetForm,
                  navigate: navigate
                };
                appDispatch(registerEmployer(requestData));

              }

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
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values, setFieldTouched }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth sx={{ ...theme.typography.customInput }} error={touched.role && errors.role}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={values.role}
                onChange={(e) => {
                  handleChange(e);
                  setFieldTouched('role', true, false); // Update touched state for role
                }}
                onBlur={() => setFieldTouched('role', true)} // Update touched state for role on blur
                label="Role"
                sx={{ ...theme.typography.customInput }}
              >
                <MenuItem defaultChecked value={'Employee'}>
                  Employee
                </MenuItem>
                <MenuItem value={'Employer'}>Employer</MenuItem>
              </Select>
              {touched.role && errors.role && (
                <FormHelperText error id="standard-weight-helper-text-role">
                  {errors.role}
                </FormHelperText>
              )}
            </FormControl>
            {/* Add area field */}

            {/* End of area field */}

            {/* Rest of the form fields */}
            {values?.role == 'Employer' && (
              <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    margin="normal"
                    name="company_name"
                    disabled={values?.role == 'Employee'}
                    value={values.company_name}
                    type="text"
                    defaultValue=""
                    sx={{ ...theme.typography.customInput }}
                    error={Boolean(touched.company_name && errors.company_name)}
                    helperText={touched.company_name && errors.company_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Registraion Number"
                    margin="normal"
                    name="registration_number"
                    value={values.registration_number}
                    type="number"
                    defaultValue=""
                    sx={{ ...theme.typography.customInput }}
                    error={Boolean(touched.registration_number && errors.registration_number)}
                    helperText={touched.registration_number && errors.registration_number}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            )}

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              value={values.email}
              type="email"
              defaultValue=""
              sx={{ ...theme.typography.customInput }}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email ? errors.email : ''}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <Grid container spacing={matchDownSM ? 0 : 2}>
              {values.role == 'Employee' && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    name="name"
                    value={values.name}
                    type="text"
                    defaultValue=""
                    sx={{ ...theme.typography.customInput }}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name ? errors.name : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={values.role == 'Employee' ? 6 : 12}>
                <TextField
                  fullWidth
                  label="User Name"
                  margin="normal"
                  name="username"
                  value={values.username}
                  type="text"
                  defaultValue=""
                  sx={{ ...theme.typography.customInput }}
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username ? errors.username : ''}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {values.role == 'Employee' && (
              <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ ...theme.typography.customInput }} error={touched.area && errors.area}>
                    <InputLabel id="area-label">Area</InputLabel>
                    <Select
                      labelId="area-label"
                      id="area"
                      name="area"
                      value={values.area}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldTouched('area', true, false); // Update touched state for area
                      }}
                      onBlur={() => setFieldTouched('area', true)} // Update touched state for area on blur
                      label="Area"
                      sx={{ ...theme.typography.customInput }}
                    >
                      {areaNames.map((area, index) => (
                        <MenuItem key={index} value={area}>
                          {area}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.area && errors.area && (
                      <FormHelperText error id="standard-weight-helper-text-area">
                        {errors.area}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ ...theme.typography.customInput }} error={touched.gender && errors.gender}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      name="gender"
                      value={values.gender}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldTouched('gender', true, false); // Update touched state for gender
                      }}
                      onBlur={() => setFieldTouched('gender', true)} // Update touched state for gender on blur
                      label="Gender"
                      sx={{ ...theme.typography.customInput }}
                    >
                      <MenuItem value={'male'}>Male</MenuItem>
                      <MenuItem value={'female'}>Female</MenuItem>
                    </Select>
                    {touched.gender && errors.gender && (
                      <FormHelperText error id="standard-weight-helper-text-gender">
                        {errors.gender}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            )}

            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  sx={{ ...theme.typography.customInput }}
                >
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.cpassword && errors.cpassword)}
                  sx={{ ...theme.typography.customInput }}
                >
                  <InputLabel htmlFor="outlined-adornment-cpassword-login">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-cpassword-login"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={values.cpassword}
                    name="cpassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle cpassword visibility"
                          onClick={handleClickShowCPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    inputProps={{}}
                  />
                  {touched.cpassword && errors.cpassword && (
                    <FormHelperText error id="standard-weight-helper-text-cpassword-login">
                      {errors.cpassword}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            {values?.role == 'Employee' && (
              <FormControl fullWidth sx={{ ...theme.typography.customInput }} error={touched.area && errors.area}>
                <InputLabel id="area-label">Role Experience</InputLabel>
                <Select
                  labelId="area-label"
                  id="role_exp"
                  name="role_exp"
                  value={values.role_exp}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldTouched('role_exp', true, false); // Update touched state for area
                  }}
                  onBlur={() => setFieldTouched('role_exp', true)} // Update touched state for area on blur
                  label="Role Experience"
                  sx={{ ...theme.typography.customInput }}
                >
                  {roleExperience.map((role_exp, index) => (
                    <MenuItem key={index} value={role_exp}>
                      {role_exp}
                    </MenuItem>
                  ))}
                </Select>
                {touched.role_exp && errors.role_exp && (
                  <FormHelperText error id="standard-weight-helper-text-role_exp">
                    {errors.role_exp}
                  </FormHelperText>
                )}
              </FormControl>
            )}

            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
              <TextField
                fullWidth
                label="Phone no."
                margin="normal"
                name={'phone_number'}
                error={Boolean(touched.phone_number && errors?.phone_number)}
                helperText={touched.phone_number && errors.phone_number ? errors.phone_number : ''}
                value={values.phone_number}
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                InputProps={{
                  inputComponent: IMaskInput,
                  inputProps: {
                    mask: '(000) 000-0000',
                    definitions: {
                      0: /[0-9]/
                    }
                  }
                }}
                sx={{ ...theme.typography.customInput }}
              />
            </FormControl>
            {values?.role == 'Employee' && (
              <>
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                  <TextField
                    fullWidth
                    label="Nationality"
                    margin="normal"
                    name={'nationality'}
                    error={Boolean(touched.nationality && console.log('errorserrors_nationality', errors.nationality))}
                    helperText={touched.nationality && errors.nationality ? errors.nationality : ''}
                    value={values.nationality}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    sx={{ ...theme.typography.customInput }}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                  <TextField
                    fullWidth
                    label="Expected Salary"
                    margin="normal"
                    name={'expected_salary'}
                    error={Boolean(touched.expected_salary && errors.expected_salary)}
                    helperText={touched.expected_salary && errors.expected_salary ? errors.expected_salary : ''}
                    value={values.expected_salary}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    sx={{ ...theme.typography.customInput }}
                  />
                </FormControl>
              </>
            )}
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
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>

      {/* {showTerms && <TermsConditions open={showTerms} setOpen={setShowTerms} setChecked={setChecked} />} */}
    </>
  );
};

export default FirebaseRegister;
