/**
 * ButtonGroup
 *  https://teamsnap-ui-patterns.netlify.com/patterns/components/button-group.html
 * 
 * A button group component that wraps multiple buttons and accepts className or style overrides. You can either pass
 * the individual buttons as children or as a set of object in the buttons array prop.
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Element from 'common/Element'
import Button from 'common/Button'

class ButtonGroup extends PureComponent {
  renderButtons = () => {
    const { buttons } = this.props

    return buttons.map(button => <Button { ...button } /> )
  }

  render () {
    return (
      <Element { ...this.props }>
        { this.props.children || this.renderButtons() }
      </Element>
    )
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

ButtonGroup.defaultProps = {
  children: null,
  buttons: [],
  className: 'ButtonGroup',
  style: {},
  attributes: {}
}

export default ButtonGroup
