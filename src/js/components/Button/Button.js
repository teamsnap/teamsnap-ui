/**
 * @name Button
 * 
 * @description
 *  A common button component that will render the appropriate styles for a button or link.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/button.html
 *
 * @example
 *  <Button
 *    handleClick={ () => console.warn('Clicky Clicky') }
 *    color='primary'
 *    size='small'
 *    isDisabled
 *    mods='u-spaceTopMd'>
 *    Click Me
 *  </Button>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TextLink from '../TextLink'
import { getClassName } from '../../utils/helpers'

class Button extends PureComponent {
  getButtonClassName = () => {
    const { className, color, size, isActive, mods } = this.props

    return getClassName(
      className,
      color && `Button--${color}`,
      size && `Button--${size}`,
      isActive && "is-active",
      mods
    )
  }

  renderButtonLink = () => {
    const { children, routerLink, location, style, isDisabled, onClick } = this.props

    return (
      <TextLink
        className={ this.getButtonClassName() }
        children={ children }
        routerLink={ routerLink }
        location={ location }
        style={ style }
        disabled={ isDisabled }
        onClick={ onClick } />
    )
  }

  renderButton = () => {
    const { children, type, style, isDisabled, onClick } = this.props

    return (
      <button
        type={ type }
        className={ this.getButtonClassName() }
        style={ style }
        onClick={ onClick }
        disabled={ isDisabled }
        children={ children } />
    )
  }

  render () {
    const { location, type } = this.props
    return (location || type === 'link') ? this.renderButtonLink() : this.renderButton()
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  routerLink: PropTypes.func,
  location: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  color: PropTypes.string,
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
  isDisabled: false,
  isActive: false,
  color: null,
  size: null,
  className: 'Button',
  mods: null,
  style: {}
}

export default Button
