import { Button, ButtonGroup, Dialog, FormControl, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, createStaticRanges } from 'react-date-range';
import { addDays, startOfDay } from 'date-fns';
import { Stack } from 'rsuite';
import DateCompareOptions from './DateCompareOptions';
import { DateHilightedCustom, sideBarOptions } from './RangeOptions';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import moment from 'moment';
import { dateRangePicker } from 'store/thunk/dashboardThunk';
import { useAppDispatch } from 'store';
const CustomDatePickerNEW = () => {
  const initialState = {
    selection: {
      startDate: moment().subtract(6, 'days').startOf('day').toDate(),
      endDate: moment().endOf('day').toDate(),
      key: 'selection'
    },
    compare: {
      startDate: moment().subtract(13, 'days').startOf('day').toDate(),
      endDate: moment().subtract(7, 'days').startOf('day').toDate(),
      key: 'compare'
    }
  };
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState('Last 7 days');
  const [dates, setDates] = useState(initialState);

  const [mainDates, setMainDates] = useState({
    selection: {
      startDate: moment().subtract(6, 'days').startOf('day').toDate(),
      endDate: moment().endOf('day').toDate(),
      key: 'selection'
    }
  });

  const [tempDates, setTempDates] = useState({ ...initialState });
  const [tempDatesCompare, setTempDatesCompare] = useState({ ...initialState?.compare });
  const dispatch = useAppDispatch();
  const sideBar = sideBarOptions();
  const [comparDate, setComparDate] = useState({
    startDate: startOfDay(addDays(new Date(), -1)),
    endDate: startOfDay(addDays(new Date(), -1)),
    key: 'compare'
  });

  const handleApply = () => {
    setTempDates({ ...dates });
    setTempDatesCompare({ ...comparDate });
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  useEffect(() => {
    if (dates && !show) {
      dispatch(
        dateRangePicker({
          startDate: moment(dates?.selection?.startDate).format('YYYY-MM-DD'),
          endDate: moment(dates?.selection?.endDate).format('YYYY-MM-DD'),
          comparison_startDate: moment(dates?.compare?.startDate).format('YYYY-MM-DD'),
          comparison_endDate: moment(dates?.compare?.endDate).format('YYYY-MM-DD')
        })
      );
    }
  }, [dates, show]);

  useEffect(() => {
    if (show) {
      setDates(tempDates);
    }
  }, [show, tempDates]);

  const staticRanges = [...createStaticRanges(sideBar)];

  const setSelectedDates = (ranges, demoChildren) => {
    if (ranges?.compare) {
      if (ranges?.compare?.key === 'selection') {
        if (demoChildren && demoChildren?.label !== 'Custom Range') {
          setComparDate(demoChildren?.compareRange());
          setDates({ selection: ranges?.compare, compare: demoChildren?.compareRange() });
          setMainDates(null);
        } else {
          const data = DateHilightedCustom(ranges);
          console.log(data);
        }
      } else {
        setComparDate(ranges?.compare);
      }
    } else {
      if (demoChildren && demoChildren?.label !== 'Custom Range') {
        setComparDate(demoChildren?.compareRange());
        setDates({ ...dates, compare: demoChildren?.compareRange() });
        setMainDates(null);
      } else {
        const data = DateHilightedCustom(ranges);
        setComparDate(data);
        setDates({ ...ranges, compare: data });
        setMainDates(null);
      }
    }
  };

  const handleSelect = (ranges) => {
    setDates({ ...dates, ...ranges });
    setMainDates(ranges);
  };

  useEffect(() => {
    let elements = document.getElementsByClassName('rdrStaticRangeSelected');
    if (elements.length === 0) {
      setLabel(null);
    } else {
      let requiredElement = elements[0];
      let demoChildren = sideBar?.find((menu) => menu.label === requiredElement?.innerText);
      setLabel(demoChildren?.label);
      setTimeout(() => {
        if (mainDates || demoChildren?.label !== label) {
          setSelectedDates(mainDates, demoChildren);
        }
      }, 200);
    }
  }, [dates, label, mainDates]);

  const Custom = {
    label: 'Custom Range',
    range: () => ({
      startDate: dates?.selection.startDate,
      endDate: dates?.selection.endDate
    }),
    isSelected() {
      return label ? false : true;
    }
  };
  return (
    <Stack direction="column" spacing={8} alignItems="flex-start">
      <FormControl component="fieldset">
        <ButtonGroup color="warning" variant="contained" onClick={() => setShow(true)} aria-label="outlined button group">
          <Button>
            <HistoryToggleOffOutlinedIcon />
            <Typography ml={1} variant="h5">
              Time period :
              {tempDates?.selection &&
                ` ${moment(tempDates?.selection?.startDate).format('MM/DD/yyyy')} to ${moment(
                  tempDates?.selection?.endDate
                ).format('MM/DD/yyyy')}`}
            </Typography>
          </Button>
          <Button>
            <CompareArrowsIcon />
            <Typography ml={1} variant="h5">
              Comparison period :{' '}
              {tempDatesCompare &&
                `${moment(tempDatesCompare?.startDate).format('MM/DD/yyyy')} to ${moment(tempDatesCompare?.endDate).format(
                  'MM/DD/yyyy'
                )}`}
            </Typography>
          </Button>
        </ButtonGroup>
      </FormControl>

      <Dialog fullWidth={true} maxWidth={'md'} open={show} onClose={() => setShow(false)}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DateCompareOptions
              setComparDate={setComparDate}
              setDates={setDates}
              dates={dates?.selection}
              comparDate={comparDate}
            />
          </Grid>
          <Grid item xs={8}>
            <DateRangePicker
              className="dateCalenderx"
              showDateDisplay={false}
              ranges={[dates?.selection, dates?.compare]}
              onChange={handleSelect}
              months={2}
              minDate={addDays(new Date(), -900)}
              maxDate={addDays(new Date(), 900)}
              direction="horizontal"
              //scroll={{ enabled: true }}
              staticRanges={[...staticRanges, Custom]}
              inputRanges={[]}
              rangeColors={['#3d91ff', '#fed14c']}
            />
          </Grid>
        </Grid>
        <ButtonGroup sx={{ justifyContent: 'flex-end', margin: 2 }}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleApply}>
            Apply
          </Button>
        </ButtonGroup>
      </Dialog>
    </Stack>
  );
};

export default CustomDatePickerNEW;
