import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Element from 'common/Element'

class Grid extends PureComponent {
  render () {
    return (
      <Element { ...this.props }>
        { this.props.children }
      </Element>
    )
  }
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

Grid.defaultProps = {
  children: null,
  className: 'Grid', 
  style: {},
  attributes: {}
}

export default Grid
