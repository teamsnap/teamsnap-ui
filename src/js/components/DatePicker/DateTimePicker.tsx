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
  datetime: Date | null | undefined;
  inputClasses?: string;
  disabled?: boolean;
  onChange: (e: any) => void;
  openToDate?: Date;
  showTimeSelect?: boolean;
  startDate?: Date;
  filterTime?: (time: Date) => boolean;
  excludeTimes?: Date[];
}

const DateTimePicker = ({
  datetime,
  inputClasses,
  disabled,
  onChange,
  openToDate,
  showTimeSelect,
  startDate,
  filterTime,
  excludeTimes,
}: Props) => (
  <div
    style={{ backgroundColor: `${disabled ? disabledColor : ''}` }}
    className={`date-time-picker Grid-cell u-flex u-border u-borderRadiusLg u-padSidesMd u-flexJustifyBetween u-flexAlignItemsCenter ${inputClasses}`}
    data-testid="date-time-picker-id"
  >
    <ReactDatePicker
      selected={datetime}
      onChange={onChange}
      showTimeSelect={showTimeSelect}
      timeIntervals={15}
      dateFormat="Pp"
      minDate={startDate}
      placeholderText="mm/ dd / yyyy, -- : -- --"
      className="u-borderNone u-padEndsMd u-xs-fontSizeLg u-fontSizeMd"
      renderCustomHeader={(props) => <CustomDatePickerHeader {...props} />}
      openToDate={openToDate}
      filterTime={filterTime}
      excludeTimes={excludeTimes}
      disabled={disabled}
    />

    <Icon mods={`${disabled ? 'u-colorNeutral5' : ''}`} name="calendar-today" />
  </div>
);

DateTimePicker.defaultProps = {
  inputClasses: '',
  disabled: false,
  showTimeSelect: false,
  startDate: new Date(),
  openToDate: undefined,
  filterTime: () => true,
  excludeTimes: [],
};

export default DateTimePicker;
