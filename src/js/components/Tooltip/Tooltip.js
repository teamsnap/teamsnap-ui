import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

class Tooltip extends PureComponent {
  render () {
    const { text, icon, children, className, style, attributes } = this.props

    const attrs = {
      className,
      style,
      ...attributes
    }

    return (
      <span { ...attrs } data-tooltip={ text }>
        { children || <Icon name={ icon } />  }
      </span>
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

Tooltip.defaultProps = {
  icon: 'info',
  children: null,
  className: 'Tooltip Tooltip--icon',
  style: {},
  attributes: {}
}

export default Tooltip
