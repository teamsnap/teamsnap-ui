/**
 * @name ProgressBar
 *
 * @description
 *  A progress bar component that will render the appropriate styles for displaying progress by a width percent.  See
 *  the teamsnap patterns library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/progress-bar.html
 *
 * @example
 * <ProgressBar
 *   isInline
 *   title='Percentage Paid'
 *   type='negative'
 *   size='small'
 *   width='40%' />
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class ProgressBar extends PureComponent {
  render () {
    const { progress, color, size, isVertical, isPrecise, className, mods, style, otherProps } = this.props

    const progressClasses = getClassName(
      className,
      size && `ProgressBar--${size}`,
      color && `ProgressBar--${color}`,
      isVertical && 'ProgressBar--vertical',
      isPrecise && 'ProgressBar--precise',
      mods
    )

    const progressWidth = {
      [isVertical ? 'height' : 'width']: `${progress}%`
    }

    return (
      <div className={ progressClasses } style={ style } { ...otherProps }>
        <div className='ProgressBar-status' style={ progressWidth } />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  isPrecise: PropTypes.bool,
  isVertical: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

ProgressBar.defaultProps = {
  progress: 0,
  size: null,
  color: null,
  isPrecise: false,
  isVertical: false,
  className: 'ProgressBar',
  mods: null,
  style: {},
  otherProps: {}
}

export default ProgressBar
