import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Element from 'common/Element'

class Cell extends PureComponent {
  render () {   
    return (
      <Element { ...this.props }>
        { this.props.children }
      </Element>
    )
  }
}

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

Cell.defaultProps = {
  children: null,
  className: 'Grid-cell',
  style: {},
  attributes: {}
}

export default Cell
