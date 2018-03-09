/**
 * Button
 *   https://teamsnap-ui-patterns.netlify.com/patterns/components/button.html
 * 
 * A common button component that will render the appropriate styles for a button or a button-link. Check out the 
 * teamsnap-ui patterns library for more styling info.
 * 
 * Example:
 *  <Button
 *    text="Click Me"
 *    handleClick={ () => console.warn('Clicky Clicky') }
 *    attributes={{ className="Button Button--primary", onFocus: () => console.warn('FOCUSED') }} />
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TextLink from 'common/TextLink'

class Button extends PureComponent {
  renderButtonLink = (attrs) => {

    return (
      <TextLink { ...this.props }>
        { this.props.children || this.props.text }
      </TextLink>
    )
  }

  renderButton = () => {
    const { children, text, handleClick, className, style, attributes } = this.props
    
    const baseAttributes = { className, style, onClick: handleClick }
    const attrs = { ...baseAttributes, ...attributes }

    return (
      <button { ...attrs }>
        { children || text }
      </button>
    )
  }

  render () {
    const { type, routerLink } = this.props

    return (type === 'link' || routerLink) ? this.renderButtonLink() : this.renderButton()
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  children: PropTypes.node,
  text: PropTypes.string,
  routerLink: PropTypes.func,
  location: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

Button.defaultProps = {
  type: 'button',
  children: null,
  text: '',
  routerLink: null,
  location: '',
  handleClick: null,
  className: 'Button',
  style: {},
  attributes: {}
}

export default Button
