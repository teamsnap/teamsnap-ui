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
    value: 'years',
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
  yearPlaceholder: PropTypes.string,
  rangeMin: PropTypes.string,
  rangeMax: PropTypes.string,
};

type Props = Omit<PropTypes.InferProps<typeof propTypes>, 'onChange'> & {
  onChange: (value?: FilterValue) => void;
  selected?: FilterValue;
};

const formatDate = (x?: string) => {
  if (!x) return undefined;

  let date = new Date(x);
  date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  date.setHours(0);
  return date;
};

const formatDisplayDate = (date: string): string => {
  return new Intl.DateTimeFormat(
    navigator.languages ? [...navigator.languages] : navigator.language
  ).format(formatDate(date));
};

const DateFilter = ({
  name,
  title,
  onChange,
  disabled,
  className,
  mods,
  noDateLabel,
  yearPlaceholder,
  rangeMin,
  rangeMax,
  selected,
  ...props
}: Props) => {
  const [mode, setMode] = React.useState<'years' | 'range' | 'noDate'>('years');
  const [hasFilters, setHasFilters] = React.useState(false);
  const [flyoutVisible, toggleFlyout] = React.useState(false);
  const [years, setYears] = React.useState('');
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');

  const clearFilters = () => {
    toggleFlyout(false);
    onChange();

    if (mode === 'noDate') {
      setMode('years');
      toggleFlyout(false);
    }
  };

  const applyFilters = () => {
    if ((mode === 'years' && !years) || (mode === 'range' && !fromDate && !toDate)) {
      setYears('');
      setFromDate('');
      setToDate('');
      return;
    }

    if (mode === 'noDate') {
      onChange({ kind: 'noDate' });
      return;
    }

    if (mode === 'range') {
      onChange({
        kind: 'range',
        value: { from: formatDate(fromDate), to: formatDate(toDate) },
      });
      return;
    }

    if (years.length > 0) {
      const elements = years.split(',').filter((item) => !!item);
      onChange({ kind: 'years', value: elements });
    }
  };

  React.useEffect(() => {
    setMode(selected?.kind || 'years')
    setHasFilters(!!selected)
    setYears(selected?.kind === 'years' ? selected.value.join(',') : '')
    setFromDate(
      selected?.kind === 'range'
      ? (selected.value.from?.toISOString().split('T')[0] || '')
      : ''
    )
    setToDate(
      selected?.kind === 'range'
      ? (selected.value.to?.toISOString().split('T')[0] || '')
      : ''
    )
  }, [selected])

  const buttonLabel = React.useMemo(() => {
    if (!selected)  return title
    
    if (selected.kind === 'noDate') return `${noDateLabel || '[No Date]'}`
    
    if (selected.kind === 'years') return selected.value.join(',')
    
    const fromRange = selected.value.from?.toString()
    const toRange = selected.value.to?.toString()
    
    if (fromRange && !toRange) return `After ${formatDisplayDate(fromRange)}`
    
    if (toRange && !fromRange) return `Before ${formatDisplayDate(toRange)}`
    
    return (
      [formatDisplayDate(fromRange), formatDisplayDate(toRange)].filter((x) => !!x).join(' - ')
    )
  }, [selected])

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

  // Set up handler when flyoutVisibility changes
  React.useEffect(() => {
    const handleBodyClick = (e) => {
      const isTargetingPopup = e.target.closest(`#Combobox-${name}`) != null;

      if (!isTargetingPopup) {
        toggleFlyout(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  React.useEffect(() => {
    if (!flyoutVisible) {
      applyFilters();
    }
  }, [flyoutVisible]);

  return (
    <div id={`Combobox-${name}`} className={getClassName(className, mods)} {...props}>
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
                options={[...modes, { value: 'noDate', label: `${noDateLabel || '[No Date]'}` }]}
                inputProps={{
                  value: mode,
                  onChange: (e) => {
                    setMode(e.target.value);
                  },
                }}
              />

              {mode === 'years' && (
                <Field
                  type="input"
                  name="years"
                  caption="Use commas to separate multiple years."
                  formFieldProps={{
                    inputProps: {
                      placeholder: yearPlaceholder,
                      value: years,
                      onChange: onChangeYear,
                    },
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
                      inputProps: {
                        min: rangeMin,
                        max: rangeMax,
                        value: fromDate,
                        onChange: (e) => setFromDate(e.target.value),
                      },
                    }}
                  />
                  <Field
                    label="To:"
                    type="date"
                    name="toDate"
                    formFieldProps={{
                      inputProps: {
                        min: rangeMin,
                        max: rangeMax,
                        value: toDate,
                        onChange: (e) => setToDate(e.target.value),
                      },
                    }}
                  />
                </>
              )}
            </PanelRow>
          </PanelBody>
          <PanelFooter mods="u-padEndsSm u-padSidesMd">
            <Button
              onClick={() => {
                clearFilters();
              }}
              mods="u-spaceRightMd u-colorNeutral7"
              type="link"
            >
              Clear
            </Button>
            <Button onClick={() => toggleFlyout(false)} type="link">
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
  yearPlaceholder: null,
  rangeMin: null,
  rangeMax: null,
};

export default DateFilter;
