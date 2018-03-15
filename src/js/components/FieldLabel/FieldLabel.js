import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class FieldLabel extends PureComponent {
  render () {
    const { name, children, className, mods, style } = this.props

    return (
      <label htmlFor={ name } className={ getClassName(className, mods) } style={ style }>
        { children }
      </label>
    )
  }
}

FieldLabel.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

FieldLabel.defaultProps = {
  name: null,
  className: 'FormGroup-label',
  mods: null,
  style: {}
}

export default FieldLabel
