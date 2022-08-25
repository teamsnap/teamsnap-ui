import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import { Icon } from '../Icon';

import 'react-datepicker/dist/react-datepicker.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type DatePickerHeaderType = {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};

const disabledColor = '#fafafa';

// Add ability to update font size
const CustomDatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: DatePickerHeaderType) => (
  <div className="u-flex u-flexAlignItemsCenter u-flexJustifyBetween u-spaceBottomMd">
    <button
      type="button"
      className="u-colorNeutral9"
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
    >
      <Icon name="left" />
    </button>
    <div className="react-datepicker__current-month u-colorNeutral9">
      {`${months[date.getMonth()]} ${date.getFullYear()}`}
    </div>
    <button
      type="button"
      className="u-colorNeutral9"
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
    >
      <Icon name="right" />
    </button>
  </div>
);

interface Props {
  containerClasses?: string;
  datetime: Date | null | undefined;
  inputClasses?: string;
}

const DateTimePicker = ({ containerClasses, datetime, inputClasses, ...rest }: Props) => {
  const {
    disabled,
    onChange,
    showTimeSelect,
    startDate,
    placeholderText,
    openToDate,
    filterTime,
    excludeTimes
  } : ReactDatePicker = rest;

  return (
    <div
      style={{ backgroundColor: `${disabled ? disabledColor : ''}` }}
      className={`date-time-picker Grid-cell u-flex u-border u-borderRadiusLg u-padSidesMd u-flexJustifyBetween u-flexAlignItemsCenter ${containerClasses}`}
      data-testid="date-time-picker-id"
    >
      <ReactDatePicker
        selected={datetime}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        timeIntervals={15}
        dateFormat="Pp"
        minDate={startDate}
        placeholderText={placeholderText || 'mm/ dd / yyyy, -- : -- --'}
        className={`u-borderNone u-padEndsMd ${inputClasses}`}
        renderCustomHeader={(props) => <CustomDatePickerHeader {...props} />}
        openToDate={openToDate}
        filterTime={filterTime}
        excludeTimes={excludeTimes}
        disabled={disabled}
        {...rest}
      />

      <Icon mods={`${disabled ? 'u-colorNeutral5' : ''}`} name="calendar-today" />
    </div>
  );
};

DateTimePicker.defaultProps = {
  containerClasses: '',
  inputClasses: '',
};

export default DateTimePicker;
