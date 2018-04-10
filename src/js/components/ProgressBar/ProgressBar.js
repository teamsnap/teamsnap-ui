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
    const { progress, className, mods, style, color, size, direction, precise } = this.props

    const progressClasses = getClassName(
      className,
      size && `ProgressBar--${size}`,
      color && `ProgressBar--${color}`,
      direction === 'vertical' && 'ProgressBar--vertical',
      precise && 'ProgressBar--precise',
      mods
    )

    const progressWidth = {
      [direction === 'vertical' ? 'height' : 'width']: `${progress}%`
    }

    return (
      <div className={ progressClasses } style={ style }>
        <div className='ProgressBar-status' style={ progressWidth } />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  precise: PropTypes.bool,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

ProgressBar.defaultProps = {
  progress: 0,
  size: null,
  color: null,
  precise: false,
  direction: 'horizontal',
  className: 'ProgressBar',
  mods: null,
  style: {}
}

export default ProgressBar
