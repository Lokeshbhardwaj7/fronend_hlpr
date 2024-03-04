import { Box, Typography } from '@mui/material';

import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import 'rsuite/dist/rsuite.css';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';

const DateCompareOptions = ({ dates, comparDate, setDates, setComparDate }) => {
  const handlChange = (selected, type, dateType) => {
    if (type === 'selection') {
      setComparDate(comparDate);
      setDates({
        compare: comparDate,
        selection:
          dateType === 1
            ? { key: 'selection', startDate: selected, endDate: dates.endDate }
            : { key: 'selection', startDate: dates.startDate, endDate: selected }
      });
    } else {
      setComparDate(
        dateType === 1
          ? { key: 'compare', startDate: selected, endDate: comparDate.endDate }
          : { key: 'compare', startDate: comparDate.startDate, endDate: selected }
      );
      setDates({
        selection: dates,
        compare:
          dateType === 1
            ? { key: 'compare', startDate: selected, endDate: comparDate.endDate }
            : { key: 'compare', startDate: comparDate.startDate, endDate: selected }
      });
    }
  };

  const customPicker = (label, value, type, dateType) => {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8px',
          justifyContent: 'space-between'
        }}
      >
        <p>{label}:</p>
        <DatePicker
          format="MM/dd/yyyy"
          cleanable={false}
          value={value}
          onChange={(value) => handlChange(value, type, dateType)}
          appearance="default"
          placeholder="Default"
          style={{ width: 200 }}
        />
      </Box>
    );
  };
  return (
    <Box sx={{ borderRight: '1px solid rgb(237, 237, 240)', p: 2 }}>
      <Box sx={{ display: 'flex', paddingTop: '16px', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', aligItems: 'center' }}>
          <HistoryToggleOffOutlinedIcon />
          <Typography ml={1} variant="h5">
            Time period:
          </Typography>
        </Box>
        {customPicker('From', dates?.startDate, 'selection', 1)}
        {customPicker('To', dates?.endDate, 'selection', 2)}
      </Box>
      <Box sx={{ display: 'flex', paddingTop: '16px', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', aligItems: 'center' }}>
          <CompareArrowsIcon />
          <Typography ml={1} variant="h5">
            Comparison period:
          </Typography>
        </Box>
        {customPicker('From', comparDate?.startDate, 'compare', 1)}
        {customPicker('To', comparDate?.endDate, 'compare', 2)}
      </Box>
    </Box>
  );
};

export default DateCompareOptions;
