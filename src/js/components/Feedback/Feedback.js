/**
 * @name Feedback
 *
 * @description
 *  A feedback component for displaying error, warning, and success messages
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/feedback.html
 *
 * @example
 *  <Feedback
 *    color='primary'
 *    icon='check'
 *    dismissible=true
 *    title="Sample feedback"
 *    text="You've provided feedback!" />
 *    
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { getClassName } from '../../utils/helpers'

class Feedback extends PureComponent {
  renderDismiss = (handleClose) => (
    <i className='Feedback-dismiss' onClick={ handleClose }>
      <Icon name='dismiss' />
    </i>
  )

  setAutoCloseTimeout = (props) => {
    const { autoClose, autoCloseDuration, handleClose } = props

    if (autoClose && handleClose) {
      this.autoCloseTimer = setTimeout(() => {
        handleClose()
      }, autoCloseDuration)
    }
  }

  clearAutoCloseTimeout = () => {
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer)
    }
  }

  renderIcon = (icon) => (
    <div className='Feedback-icon'>
      <Icon name={ icon } />
    </div>
  )
  render () {
    const {
      icon,
      title,
      message,
      children,
      handleClose,
      className,
      color,
      style,
      mods,
      otherProps,
      isDismissible
    } = this.props

    const feedbackClassName = getClassName(
      className,
      handleClose && `Feedback--dismissible`,
      color && `Feedback--${color}`,
      mods
    )

    const feedbackStyle = {
      ...(!icon && { paddingLeft: '8px' }),
      ...style
    }

    return (
      <div className={ feedbackClassName } role='alert' style={ feedbackStyle } { ...otherProps }>
        { icon && this.renderIcon(icon) }
        { title && <span className='Feedback-title'>{ title }</span> }
        { message }
        { children }
        { isDismissible && handleClose && this.renderDismiss(handleClose) }
      </div>
    )
  }
}

export default Feedback;

Feedback.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.shape({}),
  mods: PropTypes.string,
  otherProps: PropTypes.shape({}),
  autoClose: PropTypes.bool,
  autoCloseDuration: PropTypes.number,
  isDismissible: PropTypes.bool
}

Feedback.defaultProps = {
  icon: '',
  title: '',
  message: '',
  children: null,
  handleClose: null,
  className: 'Feedback',
  color: '',
  style: {},
  mods: '',
  otherProps: {},
  autoClose: false,
  autoCloseDuration: 5000,
  isDismissible: true
}
