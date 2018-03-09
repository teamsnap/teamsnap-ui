import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { _merge } from 'utils/helpers'

/**
 * ProgressBar
 * 
 * @extends PureComponent
 * @example
 * <ProgressBar
 *   className={ 'InvoiceProgress' }
 *   title={ 'Percentage Paid' }
 *   type='positive'
 *   size='large'
 *   progress='20%' />
 */

class ProgressBar extends PureComponent {
  getBaseClasses = (className) => {
    const { inline } = this.props
    let classes = [
      'ProgressBar'
      ...className,
    ]
    if (inline) {
      classes.push('ProgressBar--inline')
    }
    return classes.join(' ')
  }
  
  statusClasses = [
    'positive': 'ProgressBar-status'
    'negative': 'ProgressBar-status ProgressBar--negative'
    'neutral': 'ProgressBar-status ProgressBar-status--neutral'
  ]
  
  barSize = [
    'small': 'ProgressBar-range ProgressBar--small'
  ]

  render () {
    const { className, style, title, progress, type, size, type } = this.props

    return (
      <div className={ getBaseClasses(className) } style={ style } >
        { title && <p className='ProgressBar-title'>{ title }</p> }
        <div className={ barSize[size] }>
          <div className={ statusClasses[type] } style={ width: progress }></div>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string
  size: PropTypes.string,
  inline: PropTypes.bool,
  style: PropTypes.shapeOf({})
}

ProgressBar.defaultProps = {
  title: null,
  type: 'positive'
  inline: false,
  style: false,
}

export default ProgressBar
