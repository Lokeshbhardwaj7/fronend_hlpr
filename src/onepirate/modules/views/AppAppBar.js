import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Typography } from '@mui/material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link color="inherit" variant="h6" underline="none" href="/work-well" sx={rightLink}>
              {'Work Well'}
            </Link>
          </Box>

          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
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
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link color="inherit" variant="h6" underline="none" href="/login" sx={rightLink}>
              {'Sign In'}
            </Link>
            <Link variant="h6" underline="none" href="/register" sx={{ ...rightLink, color: 'secondary.main' }}>
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
