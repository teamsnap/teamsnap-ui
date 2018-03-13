import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Field extends PureComponent {
  render () {
    const { children, isError, className, style, ...otherProps } = this.props

    return (
      <div className={ isError ? `${className} is-notValid` : className } style={ style } { ...otherProps }>
        { children }
      </div>
    )
  }
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
  isError: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

Field.defaultProps = {
  isError: false,
  className: 'FormGroup',
  style: {}
}

export default Field
