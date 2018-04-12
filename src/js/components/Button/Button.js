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
import Icon from '../Icon'
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

  renderIcon = (icon, mods) => icon ? <Icon name={ icon } mods={ mods } /> : null

  renderChildren = () => {
    const { label, children, icon, iconPosition } = this.props

    return (
      <span>
        { iconPosition === 'left' &&  this.renderIcon(icon, 'u-spaceRightXs') }
        { label || children }
        { iconPosition === 'right' && this.renderIcon(icon, 'u-spaceLeftXs') }
      </span>
    )
  }

  renderButtonLink = () => {
    const { routerLink, location, style, isDisabled, onClick, dataTrackingLabel } = this.props

    return (
      <TextLink
        className={ this.getButtonClassName() }
        routerLink={ routerLink }
        location={ location }
        style={ style }
        disabled={ isDisabled }
        onClick={ onClick }
        data-tracking-label={ dataTrackingLabel }>
        { this.renderChildren() }
      </TextLink>
    )
  }

  renderButton = () => {
    const { type, style, isDisabled, onClick, dataTrackingLabel } = this.props

    return (
      <button
        type={ type }
        className={ this.getButtonClassName() }
        style={ style }
        onClick={ onClick }
        disabled={ isDisabled }
        data-tracking-label={ dataTrackingLabel }>
        { this.renderChildren() }
      </button>
    )
  }

  render () {
    const { location, type } = this.props
    return (location || type === 'link') ? this.renderButtonLink() : this.renderButton()
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  label: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  routerLink: PropTypes.func,
  location: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  dataTrackingLabel: PropTypes.string
}

Button.defaultProps = {
  type: 'button',
  label: null,
  children: null,
  icon: null,
  iconPosition: 'left',
  routerLink: null,
  location: '',
  onClick: null,
  isDisabled: false,
  isActive: false,
  color: null,
  size: null,
  className: 'Button',
  mods: null,
  style: {},
  dataTrackingLabel: null
}

export default Button
