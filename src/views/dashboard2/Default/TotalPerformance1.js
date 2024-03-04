import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';

// third-party
// import Chart from 'react-apexcharts';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import EarningIcon from 'assets/images/icons/earning.svg';

// import ChartDataMonth from './chart-data/total-order-month-line-chart';
// import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import { useAppSelector } from 'store';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
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
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalPerformance = ({ isLoading }) => {
  const CustomeRightArrow = ({ onClick, currentSlide, totalSlides }) => {
    const isLastSlide = currentSlide === totalSlides - 1;

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
      <button onClick={onClick} className={`carousel-arrow left ${isFirstSlide ? 'hide-arrow' : ''}`}>
        <KeyboardArrowLeftIcon
          sx={{ '&:hover': { color: 'grey', transition: 'color 0.5s' }, fontSize: '35px' }}
          fontSize="small"
          htmlColor="#fff"
        />
      </button>
    );
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  // const dashboardData = useAppSelector((state) => state.dashboardSlice.list);

  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container>
              <Grid item xs={11}>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'fff'
                  }}
                >
                  Total Sales/Performance
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
                    customRightArrow={<CustomeRightArrow />}
                    customLeftArrow={<CustomeLeftArrow />}
                    // autoPlay={true}
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Total Sales
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0]?.total_impressions
                                ? dashboardData?.data[0]?.total_impressions
                                : '14%'} */}
                          $1465
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Total Orders
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '54%'} */}
                          541
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Total Units
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '78%'} */}
                          1247
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          TACoS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '88%'} */}
                          88%
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          TRoAS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '28%'} */}
                          92%
                        </Typography>
                      </Grid>
                    </Grid>
                  </Carousel>
                </Grid>
              ) : (
                <>
                  <Grid item xs={4}>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Total Sales
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '18%'} */}
                          $1465
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          TACoS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '18%'} */}
                          88%
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={4}>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Total Orders
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '18%'} */}
                          541
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          TRoAS
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '18%'} */}
                          92%
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={4}>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: '#b3daff',
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
                            color: '#fff',
                            mt: 1.5,
                            textAlign: 'center'
                          }}
                        >
                          Total Units
                        </Typography>

                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, textAlign: 'center', mb: 0.75 }}>
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data[0].total_impressions
                                ? dashboardData?.data[0].total_impressions
                                : '18%'} */}
                          1247
                        </Typography>

                        {/* <Grid item>
                            <Avatar
                              sx={{
                                cursor: 'pointer',
                                ...theme.typography.smallAvatar,
                                backgroundColor: '#fff',
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

TotalPerformance.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalPerformance;
