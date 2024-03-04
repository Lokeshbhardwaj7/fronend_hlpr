// react
import React, { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Card, CardContent, CardHeader, Collapse, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// assets
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

//third-party library
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1
  }
};

// ==============================|| DASHBOARD - TOTAL PERFORMANCE CARD ||============================== //

const PpcTotalPerformance = ({ isLoading }) => {
  const theme = useTheme();
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
          action={
            <Tooltip title={expanded ? 'Show Less' : 'Show More'} enterDelay={1000}>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon sx={{ color: 'black' }} />
              </ExpandMore>
            </Tooltip>
          }
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
                      <Tooltip
                        title={
                          dashboardData?.data?.total_sale
                            ? dashboardData?.data && dashboardData?.data?.total_sale.toLocaleString()
                            : '0.00'
                        }
                        enterDelay={1000}
                      >
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.total_sale
                            ? `$${KFormatter(dashboardData?.data?.total_sale)}`
                            : '$0.00'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip
                          title={
                            dashboardData?.lastPeriodAdvertiserData?.total_sale
                              ? dashboardData?.lastPeriodAdvertiserData &&
                                dashboardData?.lastPeriodAdvertiserData?.total_sale.toLocaleString()
                              : '0.00'
                          }
                          enterDelay={1000}
                        >
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_sale
                              ? `$${KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_sale)}`
                              : '$0.00'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData?.data?.total_sale == null
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_sale
                                    ) * 100
                                  ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_sale == null
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_sale
                                    ) * 100
                                  ) > 0
                                ? theme.palette.success.dark
                                : theme.palette.orange.dark,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: 100,
                            fontSize: '12px'
                          }}
                        >
                          {dashboardData?.data?.total_sale || dashboardData?.lastPeriodAdvertiserData?.total_sale
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_sale) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_sale
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.total_sale == null ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_sale
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_sale === null ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_sale
                              ) * 100
                            ) > 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          ) : (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">Total Orders</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_order} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.total_order
                            ? KFormatter(dashboardData?.data?.total_order)
                            : '0.00'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip
                          title={dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_order}
                          enterDelay={1000}
                        >
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_order
                              ? `${KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_order)}`
                              : '0.00'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.total_order == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_order
                                    ) * 100
                                  ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_order == 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_order
                                    ) * 100
                                  ) > 0
                                ? theme.palette.success.dark
                                : theme.palette.orange.dark,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: 100,
                            fontSize: '12px'
                          }}
                        >
                          {dashboardData?.data?.total_order || dashboardData?.lastPeriodAdvertiserData?.total_order
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_order) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_order
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.total_order == 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_order
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_order === 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_order
                              ) * 100
                            ) > 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          ) : (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">Total Units</Typography>
                      <Tooltip title={dashboardData?.data?.total_units} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.total_units
                            ? KFormatter(dashboardData?.data?.total_units)
                            : '0.00'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip title={dashboardData?.lastPeriodAdvertiserData?.total_units} enterDelay={1000}>
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_units
                              ? `${KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_units)}`
                              : '0.00'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.total_units == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_units
                                    ) * 100
                                  ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_units == 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_units
                                    ) * 100
                                  ) > 0
                                ? theme.palette.success.dark
                                : theme.palette.orange.dark,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: 100,
                            fontSize: '12px'
                          }}
                        >
                          {dashboardData?.data?.total_units || dashboardData?.lastPeriodAdvertiserData?.total_units
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_units) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_units
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.total_units == 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_units
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_units === 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_units
                              ) * 100
                            ) > 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          ) : (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">TACoS</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.tacos} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.tacos ? `${dashboardData?.data?.tacos}%` : '0.00%'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip
                          title={dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.tacos}
                          enterDelay={1000}
                        >
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.tacos
                              ? `${KFormatter(dashboardData?.lastPeriodAdvertiserData?.tacos)}%`
                              : '0.00%'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.tacos == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                        dashboardData?.lastPeriodAdvertiserData?.tacos
                                    ) * 100
                                  ) === 0 || dashboardData?.lastPeriodAdvertiserData?.tacos == null
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                        dashboardData?.lastPeriodAdvertiserData?.tacos
                                    ) * 100
                                  ) > 0
                                ? theme.palette.orange.dark
                                : theme.palette.success.dark,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: 100,
                            fontSize: '12px'
                          }}
                        >
                          {dashboardData?.data?.tacos || dashboardData?.lastPeriodAdvertiserData?.tacos
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                    dashboardData?.lastPeriodAdvertiserData?.tacos) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                      dashboardData?.lastPeriodAdvertiserData?.tacos
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.tacos == 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                  dashboardData?.lastPeriodAdvertiserData?.tacos
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.tacos === null ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                  dashboardData?.lastPeriodAdvertiserData?.tacos
                              ) * 100
                            ) > 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,

                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          ) : (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          )}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item sx={{ p: 1 }}>
                      <Typography className="report-card-header">TRoAS</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.troas} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.troas ? `$${dashboardData?.data?.troas}` : '$0.00'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip
                          title={dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.troas}
                          enterDelay={1000}
                        >
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.troas
                              ? `$${KFormatter(dashboardData?.lastPeriodAdvertiserData?.troas)}`
                              : '$0.00'}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.troas == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                        dashboardData?.lastPeriodAdvertiserData?.troas
                                    ) * 100
                                  ) === 0 || dashboardData?.lastPeriodAdvertiserData?.troas == 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                        dashboardData?.lastPeriodAdvertiserData?.troas
                                    ) * 100
                                  ) > 0
                                ? theme.palette.success.dark
                                : theme.palette.orange.dark,
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: 100,
                            fontSize: '12px'
                          }}
                        >
                          {dashboardData?.data?.troas || dashboardData?.lastPeriodAdvertiserData?.troas
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                    dashboardData?.lastPeriodAdvertiserData?.troas) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                      dashboardData?.lastPeriodAdvertiserData?.troas
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.troas == 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                  dashboardData?.lastPeriodAdvertiserData?.troas
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.troas === 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: 'grey',
                                color: 'white',
                                ml: '5px'
                              }}
                            >
                              -
                            </Avatar>
                          ) : Math.round(
                              parseFloat(
                                (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                  dashboardData?.lastPeriodAdvertiserData?.troas
                              ) * 100
                            ) > 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          ) : (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: '5px'
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          )}
                        </Box>
                      </Typography>
                    </Grid>
                  </Carousel>
                </Grid>
              </Grid>
            </CardContent>
          ) : (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent sx={{ mt: '-40px' }}>
                <Grid container>
                  <Grid item xs={4}>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Typography className="report-card-header-expand">Total Sales</Typography>
                        <Tooltip
                          title={dashboardData?.data?.total_sale ? dashboardData?.data?.total_sale.toLocaleString() : '$0.00'}
                          enterDelay={1000}
                        >
                          <Typography
                            sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                          >
                            {dashboardData?.data && dashboardData?.data?.total_sale
                              ? `$${KFormatter(dashboardData?.data?.total_sale)}`
                              : '$0.0'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={
                              dashboardData?.lastPeriodAdvertiserData?.total_sale
                                ? dashboardData?.lastPeriodAdvertiserData?.total_sale.toLocaleString()
                                : '$0.00'
                            }
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_sale
                                ? `$${KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_sale)}`
                                : '$0.00'}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.total_sale == null
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_sale
                                      ) * 100
                                    ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_sale == null
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_sale
                                      ) * 100
                                    ) > 0
                                  ? theme.palette.success.dark
                                  : theme.palette.orange.dark,
                              alignContent: 'center',
                              alignItems: 'center',
                              display: 'flex',

                              fontWeight: 100,
                              fontSize: '12px'
                            }}
                          >
                            {dashboardData?.data?.total_sale || dashboardData?.lastPeriodAdvertiserData?.total_sale
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_sale) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_sale
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.total_sale == null ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_sale
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_sale === null ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_sale - dashboardData?.lastPeriodAdvertiserData?.total_sale) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_sale
                                ) * 100
                              ) > 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.success.light,
                                  color: theme.palette.success.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            ) : (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.orange.light,
                                  color: theme.palette.orange.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
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
                            {dashboardData?.data && dashboardData?.data?.tacos ? `${dashboardData?.data?.tacos}%` : '0.00%'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.tacos}
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.tacos
                                ? `${KFormatter(dashboardData?.lastPeriodAdvertiserData?.tacos)}%`
                                : '0.00%'}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.tacos == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                          dashboardData?.lastPeriodAdvertiserData?.tacos
                                      ) * 100
                                    ) === 0 || dashboardData?.lastPeriodAdvertiserData?.tacos == null
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                          dashboardData?.lastPeriodAdvertiserData?.tacos
                                      ) * 100
                                    ) > 0
                                  ? theme.palette.orange.dark
                                  : theme.palette.success.dark,
                              alignContent: 'center',
                              alignItems: 'center',
                              display: 'flex',
                              fontWeight: 100,
                              fontSize: '12px'
                            }}
                          >
                            {dashboardData?.data?.tacos || dashboardData?.lastPeriodAdvertiserData?.tacos
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                      dashboardData?.lastPeriodAdvertiserData?.tacos) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                        dashboardData?.lastPeriodAdvertiserData?.tacos
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.tacos == 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                    dashboardData?.lastPeriodAdvertiserData?.tacos
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.tacos === null ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.tacos - dashboardData?.lastPeriodAdvertiserData?.tacos) /
                                    dashboardData?.lastPeriodAdvertiserData?.tacos
                                ) * 100
                              ) > 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.orange.light,
                                  color: theme.palette.orange.dark,

                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            ) : (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.success.light,
                                  color: theme.palette.success.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            )}
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
                              : '0.00'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={
                              dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_order
                            }
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_order
                                ? KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_order)
                                : '0.00'}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.total_order == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_order -
                                          dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_order
                                      ) * 100
                                    ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_order == 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_order -
                                          dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_order
                                      ) * 100
                                    ) > 0
                                  ? theme.palette.success.dark
                                  : theme.palette.orange.dark,
                              alignContent: 'center',
                              alignItems: 'center',
                              display: 'flex',
                              fontWeight: 100,
                              fontSize: '12px'
                            }}
                          >
                            {dashboardData?.data?.total_order || dashboardData?.lastPeriodAdvertiserData?.total_order
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_order) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_order
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.total_order == 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_order
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_order === 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_order - dashboardData?.lastPeriodAdvertiserData?.total_order) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_order
                                ) * 100
                              ) > 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.success.light,
                                  color: theme.palette.success.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            ) : (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.orange.light,
                                  color: theme.palette.orange.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
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
                            {dashboardData?.data && dashboardData?.data?.troas ? `$${dashboardData?.data?.troas}` : '$0.00'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.troas}
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.troas
                                ? `$${KFormatter(dashboardData?.lastPeriodAdvertiserData?.troas)}`
                                : '$0.00'}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.troas == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                          dashboardData?.lastPeriodAdvertiserData?.troas
                                      ) * 100
                                    ) === 0 || dashboardData?.lastPeriodAdvertiserData?.troas == 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                          dashboardData?.lastPeriodAdvertiserData?.troas
                                      ) * 100
                                    ) > 0
                                  ? theme.palette.success.dark
                                  : theme.palette.orange.dark,
                              alignContent: 'center',
                              alignItems: 'center',
                              display: 'flex',
                              fontWeight: 100,
                              fontSize: '12px'
                            }}
                          >
                            {dashboardData?.data?.troas || dashboardData?.lastPeriodAdvertiserData?.troas
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                      dashboardData?.lastPeriodAdvertiserData?.troas) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                        dashboardData?.lastPeriodAdvertiserData?.troas
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}
                            {dashboardData == null || !dashboardData.data || dashboardData.data.troas == 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                    dashboardData?.lastPeriodAdvertiserData?.troas
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.troas === 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.troas - dashboardData?.lastPeriodAdvertiserData?.troas) /
                                    dashboardData?.lastPeriodAdvertiserData?.troas
                                ) * 100
                              ) > 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.success.light,
                                  color: theme.palette.success.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            ) : (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.orange.light,
                                  color: theme.palette.orange.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            )}
                          </Box>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={4}>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Typography className="report-card-header-expand">Total Units</Typography>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_units} enterDelay={1000}>
                          <Typography
                            sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                          >
                            {dashboardData?.data && dashboardData?.data?.total_units
                              ? KFormatter(dashboardData?.data?.total_units)
                              : '0.00'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={
                              dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_units
                            }
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_units
                                ? `${KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_units)}`
                                : '0.00'}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.total_units == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_units -
                                          dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_units
                                      ) * 100
                                    ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_units == 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_units -
                                          dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_units
                                      ) * 100
                                    ) > 0
                                  ? theme.palette.success.dark
                                  : theme.palette.orange.dark,
                              alignContent: 'center',
                              alignItems: 'center',
                              display: 'flex',
                              fontWeight: 100,
                              fontSize: '12px'
                            }}
                          >
                            {dashboardData?.data?.total_units || dashboardData?.lastPeriodAdvertiserData?.total_units
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_units) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_units
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.total_units == 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_units
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.total_units === 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: 'grey',
                                  color: 'white',
                                  ml: '5px'
                                }}
                              >
                                -
                              </Avatar>
                            ) : Math.round(
                                parseFloat(
                                  (dashboardData?.data?.total_units - dashboardData?.lastPeriodAdvertiserData?.total_units) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_units
                                ) * 100
                              ) > 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.success.light,
                                  color: theme.palette.success.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            ) : (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: theme.palette.orange.light,
                                  color: theme.palette.orange.dark,
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            )}
                          </Box>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          )}
        </Card>
      )}
    </>
  );
};

export default PpcTotalPerformance;
