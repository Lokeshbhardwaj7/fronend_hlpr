import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Card, CardContent, CardHeader, Collapse, Grid, IconButton, Tooltip, Typography } from '@mui/material';

// material-ui-icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// assets
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// third-party library
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// store
import { useAppSelector } from 'store';
import { Box } from '@mui/system';

// exapnd more function for exapnd
const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create(['transform'], {
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

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const Awareness = ({ isLoading }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  // custom right arrow for carousel
  const CustomeRightArrow = ({ onClick, currentSlide, totalSlides }) => {
    const isLastSlide = currentSlide === totalSlides - 1;
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

  // custom left arrow for carousel
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
        <SkeletonEarningCard />
      ) : (
        <Card
          sx={{
            borderTop: `20px solid ${theme.palette.secondary[800]}`
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
            title={<Typography className="report-card-title">Awareness</Typography>}
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
                    renderDotsOutside={true}
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
                      <Typography className="report-card-header">Impressions</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_impressions} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.total_impressions
                            ? KFormatter(dashboardData?.data?.total_impressions)
                            : `0.00`}
                        </Typography>
                      </Tooltip>

                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip
                          title={
                            dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_impressions
                          }
                          enterDelay={1000}
                        >
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_impressions
                              ? KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_impressions)
                              : `0.00`}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            alignContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: 100,
                            fontSize: '12px'
                          }}
                        >
                          {dashboardData?.data?.total_impressions || dashboardData?.lastPeriodAdvertiserData?.total_impressions
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.total_impressions -
                                    dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_impressions) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.total_impressions -
                                      dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_impressions
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.total_impressions == null ? (
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
                                (dashboardData?.data?.total_impressions -
                                  dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_impressions
                              ) * 100
                            ) === 0 ? (
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
                                (dashboardData?.data?.total_impressions -
                                  dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_impressions
                              ) * 100
                            ) > 0 ? (
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#919191',
                                color: '#ffffff',
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
                                backgroundColor: '#919191',
                                color: '#ffffff',
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
                      <Typography className="report-card-header">Clicks</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.total_clicks} enterDelay={1000}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.total_clicks
                            ? KFormatter(dashboardData?.data?.total_clicks)
                            : `0.00`}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Tooltip
                          title={dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_clicks}
                          enterDelay={1000}
                        >
                          <Box>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_clicks
                              ? KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_clicks)
                              : `0.00`}
                          </Box>
                        </Tooltip>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.total_clicks == null
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_clicks -
                                        dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_clicks
                                    ) * 100
                                  ) === 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_clicks -
                                        dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_clicks
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
                          {dashboardData?.data?.total_clicks || dashboardData?.lastPeriodAdvertiserData?.total_clicks
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_clicks) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_clicks
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.total_clicks == null ? (
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
                                (dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_clicks
                              ) * 100
                            ) === 0 ? (
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
                                (dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                  dashboardData?.lastPeriodAdvertiserData?.total_clicks
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
                      <Typography className="report-card-header">CTR</Typography>
                      <Typography className="report-card-value">
                        {dashboardData?.data && dashboardData?.data?.ctr ? `${dashboardData?.data?.ctr.toFixed(2)}%` : '0.00%'}
                      </Typography>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Box>
                          {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.ctr
                            ? `${dashboardData?.lastPeriodAdvertiserData?.ctr.toFixed(2)}%`
                            : '0.00%'}
                        </Box>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.ctr == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                        dashboardData?.lastPeriodAdvertiserData?.ctr
                                    ) * 100
                                  ) === 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                        dashboardData?.lastPeriodAdvertiserData?.ctr
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
                          {dashboardData?.data?.ctr || dashboardData?.lastPeriodAdvertiserData?.ctr
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                    dashboardData?.lastPeriodAdvertiserData?.ctr) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                      dashboardData?.lastPeriodAdvertiserData?.ctr
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}
                          {dashboardData == null || !dashboardData.data || dashboardData.data.ctr == 0 ? (
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
                                (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                  dashboardData?.lastPeriodAdvertiserData?.ctr
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.ctr === null ? (
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
                                (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                  dashboardData?.lastPeriodAdvertiserData?.ctr
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
                      <Typography className="report-card-header">CVR (Orders)</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.cvr_order.toFixed(2)}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.cvr_order
                            ? `${dashboardData?.data?.cvr_order.toFixed(2)}%`
                            : '0.00%'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Box>
                          {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.cvr_order
                            ? `${dashboardData?.lastPeriodAdvertiserData?.cvr_order.toFixed(2)}%`
                            : '0.00%'}
                        </Box>

                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.cvr_order == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                        dashboardData?.lastPeriodAdvertiserData?.cvr_order
                                    ) * 100
                                  ) === 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                        dashboardData?.lastPeriodAdvertiserData?.cvr_order
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
                          {dashboardData?.data?.cvr_order || dashboardData?.lastPeriodAdvertiserData?.cvr_order
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                    dashboardData?.lastPeriodAdvertiserData?.cvr_order) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                      dashboardData?.lastPeriodAdvertiserData?.cvr_order
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.cvr_order == 0 ? (
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
                                (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                  dashboardData?.lastPeriodAdvertiserData?.cvr_order
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.cvr_order === null ? (
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
                                (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                  dashboardData?.lastPeriodAdvertiserData?.cvr_order
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
                      <Typography className="report-card-header">CVR (Units)</Typography>
                      <Tooltip title={dashboardData?.data && dashboardData?.data?.cvr_unit.toFixed(2)}>
                        <Typography className="report-card-value">
                          {dashboardData?.data && dashboardData?.data?.cvr_unit
                            ? `${dashboardData?.data?.cvr_unit.toFixed(2)}%`
                            : '0.00%'}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                        <Box>
                          {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                            ? `${dashboardData?.lastPeriodAdvertiserData?.cvr_unit.toFixed(2)}%`
                            : '0.00%'}
                        </Box>
                        <Box
                          sx={{
                            color:
                              dashboardData == null || !dashboardData.data || dashboardData.data.cvr_unit == 0
                                ? ''
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                        dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                                    ) * 100
                                  ) === 0
                                ? 'grey'
                                : Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                        dashboardData?.lastPeriodAdvertiserData?.cvr_unit
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
                          {dashboardData?.data?.cvr_unit || dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                            ? isFinite(
                                (
                                  ((dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                    dashboardData?.lastPeriodAdvertiserData?.cvr_unit) *
                                  100
                                ).toFixed(2)
                              )
                              ? `${Math.round(
                                  parseFloat(
                                    (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                      dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                                  ) * 100
                                )}%`
                              : 'N/A'
                            : '0.00%'}

                          {dashboardData == null || !dashboardData.data || dashboardData.data.cvr_unit == 0 ? (
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
                                (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                  dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                              ) * 100
                            ) === 0 || dashboardData?.lastPeriodAdvertiserData?.cvr_unit === null ? (
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
                                (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                  dashboardData?.lastPeriodAdvertiserData?.cvr_unit
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
                        <Typography className="report-card-header-expand">Impressions</Typography>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_impressions} enterDelay={1000}>
                          <Typography
                            sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                          >
                            {dashboardData?.data && dashboardData?.data?.total_impressions
                              ? KFormatter(dashboardData?.data?.total_impressions)
                              : `0.00`}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={
                              dashboardData?.lastPeriodAdvertiserData &&
                              dashboardData?.lastPeriodAdvertiserData?.total_impressions
                            }
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData &&
                              dashboardData?.lastPeriodAdvertiserData?.total_impressions
                                ? KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_impressions)
                                : `0.00`}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              alignContent: 'center',
                              alignItems: 'center',
                              display: 'flex',

                              fontWeight: 100,
                              fontSize: '12px'
                            }}
                          >
                            {dashboardData?.data?.total_impressions || dashboardData?.lastPeriodAdvertiserData?.total_impressions
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.total_impressions -
                                      dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_impressions) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_impressions -
                                        dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_impressions
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.total_impressions == null ? (
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
                                  (dashboardData?.data?.total_impressions -
                                    dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_impressions
                                ) * 100
                              ) === 0 ? (
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
                                  (dashboardData?.data?.total_impressions -
                                    dashboardData?.lastPeriodAdvertiserData?.total_impressions) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_impressions
                                ) * 100
                              ) > 0 ? (
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  borderRadius: '5px',
                                  backgroundColor: '#919191',
                                  color: '#ffffff',
                                  ml: '5px'
                                }}
                              >
                                <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                              </Avatar>
                            ) : (
                              <span>
                                <Avatar
                                  variant="rounded"
                                  sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '5px',
                                    backgroundColor: '#919191',
                                    color: '#ffffff',
                                    ml: '5px'
                                  }}
                                >
                                  <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                </Avatar>
                              </span>
                            )}
                          </Box>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="column" sx={{ p: 1 }}>
                      <Grid item>
                        <Typography className="report-card-header-expand" sx={{ mt: '5px' }}>
                          CVR (Orders)
                        </Typography>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.cvr_order.toFixed(2)}>
                          <Typography
                            sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                          >
                            {dashboardData?.data && dashboardData?.data?.cvr_order
                              ? `${dashboardData?.data?.cvr_order.toFixed(2)}%`
                              : '0.00%'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.cvr_order
                              ? `${dashboardData?.lastPeriodAdvertiserData?.cvr_order.toFixed(2)}%`
                              : '0.00%'}
                          </Box>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.cvr_order == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                          dashboardData?.lastPeriodAdvertiserData?.cvr_order
                                      ) * 100
                                    ) === 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                          dashboardData?.lastPeriodAdvertiserData?.cvr_order
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
                            {dashboardData?.data?.cvr_order || dashboardData?.lastPeriodAdvertiserData?.cvr_order
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                      dashboardData?.lastPeriodAdvertiserData?.cvr_order) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                        dashboardData?.lastPeriodAdvertiserData?.cvr_order
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}
                            {dashboardData == null || !dashboardData.data || dashboardData.data.cvr_order == 0 ? (
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
                                  (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                    dashboardData?.lastPeriodAdvertiserData?.cvr_order
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.cvr_order === null ? (
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
                                  (dashboardData?.data?.cvr_order - dashboardData?.lastPeriodAdvertiserData?.cvr_order) /
                                    dashboardData?.lastPeriodAdvertiserData?.cvr_order
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
                        <Typography className="report-card-header-expand" sx={{ mt: '5px' }}>
                          Clicks
                        </Typography>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.total_clicks} enterDelay={1000}>
                          <Typography
                            sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                          >
                            {dashboardData?.data && dashboardData?.data?.total_clicks
                              ? KFormatter(dashboardData?.data?.total_clicks)
                              : `0.00`}
                          </Typography>
                        </Tooltip>

                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Tooltip
                            title={
                              dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_clicks
                            }
                            enterDelay={1000}
                          >
                            <Box sx={{ mr: '7px' }}>
                              {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.total_clicks
                                ? KFormatter(dashboardData?.lastPeriodAdvertiserData?.total_clicks)
                                : `0.00`}
                            </Box>
                          </Tooltip>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.total_clicks == null
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_clicks -
                                          dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_clicks
                                      ) * 100
                                    ) === 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.total_clicks -
                                          dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                          dashboardData?.lastPeriodAdvertiserData?.total_clicks
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
                            {dashboardData?.data?.total_clicks || dashboardData?.lastPeriodAdvertiserData?.total_clicks
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                      dashboardData?.lastPeriodAdvertiserData?.total_clicks) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.total_clicks -
                                        dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                        dashboardData?.lastPeriodAdvertiserData?.total_clicks
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.total_clicks == null ? (
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
                                  (dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_clicks
                                ) * 100
                              ) === 0 ? (
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
                                  (dashboardData?.data?.total_clicks - dashboardData?.lastPeriodAdvertiserData?.total_clicks) /
                                    dashboardData?.lastPeriodAdvertiserData?.total_clicks
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
                        <Typography className="report-card-header-expand">CVR (Units)</Typography>
                        <Tooltip title={dashboardData?.data && dashboardData?.data?.cvr_unit.toFixed(2)}>
                          <Typography
                            sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                          >
                            {dashboardData?.data && dashboardData?.data?.cvr_unit
                              ? `${dashboardData?.data?.cvr_unit.toFixed(2)}%`
                              : '0.00%'}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                              ? `${dashboardData?.lastPeriodAdvertiserData?.cvr_unit.toFixed(2)}%`
                              : '0.00%'}
                          </Box>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.cvr_unit == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                          dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                                      ) * 100
                                    ) === 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                          dashboardData?.lastPeriodAdvertiserData?.cvr_unit
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
                            {dashboardData?.data?.cvr_unit || dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                      dashboardData?.lastPeriodAdvertiserData?.cvr_unit) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                        dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.cvr_unit == 0 ? (
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
                                  (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                    dashboardData?.lastPeriodAdvertiserData?.cvr_unit
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.cvr_unit === null ? (
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
                                  (dashboardData?.data?.cvr_unit - dashboardData?.lastPeriodAdvertiserData?.cvr_unit) /
                                    dashboardData?.lastPeriodAdvertiserData?.cvr_unit
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
                        <Typography className="report-card-header-expand">CTR</Typography>

                        <Typography
                          sx={{ color: '#000', fontSize: '1.3rem', fontWeight: 550, textAlign: 'left', mb: 0.75, mt: '5px' }}
                        >
                          {dashboardData?.data && dashboardData?.data?.ctr ? `${dashboardData?.data?.ctr.toFixed(2)}%` : '0.00%'}
                        </Typography>
                        <Typography sx={{ fontWeight: 600, textAlign: 'left' }}>
                          <Box sx={{ mr: '7px' }}>
                            {dashboardData?.lastPeriodAdvertiserData && dashboardData?.lastPeriodAdvertiserData?.ctr
                              ? `${dashboardData?.lastPeriodAdvertiserData?.ctr.toFixed(2)}%`
                              : '0.00%'}
                          </Box>
                          <Box
                            sx={{
                              color:
                                dashboardData == null || !dashboardData.data || dashboardData.data.ctr == 0
                                  ? ''
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                          dashboardData?.lastPeriodAdvertiserData?.ctr
                                      ) * 100
                                    ) === 0
                                  ? 'grey'
                                  : Math.round(
                                      parseFloat(
                                        (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                          dashboardData?.lastPeriodAdvertiserData?.ctr
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
                            {dashboardData?.data?.ctr || dashboardData?.lastPeriodAdvertiserData?.ctr
                              ? isFinite(
                                  (
                                    ((dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                      dashboardData?.lastPeriodAdvertiserData?.ctr) *
                                    100
                                  ).toFixed(2)
                                )
                                ? `${Math.round(
                                    parseFloat(
                                      (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                        dashboardData?.lastPeriodAdvertiserData?.ctr
                                    ) * 100
                                  )}%`
                                : 'N/A'
                              : '0.00%'}

                            {dashboardData == null || !dashboardData.data || dashboardData.data.ctr == 0 ? (
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
                                  (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                    dashboardData?.lastPeriodAdvertiserData?.ctr
                                ) * 100
                              ) === 0 || dashboardData?.lastPeriodAdvertiserData?.ctr === null ? (
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
                                  (dashboardData?.data?.ctr - dashboardData?.lastPeriodAdvertiserData?.ctr) /
                                    dashboardData?.lastPeriodAdvertiserData?.ctr
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

export default Awareness;
