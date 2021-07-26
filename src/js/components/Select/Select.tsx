/**
 * @name Select
 *
 * @description
 *  A common select component for html select elements. Includes support for a label and a generic map function
 *  for options. See teamsnap patterns lib for more information.
 *  https://teamsnap-ui-patterns.netlify.com/patterns/components/select-box.html
 *
 * @example
 *  <Select
 *    name='LineItemFeeCategory'
 *    options={[
 *      {
 *        'label': 'Tournament',
 *        'value': 'tournament'
 *      },
 *      {
 *        'label': 'Other',
 *        'value': 'other'
 *      }
 *    ]} />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

class Select extends React.PureComponent<
  PropTypes.InferProps<typeof Select.propTypes>,
  any
> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
      })
    ).isRequired,
    inputProps: PropTypes.object,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    inputProps: {},
    className: 'SelectBox',
    mods: null,
    style: {},
    otherProps: {},
  };

  renderOptions = (option) => {
    const { label, value, disabled } = option;

    return (
      <option key={value} value={value} disabled={disabled}>
        {label}
      </option>
    );
  };

  render() {
    const {
      name,
      options,
      inputProps,
      className,
      mods,
      style,
      otherProps,
      disabled,
    } = this.props;

    return (
      <div
        className={getClassName(className, mods)}
        style={style}
        {...otherProps}
      >
        <select
          className="SelectBox-options"
          name={name}
          id={name}
          disabled={disabled}
          {...inputProps}
        >
          {options.map(this.renderOptions)}
        </select>
      </div>
    );
  }
}

export default Select;
