import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      style={{ textDecoration: 'none' }}
      disableRipple
      onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      component={Link}
      to={config.defaultPath}
    >
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
    </ButtonBase>
  );
};

export default LogoSection;