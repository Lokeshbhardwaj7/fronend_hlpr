import { Link } from 'react-router-dom';
import { Divider, Grid, Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';

const Login = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 2 }}>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h1"
                        sx={{
                          fontFamily: 'Arial, sans-serif',
                          fontSize: '3rem',
                          fontWeight: 'bold',
                          color: 'transparent',
                          backgroundImage: 'linear-gradient(120deg, #f6d365, #fda085)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text'
                        }}
                      >
                        HLPR
                      </Typography>
                    </Link>
                  </Grid>

                  <Grid item xs={12}>
                    <AuthLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                      <Button
                        variant="outlined"
                        sx={{
                          cursor: 'unset',
                          m: 2,
                          py: 0.5,
                          px: 7,
                          borderColor: `${theme.palette.grey[100]} !important`,
                          color: `${theme.palette.grey[900]}!important`,
                          fontWeight: 500,
                          borderRadius: `${customization.borderRadius}px`
                        }}
                        disableRipple
                        disabled
                      >
                        OR
                      </Button>
                      <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                  </Grid>
                  <Grid item sx={{ display: 'flex', textAlign: 'center' }} alignItems="center">
                    <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                      Don&apos;t have an account?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/register"
                      variant="subtitle1"
                      sx={{ color: 'blue', textDecoration: 'none', ml: '5px', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Sign Up
                    </Typography>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}></Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
