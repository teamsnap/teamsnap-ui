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
import { PopupTooltip } from '../Popup/index';
import { PopupTooltipVariant } from '../Popup/PopupTooltip';

const propTypes = {
  name: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  searchLabel: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      subtext: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  selected: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
  disabled: PropTypes.bool,
  tooltip: PropTypes.element,
  tooltipLink: PropTypes.string,
  showFromHyperlink: PropTypes.bool,
  canCancel: PropTypes.bool,
  doneButtonText: PropTypes.string,
  showSelectAll: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  onHoverText: PropTypes.string,
};
interface Filter {
  value: string;
  label: string;
  subtext?: string;
}

type Props = PropTypes.InferProps<typeof propTypes>;

const TooltipWrapper = ({ tooltipLink, children }) => {
  if (!tooltipLink) {
    return <>{children}</>;
  }

  return (
    <a href={tooltipLink} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

TooltipWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  tooltipLink: PropTypes.string,
};

const ComboBox = ({
  name,
  buttonLabel,
  style,
  testId,
  otherProps,
  disabled,
  className,
  selected,
  mods,
  items,
  onChange,
  tooltip,
  tooltipLink,
  showFromHyperlink,
  canCancel,
  doneButtonText,
  showSelectAll,
  searchPlaceholder,
  onHoverText,
}: Props) => {
  const [initialized, setInitialized] = React.useState(false);
  const [flyoutVisible, toggleFlyout] = React.useState(false);
  const [comboLabel, setComboLabel] = React.useState('');
  const [hasFilters, setHasFilters] = React.useState(false);
  const [searchParam, setSearchParam] = React.useState('');
  const [filterList, setFilterList] = React.useState([]);
  const [uncheckedfilterList, setUncheckedFilterList] = React.useState([]);
  const [selectedFilters, setSelectedFilters] = React.useState([]);

  const shouldShowSearchBar = items.length > 6;
  const filteredItems = searchParam
    ? uncheckedfilterList.filter((item) =>
        item.label.toLowerCase().includes(searchParam.toLowerCase())
      )
    : uncheckedfilterList;

  const createLabel = (comboboxItems: any[]) => {
    return comboboxItems
      .reduce(
        (prev, current) => [...prev, items.find((item) => item.value === current.value).label],
        []
      )
      .join(', ');
  };

  const sortFilters = (currentFilters) => {
    const checked = [];
    const unchecked = [];

    items.forEach((item) => {
      if (currentFilters.includes(item.value)) {
        checked.push(item);
      } else {
        unchecked.push(item);
      }
    });

    setComboLabel(checked.length > 0 && !showFromHyperlink ? createLabel(checked) : buttonLabel);
    setFilterList(checked);
    setUncheckedFilterList(unchecked);

    if (currentFilters.length > 0) {
      setHasFilters(true);
    } else {
      setHasFilters(false);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setHasFilters(false);
    onChange([]);
    setSearchParam('');
    setComboLabel(buttonLabel);
  };

  const filtersFromPropsAreDifferent = (fromProps, currentFilters) => {
    return (
      fromProps?.length !== (currentFilters || []).length ||
      fromProps.some((item) => !(currentFilters || []).includes(item))
    );
  };

  React.useEffect(() => {
    sortFilters(selected);
    setSelectedFilters(selected);
  }, [selected]);

  React.useEffect(() => {
    setSelectedFilters(selected);
    sortFilters(selected);
    setInitialized(true);
  }, []);

  const handleBodyClick = React.useCallback((e) => {
    e.stopPropagation();
    const isTargetingPopup = e.target.closest(`#Combobox-${name}`) != null;
    if (!isTargetingPopup) {
      toggleFlyout(false);
    }
  }, []);

  React.useEffect(() => {
    if (!flyoutVisible) {
      if (initialized && filtersFromPropsAreDifferent(selected, selectedFilters) && !canCancel) {
        onChange(selectedFilters);
      }

      window.removeEventListener('click', handleBodyClick, false);
    } else {
      window.addEventListener('click', handleBodyClick, false);
    }
  }, [flyoutVisible]);

  const buildCheckbox = (filter, idx) => {
    return (
      <Checkbox
        key={`${name}-${idx}`}
        testId={`${name}-${idx}`}
        mods={`${idx === items.length - 1 ? 'u-padBottomNone' : ''}`}
        name={filter.value}
        label={
          filter.subtext ? (
            <>
              {filter.label} <span style={{ color: '#7a7a7a' }}>({filter.subtext})</span>
            </>
          ) : (
            filter.label
          )
        }
        inputProps={{
          checked: selectedFilters.includes(filter.value),
          value: filter.value,
          onChange: () => {
            if (filter.value === 'select-all') {
              let newList = filteredItems
                .map((i) => i.value)
                .concat(filterList.map((i) => i.value));
              const index = selectedFilters.indexOf('select-all');
              if (index === -1) {
                newList.push('select-all');
              } else {
                newList = [];
              }
              setSelectedFilters(newList);
            } else if (selectedFilters.includes(filter.value)) {
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
    <div
      id={`Combobox-${name}`}
      className={getClassName(className, mods)}
      style={style}
      data-testid={testId}
      {...otherProps}
    >
      <button
        type="submit"
        className={
          showFromHyperlink
            ? `Combobox-hyperlink ${disabled ? 'u-colorNeutral6' : 'u-colorPrimary6'}`
            : `Combobox-toggle ${hasFilters ? 'Combobox-toggle--active' : ''}`
        }
        name={name}
        id={name}
        data-testid="comboboxButton"
        disabled={disabled}
        title={onHoverText && disabled ? onHoverText : comboLabel ?? ''}
        onClick={() => toggleFlyout(!flyoutVisible)}
      >
        {comboLabel ?? buttonLabel}
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
                    placeholder: searchPlaceholder || `Search for a ${buttonLabel}`,
                    leftIcon: <Icon className="Icon" name="search" />,
                  }}
                  name="Sample"
                />
              </PanelRow>
            )}
            {showSelectAll && items.length > 1 && (
              <PanelRow>{buildCheckbox({ value: 'select-all', label: 'Select All' }, 0)}</PanelRow>
            )}
            {filterList?.length > 0 && (
              <PanelRow
                mods={`Grid-cell u-flexAuto u-padBottomSm ${showSelectAll ? 'u-padLeftXl' : ''}`}
              >
                {filterList.map((item: Filter, idx) => buildCheckbox(item, idx))}
              </PanelRow>
            )}
            {filteredItems?.length > 0 && (
              <PanelRow mods={showSelectAll ? 'u-padLeftXl' : ''}>
                {filteredItems.map((item: Filter, idx) => buildCheckbox(item, idx))}
              </PanelRow>
            )}
            {filteredItems?.length === 0 && filterList?.length === 0 && (
              <PanelRow>No options to display.</PanelRow>
            )}
          </PanelBody>
          <PanelFooter mods="u-padEndsSm u-padSidesMd">
            <div className="u-flex u-flexAlignItemsCenter u-flexJustifyBetween">
              <div className="u-padLeftXs">
                {tooltip && (
                  <PopupTooltip text={tooltip} variant={PopupTooltipVariant.LIGHT}>
                    <TooltipWrapper tooltipLink={tooltipLink}>
                      <Icon mods="u-colorPrimary5" name="info" />
                    </TooltipWrapper>
                  </PopupTooltip>
                )}
              </div>
              <div>
                <Button
                  onClick={() => {
                    if (!canCancel) {
                      clearFilters();
                    }

                    toggleFlyout(false);
                  }}
                  mods="u-spaceRightMd u-colorNeutral7"
                  type="link"
                  testId="combobox-cancel-button"
                >
                  {canCancel ? 'Cancel' : 'Clear'}
                </Button>
                <Button
                  onClick={() => {
                    toggleFlyout(false);
                    if (canCancel) {
                      onChange(selectedFilters);
                    }
                  }}
                  type="link"
                  testId="combobox-done-button"
                >
                  {doneButtonText}
                </Button>
              </div>
            </div>
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
  testId: null,
  className: 'Combobox',
  otherProps: {},
  selected: [],
  showFromHyperlink: false,
  canCancel: false,
  doneButtonText: 'Done',
  showSelectAll: false,
  searchPlaceholder: null,
  onHoverText: '',
};

export default ComboBox;
