import { Link } from 'react-router-dom';

// material-ui
import { Divider, Grid, Typography } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthRegister from '../auth-forms/AuthRegister';

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
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
                    <AuthRegister />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Already have an account?
                      </Typography>
                    </Grid>
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

export default Register;
