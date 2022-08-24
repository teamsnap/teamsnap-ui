import * as React from 'react';
import DateTimePicker from './DateTimePicker';

export default {
  title: 'Components/Forms/DateTime',
};

export const Default = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DateTimePicker
      datetime={date}
      onChange={(datetime: Date) => setDate(datetime)}
      disabled={false}
      showTimeSelect
    />
  )
}


export const Disabled = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DateTimePicker
      datetime={date}
      onChange={(datetime: Date) => setDate(datetime)}
      startDate={(new Date())}
      disabled
      showTimeSelect
    />
  )
}

export const DateTimePickerWithSpecificStartDate = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DateTimePicker
      datetime={date}
      onChange={(datetime: Date) => setDate(datetime)}
      startDate={(new Date(2030, 11, 5))}
      showTimeSelect
    />
  )
}

export const DateTimePickerWithSpecificOpenDate = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DateTimePicker
      datetime={date}
      onChange={(datetime: Date) => setDate(datetime)}
      openToDate={(new Date(2030, 8, 28))}
      showTimeSelect
    />
  )
}


export const DateTimePickerWithExcludedTimes = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DateTimePicker
      datetime={date}
      onChange={(datetime: Date) => setDate(datetime)}
      excludeTimes={[
        new Date(2030, 8, 28, 5, 0),
        new Date(2030, 8, 28, 5, 15),
        new Date(2030, 8, 28, 5, 30),
        new Date(2030, 8, 28, 5, 45),
        new Date(2030, 8, 28, 8, 0),
        new Date(2030, 8, 28, 8, 15),
        new Date(2030, 8, 28, 8, 30),
        new Date(2030, 8, 28, 8, 45),
        new Date(2030, 8, 28, 11, 30),
        new Date(2030, 8, 28, 14, 0),
        new Date(2030, 8, 28, 14, 15),
        new Date(2030, 8, 28, 14, 30),
        new Date(2030, 8, 28, 14, 45),
        new Date(2030, 8, 28, 18, 30),
        new Date(2030, 8, 28, 20, 0),
        new Date(2030, 8, 28, 20, 15),
        new Date(2030, 8, 28, 20, 30),
        new Date(2030, 8, 28, 20, 45),
        new Date(2030, 8, 28, 21, 0),
        new Date(2030, 8, 28, 21, 15),
        new Date(2030, 8, 28, 21, 30),
        new Date(2030, 8, 28, 21, 45),
        new Date(2030, 8, 28, 22, 0),
      ]}
      showTimeSelect
    />
  )
}

export const DateTimePickerWithNoTimeOptions = () => {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DateTimePicker
      datetime={date}
      onChange={(datetime: Date) => setDate(datetime)}
    />
  )
}
