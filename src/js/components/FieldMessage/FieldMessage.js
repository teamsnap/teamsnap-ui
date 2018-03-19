/**
 * @name FieldMessage
 * 
 * @description
 *  A field message component is used to render a message or error-message. See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/form-group.html
 *
 * @example
 *  <FieldMessage isError>Test Field Message Error</FieldMessage>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class FieldMessage extends PureComponent {
  render () {
    const { children, isError, className, mods, style } = this.props

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
