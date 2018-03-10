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
import TextLink from '../TextLink'

class Button extends PureComponent {
  renderButtonLink = () => (
    <TextLink { ...this.props } />
  )

  renderButton = () => {
    const { children, type, className, style, ...otherProps } = this.props

    return (
      <button type={ type } className={ className} style={ style } { ...otherProps }>
        { children }
      </button>
    )
  }

  render () {
    const { location } = this.props
    return location ? this.renderButtonLink() : this.renderButton()
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  routerLink: PropTypes.func,
  location: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

Button.defaultProps = {
  type: 'button',
  routerLink: null,
  location: '',
  className: 'Button',
  style: {}
}

export default Button
