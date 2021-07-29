/**
 * @name Combobox
 *
 * @description
 *  A common combobox component that will render the appropriate styles. This calls the shared components InputControl
 *  with all the appropriate options. See the teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/checkbox.html
 *
 * @example
 *  <Combobox
 *    name="birthdate"
 *    buttonLabel="Birthdate"
 *    searchLabel="Search for a year"
 *    items={["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]} />
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { getClassName } from "../../utils/helpers";
import { Panel } from "../Panel";
import { PanelFooter } from "../PanelFooter";
import { PanelBody } from "../PanelBody";
import { PanelRow } from "../PanelRow";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

const propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  searchLabel: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
  disabled: PropTypes.bool,
};
interface Filter {
  value: string;
  label: string;
}

type ComboBoxType = React.FunctionComponent<
  PropTypes.InferProps<typeof propTypes>
>;
const ComboBox: ComboBoxType = (props) => {
  const {
    name,
    buttonLabel,
    style,
    otherProps,
    disabled,
    className,
    mods,
    items,
    onChange
  } = props;

  const [flyoutVisible, toggleFlyout] = React.useState(false);
  const [comboLabel, setComboLabel] = React.useState('');
  const [hasFilters, setHasFilters] = React.useState(false);

  const [filterList, setFilterList] = React.useState([]);
  const [uncheckedFilters, setUncheckedFilters] = React.useState([]);
  const [checkedFilters, setCheckedFilters] = React.useState([]);

  React.useEffect(() => {
    setComboLabel(buttonLabel);
    mapFilters();
  }, []);

  React.useEffect(() => {
    setUncheckedFilters([]);
    setCheckedFilters([]);
    mapFilters();
  }, [flyoutVisible]);

  const mapFilters = () => {
    if (flyoutVisible) {
      let checked = [];
      let unchecked = [];
      items.map(item => {
        if (filterList.includes(item.value)) {
          checked.push(item);
        } else {
          unchecked.push(item);
        }
      })
      setUncheckedFilters(unchecked);
      setCheckedFilters(checked);
    }
  }

  const createLabel = (acc, value) => {
    return `${acc}, ${items.find(item => item.value == value).label}`;
  }
 
  const applyFilters = () => {
    if (filterList.length > 0) {
      setComboLabel(filterList.reduce(createLabel, ''));
      toggleFlyout(!flyoutVisible);
      setHasFilters(true);
      onChange(filterList);
    } else {
      clearFilters();
    }
  }

  const clearFilters = () => {
    setComboLabel(buttonLabel);
    setFilterList([]);
    toggleFlyout(!flyoutVisible);
    setHasFilters(false);
    onChange([]);
  }

  const buildCheckbox = (filter, idx) => {
    return (
      <Checkbox
        key={`${name}-${idx}`}
        mods={`${idx === items.length - 1 ? "u-padBottomNone" : ""}`}
        name={filter.value}
        label={filter.label}
        inputProps={{
          checked: filterList.includes(filter.value),
          value: filter.value,
          onChange: () => {
            if (filterList.includes(filter.value)) {
              setFilterList(filterList.filter(filter => filter != filter.value));
            } else {
              setFilterList([...filterList, filter.value]);
            }
          }
        }}
      />
    )
  }

  return (
    <div
      className={getClassName(className, mods)}
      style={style}
      {...otherProps}
    >
      <button
        className={`Combobox-toggle ${hasFilters ? 'Combobox-toggle--active' : ''}`} 
        name={name}
        id={name}
        disabled={disabled}
        title={comboLabel}
        onClick={() => {
          toggleFlyout(!flyoutVisible)
        }}
      >
        { comboLabel !== buttonLabel ? comboLabel.substring(1) : buttonLabel}
      </button>
      {flyoutVisible &&
        <Panel mods="Combobox-checkboxContainer">
          <PanelBody mods="Combobox-checkboxes">
            {checkedFilters?.length > 0 && 
            <PanelRow>
              {checkedFilters.map((item: Filter, idx) => buildCheckbox(item, idx))}
            </PanelRow>
            }
            {uncheckedFilters?.length > 0 && 
            <PanelRow mods="Combobox-checkboxes--unchecked">
              {uncheckedFilters.map((item: Filter, idx) => buildCheckbox(item, idx))}
            </PanelRow>
            }
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

ComboBox.propTypes = propTypes;

ComboBox.defaultProps = {
  mods: null,
  style: {},
  className: "Combobox",
  otherProps: {},
};

export default ComboBox;
