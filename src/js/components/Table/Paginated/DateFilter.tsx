import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../../utils/helpers';
import { Panel } from '../../Panel';
import { PanelFooter } from '../../PanelFooter';
import { PanelBody } from '../../PanelBody';
import { PanelRow } from '../../PanelRow';
import { Button } from '../../Button';
import { Select } from '../../Select';
import { Field } from '../../Field';

interface Range {
  kind: 'range';
  value: {
    from?: Date;
    to?: Date;
  };
}

interface Years {
  kind: 'years';
  value: string[];
}

interface NoDate {
  kind: 'noDate';
}

export type FilterValue = Range | Years | NoDate;

const modes = [
  {
    label: 'Year',
    value: 'year',
  },
  {
    label: 'Date Range',
    value: 'range',
  },
];

const yearsInputRegex = new RegExp(/^[0-9,]*$/);

const propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  noDateLabel: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
};

type Props = Omit<PropTypes.InferProps<typeof propTypes>, 'onChange'> & {
  onChange: (value?: FilterValue) => void;
};

const formatDate = (x?: string) => {
  if (!x) return undefined;

  const date = new Date(`${x}T12:00:00 GMT`);
  date.setHours(0);
  return date;
};

const DateFilter = ({
  name,
  title,
  onChange,
  disabled,
  className,
  mods,
  noDateLabel,
  ...props
}: Props) => {
  const [mode, setMode] = React.useState<'year' | 'range' | 'noDate'>('year');
  const [hasFilters, setHasFilters] = React.useState(false);
  const [flyoutVisible, toggleFlyout] = React.useState(false);
  const [years, setYears] = React.useState('');
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');
  const [buttonLabel, setButtonLabel] = React.useState(title);

  const clearFilters = () => {
    setYears('');
    setFromDate('');
    setToDate('');
    setHasFilters(false);
    onChange();
    toggleFlyout(!flyoutVisible);
    setButtonLabel(title);
  };

  const applyFilters = () => {
    if ((mode === 'year' && !years) || (mode === 'range' && !fromDate && !toDate)) {
      clearFilters();
      return;
    }

    if (mode === 'noDate') {
      clearFilters();
      onChange({ kind: 'noDate' });
      setButtonLabel(`[${noDateLabel}]`);
      return;
    }

    if (mode === 'range') {
      setYears('');
      setButtonLabel([fromDate, toDate].filter((x) => !!x).join(' - '));
      toggleFlyout(!flyoutVisible);
      setHasFilters(true);
      onChange({
        kind: 'range',
        value: { from: formatDate(fromDate), to: formatDate(toDate) },
      });
      return;
    }

    if (years.length > 0) {
      const elements = years.split(',').filter((item) => !!item);
      const cleanYears = elements.join(',');
      setFromDate('');
      setToDate('');
      toggleFlyout(!flyoutVisible);
      setHasFilters(true);
      onChange({ kind: 'years', value: elements });
      setButtonLabel(cleanYears);
      setYears(cleanYears);
    }
  };

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (yearsInputRegex.test(value)) {
      if (!years && value === ',') {
        return;
      }
      if (value[value.length - 1] === ',' && years[years.length - 1] === ',') {
        return;
      }
      setYears(value);
    }
  };

  return (
    <div className={getClassName(className, mods)} {...props}>
      <button
        type="button"
        className={`Combobox-toggle ${hasFilters ? 'Combobox-toggle--active' : ''}`}
        name={name}
        id={name}
        disabled={disabled}
        title={buttonLabel}
        onClick={() => {
          toggleFlyout(!flyoutVisible);
        }}
      >
        {buttonLabel}
      </button>
      {flyoutVisible && (
        <Panel otherProps={{ 'data-testid': 'flyout' }} mods="Combobox-checkboxContainer">
          <PanelBody>
            <PanelRow mods="Grid-cell u-flexAuto u-padBottomMd">
              <Select
                name="mode"
                mods={mode === 'noDate' ? '' : 'u-spaceBottomMd'}
                options={[...modes, { value: 'noDate', label: `[${noDateLabel}]` }]}
                inputProps={{
                  value: mode,
                  onChange: (e) => {
                    setMode(e.target.value);
                  },
                }}
              />

              {mode === 'year' && (
                <Field
                  type="input"
                  name="years"
                  caption="Use commas to separate multiple years."
                  formFieldProps={{
                    inputProps: { value: years, onChange: onChangeYear },
                  }}
                />
              )}

              {mode === 'range' && (
                <>
                  <Field
                    mods="u-spaceBottomMd"
                    label="From:"
                    type="date"
                    name="fromDate"
                    formFieldProps={{
                      inputProps: { value: fromDate, onChange: (e) => setFromDate(e.target.value) },
                    }}
                  />
                  <Field
                    label="To:"
                    type="date"
                    name="toDate"
                    formFieldProps={{
                      inputProps: { value: toDate, onChange: (e) => setToDate(e.target.value) },
                    }}
                  />
                </>
              )}
            </PanelRow>
          </PanelBody>
          <PanelFooter mods="u-padEndsSm u-padSidesMd">
            <Button onClick={clearFilters} mods="u-spaceRightMd u-colorNeutral7" type="link">
              Clear
            </Button>
            <Button onClick={applyFilters} type="link">
              Done
            </Button>
          </PanelFooter>
        </Panel>
      )}
    </div>
  );
};

DateFilter.propTypes = propTypes;

DateFilter.defaultProps = {
  mods: null,
  style: {},
  className: 'Combobox',
  noDateLabel: 'No Date',
};

export default DateFilter;