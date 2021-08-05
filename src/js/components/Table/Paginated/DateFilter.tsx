import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../../utils/helpers";
import { Panel } from "../../Panel";
import { PanelFooter } from "../../PanelFooter";
import { PanelBody } from "../../PanelBody";
import { PanelRow } from "../../PanelRow";
import { Button } from "../../Button";
import { Select } from "../../Select";
import { Field } from "../../Field";

const modes = [
  {
    label: "Year",
    value: "year"
  },
  {
    label: "Date Range",
    value: "range"
  }
];

const yearsInputRegex = new RegExp(/^[0-9,]*$/)

const propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultSelectLabel: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
};

const DateFilter = ({
  name,
  title,
  onChange,
  disabled,
  className,
  mods,
  defaultSelectLabel,
  ...props
}: PropTypes.InferProps<typeof propTypes>) => {
  const [mode, setMode] = React.useState<'year' | 'range' | 'noDate'>('year');
  const [hasFilters, setHasFilters] = React.useState(false);
  const [flyoutVisible, toggleFlyout] = React.useState(false);
  const [years, setYears] = React.useState('');
  const [buttonLabel, setButtonLabel] = React.useState(title)

  React.useEffect(() => {
    if (mode === 'noDate') {
      clearFilters()
    }
  }, [mode])

  const clearFilters = () => {
    setYears('');
    setHasFilters(false);
    onChange([]);
    toggleFlyout(!flyoutVisible);
    setButtonLabel(title)
  }

  const applyFilters = () => {
    if (years.length > 0) {
      const elements = years.split(',').filter(item => !!item)
      const cleanYears = elements.join(',')
      toggleFlyout(!flyoutVisible);
      setHasFilters(true);
      onChange(elements);
      setButtonLabel(cleanYears)
      setYears(cleanYears)
    } else {
      clearFilters();
    }
  }

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (yearsInputRegex.test(value)) {
      if (!years && value === ',') {
        return
      }
      if (value[value.length - 1] === ',' && years[years.length - 1] === ',') {
        return
      }
      setYears(value)
    }
  }

  return (
    <div
      className={getClassName(className, mods)}
      {...props}
    >
      <button
        className={`Combobox-toggle ${hasFilters ? 'Combobox-toggle--active' : ''}`}
        name={name}
        id={name}
        disabled={disabled}
        title={buttonLabel}
        onClick={() => {
          toggleFlyout(!flyoutVisible)
        }}
      >
        {buttonLabel}
      </button>
      {flyoutVisible &&
        <Panel mods="Combobox-checkboxContainer">
          <PanelBody mods="Combobox-checkboxes">
            <PanelRow mods="Grid-cell u-flexAuto u-padBottomMd">
              <Select
                name="mode"
                options={[...modes, { value: 'noDate', label: `[${defaultSelectLabel}]` }]}
                inputProps={{
                  value: mode,
                  onChange: e => {
                    setMode(e.target.value)
                  }
                }}
              />

              {mode === 'year' && (
                <Field
                  mods="u-spaceTopMd"
                  name="years"
                  caption="Use commas to separate multiple years."
                  formFieldProps={{
                    inputProps: { value: years, onChange: onChangeYear }
                  }}
                />
              )}
            </PanelRow>
          </PanelBody>
          <PanelFooter mods="u-padEndsSm u-padSidesMd">
            <Button onClick={clearFilters} mods="u-spaceRightMd u-colorNeutral7" type="link">
              Clear
            </Button>
            <Button onClick={applyFilters} type="link">Done</Button>
          </PanelFooter>
        </Panel>
      }
    </div>
  );
};

DateFilter.propTypes = propTypes;

DateFilter.defaultProps = {
  mods: null,
  style: {},
  className: "Combobox",
  otherProps: {},
  defaultSelectLabel: 'No Date'
};

export default DateFilter;
