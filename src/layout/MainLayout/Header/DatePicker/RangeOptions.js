import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  subMonths,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears
} from 'date-fns';
import moment from 'moment';

const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  startOfLastSevenDay: startOfDay(addDays(new Date(), -6)),
  startOf3LastSevenDay: startOfDay(addDays(new Date(), -7)),
  startOfLast14Day: startOfDay(addDays(new Date(), -13)),
  startOfLastThirtyDay: startOfDay(addDays(new Date(), -30)),
  startOfLast29Day: startOfDay(addDays(new Date(), -31)),
  startOfLastNintyDay: startOfDay(addDays(new Date(), -90)),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOflastYear: startOfYear(addYears(new Date(), -1)),
  startOf2lastYear: startOfYear(addYears(new Date(), -2)),
  endOflastYear: endOfYear(addYears(new Date(), -1)),
  startOfLast12Months: subMonths(new Date(), 12),
  startOfLast120Months: subMonths(addDays(new Date(), -1), 12),
  startOfLast24Months: subMonths(new Date(), 24),
  startOfLast60Day: startOfDay(addDays(new Date(), -60)),
  startOf2LastMonth: startOfMonth(addMonths(new Date(), -2)),
  endOf2LastMonth: endOfMonth(addMonths(new Date(), -2))
};
export const sideBarOptions = () => {
  const customDateObjects = [
    {
      label: 'Today',
      range: () => ({ key: 'selection', startDate: defineds.startOfToday, endDate: defineds.endOfToday }),
      compareRange: () => ({ key: 'compare', startDate: defineds.startOfYesterday, endDate: defineds.endOfYesterday }) // Example comparison range
    },
    {
      label: 'Last 7 days',
      range: () => ({ key: 'selection', startDate: defineds.startOfLastSevenDay, endDate: defineds.endOfToday }),
      compareRange: () => ({
        key: 'compare',
        startDate: defineds.startOfLast14Day,
        endDate: defineds.startOf3LastSevenDay
      }) // Example comparison range
    },
    {
      label: 'Last 30 days',
      range: () => ({ key: 'selection', startDate: defineds.startOfLastThirtyDay, endDate: defineds.startOfYesterday }),
      compareRange: () => ({ key: 'compare', startDate: defineds.startOfLast60Day, endDate: defineds.startOfLast29Day }) // Example comparison range
    },
    {
      label: 'Month to Date',
      range: () => ({ key: 'selection', startDate: defineds.startOfMonth, endDate: defineds.startOfToday }),
      compareRange: () => ({ key: 'compare', startDate: defineds.startOfLastMonth, endDate: defineds.startOfLast29Day }) // Example comparison range
    },
    {
      label: 'Last month',
      range: () => ({ key: 'selection', startDate: defineds.startOfLastMonth, endDate: defineds.endOfLastMonth }),
      compareRange: () => ({ key: 'compare', startDate: defineds.startOf2LastMonth, endDate: defineds.endOf2LastMonth }) // Example comparison range
    },
    {
      label: 'Last 12 months',
      range: () => ({ key: 'selection', startDate: defineds.startOfLast12Months, endDate: defineds.startOfYesterday }),
      compareRange: () => ({
        key: 'compare',
        startDate: defineds.startOfLast24Months,
        endDate: defineds.startOfLast120Months
      }) // Example comparison range
    },
    {
      label: 'Year to Date',
      range: () => ({ key: 'selection', startDate: defineds.startOfYear, endDate: defineds.startOfYesterday }),
      compareRange: () => ({
        key: 'compare',
        startDate: defineds.startOflastYear,
        endDate: defineds.startOfLast120Months
      }) // Example comparison range
    },
    {
      label: 'Last Year',
      range: () => ({ key: 'selection', startDate: defineds.startOflastYear, endDate: defineds.endOflastYear }),
      compareRange: () => ({ key: 'compare', startDate: defineds.startOfYesterday, endDate: defineds.endOfYesterday }) // Example comparison range
    }
  ];
  return customDateObjects;
};

export const DateHilightedCustom = (ranges) => {
  if (ranges?.selection) {
    // Parse date strings using Moment.js
    const FormatDate = 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)';
    const date1 = moment(ranges?.selection?.startDate, FormatDate);
    const date2 = moment(ranges?.selection?.endDate, FormatDate);

    const diffInDays = date2.diff(date1, 'days');
    const compareEndDate = endOfDay(addDays(new Date(date1), -1));
    const compareStartDate = startOfDay(addDays(new Date(compareEndDate), -diffInDays));
    const compare = {
      key: 'compare',
      startDate: compareStartDate,
      endDate: compareEndDate
    };
    return compare;
  } else {
    console.log('compare', ranges);
  }
};
