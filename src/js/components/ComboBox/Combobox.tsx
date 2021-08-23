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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';
import { Panel } from '../Panel';
import { PanelFooter } from '../PanelFooter';
import { PanelBody } from '../PanelBody';
import { PanelRow } from '../PanelRow';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Field } from '../Field';
import { Icon } from '../Icon';

const propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  searchLabel: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
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

type Props = PropTypes.InferProps<typeof propTypes>;

const ComboBox = ({
  name,
  buttonLabel,
  style,
  otherProps,
  disabled,
  className,
  mods,
  items,
  onChange,
}: Props) => {
  const [flyoutVisible, toggleFlyout] = React.useState(true);
  const [comboLabel, setComboLabel] = React.useState('');
  const [hasFilters, setHasFilters] = React.useState(false);
  const [searchParam, setSearchParam] = React.useState('');
  const [filterList, setFilterList] = React.useState([]);
  const [uncheckedfilterList, setUncheckedFilterList] = React.useState([]);
  const [selectedFilters, setSelectedFilters] = React.useState([]);

  const shouldShowSearchBar = items.length > 6;
  const filteredItems = searchParam
    ? uncheckedfilterList.filter((item) => item.label.includes(searchParam))
    : uncheckedfilterList;

  const createLabel = (acc, filter) => {
    return `${acc}, ${items.find((item) => item.value === filter.value).label}`;
  };

  const sortFilters = () => {
    const checked = [];
    const unchecked = [];

    items.forEach((item) => {
      if (selectedFilters.includes(item.value)) {
        checked.push(item);
      } else {
        unchecked.push(item);
      }
    });

    setComboLabel(checked.length > 0 ? checked.reduce(createLabel, '') : buttonLabel);
    setFilterList(checked);
    setUncheckedFilterList(unchecked);
  };

  React.useEffect(() => {
    sortFilters();
  }, [flyoutVisible]);

  const clearFilters = () => {
    setSelectedFilters([]);
    setHasFilters(false);
    onChange([]);
    toggleFlyout(!flyoutVisible);
  };

  const applyFilters = () => {
    if (selectedFilters.length > 0) {
      setComboLabel(filterList.reduce(createLabel, ''));
      toggleFlyout(!flyoutVisible);
      setHasFilters(true);
      onChange(selectedFilters);
    } else {
      clearFilters();
    }
  };

  const buildCheckbox = (filter, idx) => {
    return (
      <Checkbox
        key={`${name}-${idx}`}
        mods={`${idx === items.length - 1 ? 'u-padBottomNone' : ''}`}
        name={filter.value}
        label={filter.label}
        inputProps={{
          checked: selectedFilters.includes(filter.value),
          value: filter.value,
          onChange: () => {
            if (selectedFilters.includes(filter.value)) {
              setSelectedFilters(
                selectedFilters.filter((selectedFilter) => selectedFilter !== filter.value)
              );
            } else {
              setSelectedFilters([...selectedFilters, filter.value]);
            }
          },
        }}
      />
    );
  };

  return (
    <div className={getClassName(className, mods)} style={style} {...otherProps}>
      <button
        type="submit"
        className={`Combobox-toggle ${hasFilters ? 'Combobox-toggle--active' : ''}`}
        name={name}
        id={name}
        data-testid="comboboxButton"
        disabled={disabled}
        title={comboLabel !== buttonLabel ? comboLabel.substring(1) : ''}
        onClick={() => {
          toggleFlyout(!flyoutVisible);
        }}
      >
        {comboLabel !== buttonLabel ? comboLabel.substring(1) : buttonLabel}
      </button>
      {flyoutVisible && (
        <Panel mods="Combobox-checkboxContainer" data-testid="flyout">
          <PanelBody mods="Combobox-checkboxes">
            {shouldShowSearchBar && (
              <PanelRow mods="Grid-cell u-flexAuto u-padBottomMd">
                <Field
                  type="input"
                  formFieldProps={{
                    inputProps: {
                      value: searchParam,
                      onChange: (e) => setSearchParam(e.target.value),
                    },
                    placeholder: `Search for a ${buttonLabel}`,
                    leftIcon: <Icon className="Icon" name="search" />,
                  }}
                  name="Sample"
                />
              </PanelRow>
            )}
            {filterList?.length > 0 && (
              <PanelRow mods="Grid-cell u-flexAuto u-padBottomSm">
                {filterList.map((item: Filter, idx) => buildCheckbox(item, idx))}
              </PanelRow>
            )}
            {filteredItems?.length > 0 && (
              <PanelRow>
                {filteredItems.map((item: Filter, idx) => buildCheckbox(item, idx))}
              </PanelRow>
            )}
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

ComboBox.propTypes = propTypes;

ComboBox.defaultProps = {
  mods: null,
  style: {},
  className: 'Combobox',
  otherProps: {},
};

export default ComboBox;
