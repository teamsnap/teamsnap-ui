import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Element extends PureComponent {
  render () {
    const { tag, children, className, style, attributes } = this.props

    return (
      <tag className={ className } style={ style } { ...attributes }>
        { children }
      </tag>
    )
  }
}

Element.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

Element.defaultProps = {
  children: null,
  tag: 'div',
  className: '',
  style: {},
  attributes: {}
}

export default Element
