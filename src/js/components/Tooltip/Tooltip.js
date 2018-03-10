import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

class Tooltip extends PureComponent {
  render () {
    const { text, children, className, style, otherProps } = this.props

    return (
      <span className={ className } style={ style } data-tooltip={ text } { ...otherProps }>
        { children }
      </span>
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

Tooltip.defaultProps = {
  children: null,
  className: 'Tooltip',
  style: {}
}

export default Tooltip
