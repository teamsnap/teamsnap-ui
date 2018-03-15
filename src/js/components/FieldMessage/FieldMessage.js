import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class FieldMessage extends PureComponent {
  render () {
    const { children, isError, className, mods, style } = this.props

    // TODO: Can we adjust this classStructure to be a modifier instead of replacement?
    //  - FormGroup-message & FormGroup-feedback are almost identical except for color
    //  - This could also inherit from the Field parent of FormGroup--error?
    const messageClasses = getClassName(
      isError ? 'FormGroup-feedback' : className,
      mods
    )

    return (
      <div className={ messageClasses } style={ style }>
        { children }
      </div>
    )
  }
}

FieldMessage.propTypes = {
  children: PropTypes.string,
  isError: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

FieldMessage.defaultProps = {
  children: null,
  isError: false,
  className: 'FormGroup-message',
  mods: null,
  style: {}
}

export default FieldMessage
