import { useState, useEffect } from 'react';

import moment from 'moment'; // Add this line to import moment
import subDays from 'date-fns/subDays';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'rsuite/dist/rsuite.css';
import { DateRangePicker, Stack } from 'rsuite';
import { addMonths, endOfMonth, startOfMonth, subMonths } from 'date-fns';
import { dateRangePicker } from 'store/thunk/dashboardThunk';
import { useAppDispatch } from 'store';

const CustomDatePicker = () => {
  const defaultStartDate = moment().subtract(6, 'days').startOf('day').toDate();
  const defaultEndDate = moment().endOf('day').toDate();
  const customDateFormat = 'MM/dd/yyyy';
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (startDate) {
      dispatch(
        dateRangePicker({
          startDate: moment(startDate).format('YYYY-MM-DD'),
          endDate: moment(endDate).format('YYYY-MM-DD')
        })
      );
    }
  }, [startDate, endDate]);

  const handleDateRange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleChange = (value) => {
    if (value) {
      setStartDate(value[0]);
      setEndDate(value[1]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleClean = () => {
    setStartDate(null);
    setEndDate(null);
    setShow(false);
  };

  const handleTodayDate = () => {
    const today = moment().endOf('day').toDate();

    handleDateRange(today, today);
    setShow(false);
  };

  const handleLast7Days = () => {
    const today = moment().endOf('day');
    const start = moment(today).subtract(6, 'days').startOf('day').toDate();
    handleDateRange(start, today.toDate());
    setShow(false);
  };

  const handleLast30Days = () => {
    const today = moment().endOf('day');
    const start = moment(today).subtract(29, 'days').startOf('day').toDate();
    handleDateRange(start, today.toDate());
    setShow(false);
  };

  const handleMonthToDate = () => {
    const today = moment().endOf('day');
    const start = moment(today).startOf('month').toDate();
    handleDateRange(start, today.toDate());
    setShow(false);
  };

  const handleLastMonth = () => {
    const start = moment().subtract(1, 'month').startOf('month').toDate();
    const end = moment(start).endOf('month').toDate();
    handleDateRange(start, end);
    setShow(false);
  };

  const handleCustomRange = () => {
    const today = moment().endOf('day');
    const start = moment(today).subtract(179, 'days').startOf('day').toDate();
    handleDateRange(start, today.toDate());
    setShow(true);
  };

  const handleLast12Months = () => {
    const today = moment().endOf('day');
    const start = moment(today).subtract(12, 'months').startOf('month').toDate();
    const end = moment(today).toDate(); // Set the end date to today's date
    handleDateRange(start, end);
    setShow(false);
  };

  const handleYearToDate = () => {
    const today = moment().endOf('day');
    const start = moment(today).startOf('year').toDate();
    handleDateRange(start, today.toDate());
    setShow(false);
  };

  const handleLastYear = () => {
    const start = moment().subtract(1, 'year').startOf('year').toDate();
    const end = moment(start).endOf('year').toDate();
    handleDateRange(start, end);
    setShow(false);
  };

  const predefinedRanges = [
    {
      label: 'Today',
      value: [new Date(), new Date()],
      placement: 'left',
      onClick: handleTodayDate
    },
    {
      label: 'Last 7 days',
      value: [subDays(new Date(), 6), new Date()],
      placement: 'left',
      onClick: handleLast7Days
    },
    {
      label: 'Last 30 days',
      value: [subDays(new Date(), 29), new Date()],
      placement: 'left',
      onClick: handleLast30Days
    },
    {
      label: 'Month to Date',
      value: [startOfMonth(new Date()), new Date()],
      placement: 'left',
      onClick: handleMonthToDate
    },
    {
      label: 'Last month',
      value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
      placement: 'left',
      onClick: handleLastMonth
    },
    {
      label: 'Last 12 months',
      value: [subMonths(new Date(), 11), new Date()],
      placement: 'left',
      onClick: handleLast12Months
    },
    {
      label: 'Year to Date',
      value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
      placement: 'left',
      onClick: handleYearToDate
    },
    {
      label: 'Last Year',
      value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
      placement: 'left',
      onClick: handleLastYear
    },
    {
      label: 'Custom Range',
      placement: 'left',
      value: [new Date(), new Date()],
      onClick: handleCustomRange
    },
    {
      label: 'clear',
      appearance: 'default',
      value: [startDate, endDate],
      style: { marginLeft: '370px' },
      onClick: handleClean
    }
  ];

  const disabledDate = (date) => {
    const today = moment().endOf('day');
    const start = moment(today).subtract(179, 'days').startOf('day');
    return !(date >= start && date <= today);
  };

  return (
    <>
      <Stack direction="column" spacing={8} alignItems="flex-start">
        <DateRangePicker
          size="lg"
          ranges={predefinedRanges}
          format={customDateFormat}
          value={[startDate, endDate]}
          placeholder="Select Date Range"
          style={{ width: 300 }}
          onChange={handleChange}
          onClean={handleClean}
          shouldDisableDate={show === true ? disabledDate : undefined}
        />
      </Stack>
    </>
  );
};

export default CustomDatePicker;
