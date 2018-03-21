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
    const { className, mods, style, title, width, size, type, isInline } = this.props

    const progressClasses = getClassName(
      className, 
      size && `ProgressBar--${size}`,
      isInline && 'ProgressBar--inline',
      mods
    )

    const statusClasses = getClassName('ProgressBar-status', type && `ProgressBar-status--${type}`)

    return (
      <div className={ progressClasses } style={ style }>
        { title && <p className='ProgressBar-title'>{ title }</p> }
        <div className='ProgressBar-range'>
          <div className={ statusClasses } style={{ width }}></div>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  isInline: PropTypes.bool,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

ProgressBar.defaultProps = {
  width: '0%',
  title: null,
  size: null,
  type: 'positive',
  isInline: false,
  className: 'ProgressBar',
  mods: null,
  style: {}
}

export default ProgressBar
