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

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Select extends PureComponent {
  renderOptions = option => {
    const { label, value, disabled } = option

    return <option key={ value } value={ value } disabled={ disabled }>{ label }</option>
  }

  render () {
    const { name, options, inputProps, className, mods, style, otherProps } = this.props

    return (
      <div className={ getClassName(className,mods) } style={ style } { ...otherProps }>
        <select className='SelectBox-options' name={ name } id={ name } { ...inputProps }>
          { options.map(this.renderOptions) }
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

Select.defaultProps = {
  inputProps: {},
  className: 'SelectBox',
  mods: null,
  style: {},
  otherProps: {}
}

export default Select
