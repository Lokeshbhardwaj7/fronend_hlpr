// react
import React, { useState } from 'react';

// material-ui
import {
  // useTheme,
  styled
} from '@mui/material/styles';
import {
  // Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// assets
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
// import EarningIcon from 'assets/images/icons/earning.svg';

//third-party library
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// assets
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import { useAppSelector } from 'store';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { useAppSelector } from 'store';

// exapnd more function for exapnd
const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

// responsive function for carousel
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

// ==============================|| DASHBOARD - TOTAL PERFORMANCE CARD ||============================== //

const TotalPerformance = ({ isLoading }) => {
  // const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  // custom right arrow for carousel
  const CustomeRightArrow = ({ onClick, currentSlide, totalSlides }) => {
    const isLastSlide = currentSlide === totalSlides - 0;

    return (
      <button onClick={onClick} className={`carousel-arrow right ${isLastSlide ? 'hide-arrow' : ''}`}>
        <KeyboardArrowRightIcon
          sx={{ '&:hover': { color: 'grey', transition: 'color 0.5s' }, fontSize: '35px' }}
          fontSize="small"
          htmlColor="#000"
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
          htmlColor="#000"
        />
      </button>
    );
  };

  // handle expand click for set expand true or false
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dashboardData = useAppSelector((state) => state.dashboardSlice.list);

  // KFormatter function to convert numeric data into K,M,B(10K, 10M)
  const KFormatter = (num) => {
    if (Math.abs(num) > 999999) {
      // Convert to millions
      return (Math.sign(num) * (Math.abs(num) / 1000000)).toFixed(1) + 'm';
    } else if (Math.abs(num) > 999) {
      // Convert to thousands
      return (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k';
    } else {
      return Math.sign(num).toFixed(2) * Math.abs(num).toFixed(2);
    }
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <Card
          sx={{
            borderTop: `20px solid #b3daff`
          }}
        >
          <CardHeader
            title={<Typography className="report-card-title">Total Sales/Performance</Typography>}
            action={
              <Tooltip title={expanded ? 'Show Less' : 'Show More'} enterDelay={1000}>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon sx={{ color: 'black' }} />
                </ExpandMore>
              </Tooltip>
            }
          />

          {!expanded ? (
            <CardContent sx={{ mt: '-40px' }}>
              <Grid container>
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
                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">Total Sales</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_sale} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.total_sale
                            ? `$${KFormatter(dashboardData?.data?.total_sale)}`
                            : '0.00'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_sale} enterDelay={1000}>
                          <Box>
                            {dashboardData?.data && dashboardData?.data?.total_sale
                              ? `$${KFormatter(dashboardData?.data?.total_sale)}`
                              : '$0.00'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.total_sale > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.lastPeriodAdvertiserData?.total_sale
                            ? `${Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_sale
                                ) * 100
                              )}
                              `
                            : 0.0}

                          {dashboardData?.data && dashboardData?.data?.total_sale > 0 ? (
                            <span>&#9650;</span>
                          ) : (
                            <span>&#9660;</span>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">Total Orders</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_order} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {' '}
                          {dashboardData?.data && dashboardData?.data?.total_order
                            ? KFormatter(dashboardData?.data?.total_order)
                            : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_order} enterDelay={1000}>
                          <Box>
                            {dashboardData?.data && dashboardData?.data?.total_order
                              ? `${KFormatter(dashboardData?.data?.total_order)}`
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.total_order > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.total_order ? `5.38%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.total_order > 0 ? (
                            <span>&#9650;</span>
                          ) : (
                            <span>&#9660;</span>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">Total Units</Typography>
                      <Tooltip title={'1247'} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {' '}
                          {/* {dashboardData?.data && dashboardData?.data?.total_impressions
                                ? dashboardData?.data?.total_impressions
                                : '78%'} */}
                          {`$${KFormatter(1247)}`}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip title={'1247'} enterDelay={1000}>
                          <Box>
                            {/* {dashboardData?.data && dashboardData?.data?.ad_spends
                              ? `$${KFormatter(dashboardData?.data?.ad_spends)}`
                              : '$20.00'} */}
                            {`$${KFormatter(1247)}`}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.ad_spends > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.ad_spends ? `8.65%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.ad_spends > 0 ? (
                            <span>&#9650;</span>
                          ) : (
                            <span>&#9660;</span>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">TACoS</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.tacos} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.tacos ? dashboardData?.data?.tacos : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.tacos} enterDelay={1000}>
                          <Box>
                            {dashboardData?.data && dashboardData?.data?.tacos
                              ? `${KFormatter(dashboardData?.data?.tacos)}`
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.tacos > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.tacos ? `2.88%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.tacos > 0 ? <span>&#9650;</span> : <span>&#9660;</span>}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">TRoAS</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.troas} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.troas ? dashboardData?.data?.troas : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.troas} enterDelay={1000}>
                          <Box>
                            {dashboardData?.data && dashboardData?.data?.troas
                              ? `$${KFormatter(dashboardData?.data?.troas)}`
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.troas > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.troas ? `56%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.troas > 0 ? <span>&#9650;</span> : <span>&#9660;</span>}
                        </Box>
                      </Typography>
                    </Grid>
                  </Carousel>
                </Grid>
              </Grid>
            </CardContent>
          ) : (
            <CardContent sx={{ mt: '-40px' }}>
              <Grid container>
                <Grid item xs={4}>
                  <Grid container direction="column" sx={{ p: 1 }}>
                    <Grid item>
                      <Typography className="report-card-header-expand">Total Sales</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_sale} enterDelay={1000}>
                        <Typography
                          sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                        >
                          {dashboardData?.data && dashboardData?.data?.total_sale
                            ? `$${KFormatter(dashboardData?.data?.total_sale)}`
                            : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_sale} enterDelay={1000}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.data && dashboardData?.data?.total_sale
                              ? `$${KFormatter(dashboardData?.data?.total_sale)}`
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.total_sale > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.total_sale ? `54%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.total_sale > 0 ? (
                            <span>&#9650;</span>
                          ) : (
                            <span>&#9660;</span>
                          )}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="column" sx={{ p: 1 }}>
                    <Grid item>
                      <Typography className="report-card-header-expand" sx={{ mt: '5px' }}>
                        TACoS
                      </Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.tacos} enterDelay={1000}>
                        <Typography
                          sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                        >
                          {dashboardData?.data && dashboardData?.data?.tacos ? dashboardData?.data?.tacos : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.tacos} enterDelay={1000}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.data && dashboardData?.data?.tacos
                              ? `${KFormatter(dashboardData?.data?.tacos)}`
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.tacos > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.tacos ? `2.88%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.tacos > 0 ? <span>&#9650;</span> : <span>&#9660;</span>}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={4}>
                  <Grid container direction="column" sx={{ p: 1 }}>
                    <Grid item>
                      <Typography className="report-card-header-expand">Total Orders</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_order} enterDelay={1000}>
                        <Typography
                          sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                        >
                          {dashboardData?.data && dashboardData?.data?.total_order
                            ? KFormatter(dashboardData?.data?.total_order)
                            : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_order} enterDelay={1000}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.data && dashboardData?.data?.total_order
                              ? KFormatter(dashboardData?.data?.total_order)
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.total_order > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.total_order ? `5.38%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.total_order > 0 ? (
                            <span>&#9650;</span>
                          ) : (
                            <span>&#9660;</span>
                          )}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container direction="column" sx={{ p: 1 }}>
                    <Grid item>
                      <Typography className="report-card-header-expand" sx={{ mt: '5px' }}>
                        TRoAS
                      </Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.troas} enterDelay={1000}>
                        <Typography
                          sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                        >
                          {dashboardData?.data && dashboardData?.data?.troas ? dashboardData?.data?.troas : '0'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.troas} enterDelay={1000}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.data && dashboardData?.data?.troas
                              ? `${KFormatter(dashboardData?.data?.troas)}`
                              : '0'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.troas > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.troas ? `56%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.troas > 0 ? <span>&#9650;</span> : <span>&#9660;</span>}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={4}>
                  <Grid container direction="column" sx={{ p: 1 }}>
                    <Grid item>
                      <Typography className="report-card-header-expand">Total Units</Typography>
                      <Tooltip title={'1247'} enterDelay={1000}>
                        <Typography
                          sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                        >
                          {/* {dashboardData?.data && dashboardData?.data?.total_impressions
                                ? KFormatter(dashboardData?.data?.total_impressions)
                                : '18%'} */}
                          {`${KFormatter(1247)}`}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                        <Tooltip title={'1247'} enterDelay={1000}>
                          <Box sx={{ mr: '7px' }}>
                            {/* {dashboardData?.data && dashboardData?.data?.ad_spends
                              ? `${KFormatter(dashboardData?.data?.ad_spends)}`
                              : '$20.00'} */}
                            {`${KFormatter(1247)}`}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color: dashboardData?.data && dashboardData?.data?.ad_spends > 0 ? 'green' : 'red',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {dashboardData?.data && dashboardData?.data?.ad_spends ? ` 8.65%` : '0%'}

                          {dashboardData?.data && dashboardData?.data?.ad_spends > 0 ? (
                            <span>&#9650;</span>
                          ) : (
                            <span>&#9660;</span>
                          )}
                        </Box>
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
              </Grid>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};

export default TotalPerformance;
