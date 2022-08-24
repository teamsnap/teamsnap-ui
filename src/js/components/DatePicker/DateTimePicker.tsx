import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import { Icon } from '../Icon';

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

const CustomDatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: DatePickerHeaderType) => (
  <div className="u-flex u-flexAlignItemsCenter u-flexJustifyBetween u-spaceBottomMd">
    <button type="button" className="u-colorNeutral9" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      <Icon name="left" />
    </button>
    <div className="react-datepicker__current-month u-colorNeutral9">
      {`${months[date.getMonth()]} ${date.getFullYear()}`}
    </div>
    <button type="button" className="u-colorNeutral9" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      <Icon name="right" />
    </button>
  </div>
);

interface Props {
  datetime: Date;
  inputClasses?: string;
  disabled?: boolean;
  onChange: (any) => void;
  openToDate?: Date;
  startDate?: Date;
  filterTime?: (time: Date) => boolean;
  excludeTimes?: Date[];
  error?: boolean;
}

const DateTimePicker = ({
  datetime,
  inputClasses,
  disabled,
  onChange,
  openToDate,
  startDate,
  filterTime,
  excludeTimes,
  error,
}: Props) => (
  <div
    style={{ backgroundColor: `${disabled ? '#fafafa' : ''}`}}
    className={`date-time-picker Grid-cell u-flex u-border u-borderRadiusLg u-padSidesMd u-flexJustifyBetween u-flexAlignItemsCenter ${inputClasses}`}
    data-testid="date-time-picker-id"
  >
    <ReactDatePicker
      selected={datetime}
      onChange={onChange}
      showTimeSelect
      timeIntervals={15}
      dateFormat="Pp"
      minDate={startDate}
      placeholderText="mm/ dd / yyyy, -- : -- --"
      className="u-borderNone u-padEndsMd"
      renderCustomHeader={(props) => <CustomDatePickerHeader {...props} />}
      openToDate={openToDate}
      filterTime={filterTime}
      excludeTimes={excludeTimes}
      disabled={disabled}
      error={error}
    />

    <Icon mods={`${disabled ? 'u-colorNeutral5' : ''}`} name="calendar-today" />
  </div>
);

DateTimePicker.defaultProps = {
  inputClasses: '',
  disabled: false,
  startDate: new Date(),
  openToDate: undefined,
  filterTime: () => true,
  excludeTimes: [],
  error: false,
};

export default DateTimePicker;
