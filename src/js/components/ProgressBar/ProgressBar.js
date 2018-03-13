/**
 * ProgressBar
 * 
 * @extends PureComponent
 * @example
 * <ProgressBar
 *   className={ 'ProgressBar ProgressBar--inline InvoiceProgress' }
 *   title={ 'Percentage Paid' }
 *   type='positive'
 *   progress='20%' />
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const statusClasses = {
  'positive': 'ProgressBar-status',
  'negative': 'ProgressBar-status ProgressBar--negative',
  'neutral': 'ProgressBar-status ProgressBar-status--neutral'
}

class ProgressBar extends PureComponent {
  render () {
    const { className, style, title, progress, type, ...otherProps } = this.props

    return (
      <div className={ className } style={ style } { ...otherProps }>
        { title && <p className='ProgressBar-title'>{ title }</p> }
        <div className='ProgressBar-range'>
          <div className={ statusClasses[type] } style={{ width: progress }}></div>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

ProgressBar.defaultProps = {
  title: null,
  type: 'positive',
  className: 'ProgressBar',
  style: {}
}

export default ProgressBar
