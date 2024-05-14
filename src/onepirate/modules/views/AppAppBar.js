// AppAppBar.js

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Logo from 'ui-component/LogoNew.png';
import './AppAppBar.css';

function AppAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: '#fff' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <a href="/home">
              <img src={Logo} alt="Company Logo" className="headerLogo" />
            </a>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div className="headerLinks">
              <Link color="inherit" variant="h6" underline="none" className="signin-btn" href="/login">
                {'Sign In'}
              </Link>
              <Link color="inherit" variant="h6" underline="none" className="signup-btn" href="/register">
                {'Sign Up'}
              </Link>
            </div>
            <IconButton
              className="menuIcon"
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ width: 250 }}>
            <Link color="inherit" variant="h6" underline="none" className="drawerLink" href="/login">
              {'Sign In'}
            </Link>
            <Link color="inherit" variant="h6" underline="none" className="drawerLink" href="/register">
              {'Sign Up'}
            </Link>
          </Box>
        </div>
      </Drawer>
    </div>
  );
}

export default AppAppBar;
