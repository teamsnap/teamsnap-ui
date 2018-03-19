import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Select extends PureComponent {
  renderOptions = option => {
    const { label, value, disabled } = option

    return <option key={ value } value={ value } disabled={ disabled }>{ label }</option>
  }

  render () {
    const { name, options, className, mods, style, inputProps } = this.props

    return (
      <div className={ getClassName(className,mods) } style={ style }>
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
  style: PropTypes.object
}

Select.defaultProps = {
  inputProps: {},
  className: 'SelectBox',
  mods: null,
  style: {}
}

export default Select
