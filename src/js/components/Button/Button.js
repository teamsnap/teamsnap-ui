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
import { getClassName } from '../../utils/helpers'

class Button extends PureComponent {
  getButtonClassName = () => {
    const { className, status, size, isActive, mods } = this.props

    return getClassName(
      className,
      status && `Button--${status}`,
      size && `Button--${size}`,
      isActive && "is-active",
      mods    
    )
  }


  renderButtonLink = () => {
    const { children, routerLink, location, style, disabled, onClick } = this.props 

    return (
      <TextLink
        className={ this.getButtonClassName() }
        children={ children }
        routerLink={ routerLink }
        location={ location }
        style={ style }
        disabled={ disabbled }
        onClick={ onClick } />
    )
  }

  renderButton = () => {
    const { children, type, className, style, disabled, onClick } = this.props

    return (
      <button
        type={ type } 
        className={ this.getButtonClassName() } 
        style={ style } 
        onClick={ onClick } 
        disabled={ disabled }
        children={ children } />
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
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  status: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

Button.defaultProps = {
  type: 'button',
  routerLink: null,
  location: '',
  onClick: null,
  disabled: false,
  isActive: false,
  status: null,
  size: null,
  className: 'Button',
  mods: null,
  style: {}
}

export default Button
