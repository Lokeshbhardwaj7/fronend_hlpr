import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';

import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Tooltip,
  // Menu,
  // MenuItem,
  Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { useAppSelector } from 'store';

import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Collapse from '@mui/material/Collapse';

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.shortest
  })
}));

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -165,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const AdPerformance = ({ isLoading }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const CustomeRightArrow = ({ onClick, currentSlide, totalSlides }) => {
    const isLastSlide = currentSlide === totalSlides - 0;

    return (
      <button onClick={onClick} className={`carousel-arrow right ${isLastSlide ? 'hide-arrow' : ''}`}>
        <KeyboardArrowRightIcon
          sx={{ '&:hover': { color: 'grey', transition: 'color 0.5s' }, fontSize: '35px' }}
          fontSize="small"
          htmlColor="#fff"
        />
      </button>
    );
  };

  const CustomeLeftArrow = ({ onClick, currentSlide, totalSlides }) => {
    const isFirstSlide = currentSlide === totalSlides - 0;

    return (
      <button style={{ marginLeft: '' }} onClick={onClick} className={`carousel-arrow left ${isFirstSlide ? 'hide-arrow' : ''}`}>
        <KeyboardArrowLeftIcon
          sx={{ '&:hover': { color: 'grey', transition: 'color 0.5s' }, fontSize: '35px' }}
          fontSize="small"
          htmlColor="#fff"
        />
      </button>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);

  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper contentClass={`accordion-card ${expanded ? 'open' : ''}`} border={false} content={false}>
          <Box>
            <Grid container sx={{ p: 2.25 }}>
              <Grid item xs={11}>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: theme.palette.secondary[200]
                  }}
                >
                  Ad Sales/Performance
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title={expanded ? 'Show Less' : 'Show More'} enterDelay={1000}>
                  <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon sx={{ color: 'white' }} />
                  </ExpandMore>
                </Tooltip>
              </Grid>
              {!expanded ? (
                <Grid item xs={12}>
                  <Carousel
                    arrows={true}
                    responsive={responsive}
                    customRightArrow={<CustomeRightArrow />}
                    customLeftArrow={<CustomeLeftArrow />}
                    swipeable={true}
                    draggable={true}
                    // infinite={true}
                    dotListClass="custom-dot-list-style"
                  >
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Spend
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_spends
                            ? `$${dashboardData?.data[0].ad_spends}`
                            : '$58.655'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Sales
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_sales ? `$${dashboardData?.data[0].ad_sales}` : '$65'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          ACoS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].acos ? `${dashboardData?.data[0].acos}%` : '5%'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          RoAS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].roas ? `$${dashboardData?.data[0].roas}` : '98%'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Orders
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_orders ? dashboardData?.data[0].ad_orders : '65'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Units
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_units ? dashboardData?.data[0].ad_units : '68'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Average CPC
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '32%'} */}
                          32%
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark,
                                margin: '0 auto'
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                  </Carousel>
                </Grid>
              ) : (
                <>
                  <Grid item xs={4} className="accordion-card-content">
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Spend
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_spends
                            ? `$${dashboardData?.data[0].ad_spends}`
                            : '$58.655'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          RoAS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].roas ? `$${dashboardData?.data[0].roas}` : '18%'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Average CPC
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '18%'} */}
                          32%
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={4} className="accordion-card-content">
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Sales
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mb: 0.75, textAlign: 'center' }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_sales ? `$${dashboardData?.data[0].ad_sales}` : '$65'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Orders
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mb: 0.75, textAlign: 'center' }}>
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_orders ? dashboardData?.data[0].ad_orders : '18'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={4} className="accordion-card-content">
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          ACoS
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '1.125rem',
                            fontWeight: 500,
                            mb: 0.75,
                            textAlign: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data[0].acos ? `${dashboardData?.data[0].acos}%` : '18%'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.secondary[800],
                            mt: 1,
                            margin: '0 auto'
                          }}
                        >
                          <img src={EarningIcon} alt="Notification" />
                        </Avatar>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.secondary[200],
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Ad Units
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: '1.125rem',
                            fontWeight: 500,
                            mb: 0.75,
                            justifyContent: 'center',
                            textAlign: 'center'
                          }}
                        >
                          {' '}
                          {dashboardData?.data && dashboardData?.data[0].ad_units ? dashboardData?.data[0].ad_units : '68'}
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: theme.palette.secondary[200],
                                color: theme.palette.secondary.dark
                              }}
                            >
                              <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                            </Avatar>
                          </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

AdPerformance.propTypes = {
  isLoading: PropTypes.bool
};

export default AdPerformance;
