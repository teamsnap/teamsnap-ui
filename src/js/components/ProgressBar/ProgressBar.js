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

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ProgressBar extends PureComponent {
  // THOUGHTS: I'm not sure I would do it this way.  This assumes I will always want the ProgressBar as the base
  // className.  This would go against the other components where I would string them together if i wanted.
  // So className prop would equal 'ProgressBar CustomProgressBar' or 'CustomProgressBar' depending on what I wanted.
  // We can use this function if we find it easier and move it to utils, something like createClassNames, but again
  // in this case, I think the user just passes the inline class, right? so `ProgressBar ProgressBar--inline`
  getBaseClasses = (className) => {
    const { inline } = this.props
    let classes = [
      'ProgressBar',
      ...className,
    ]
    if (inline) {
      classes.push('ProgressBar--inline')
    }
    return classes.join(' ')
  }
  
  statusClasses = {
    'positive': 'ProgressBar-status',
    'negative': 'ProgressBar-status ProgressBar--negative',
    'neutral': 'ProgressBar-status ProgressBar-status--neutral'
  }
  
  barSize = {
    'small': 'ProgressBar-range ProgressBar--small'
  }

  render () {
    const { className, style, title, progress, type, size, type } = this.props

    return (
      <div className={ getBaseClasses(className) } style={ style } >
        { title && <p className='ProgressBar-title'>{ title }</p> }
        <div className={ barSize[size] }>
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
  size: PropTypes.string,
  inline: PropTypes.bool,
  style: PropTypes.shapeOf({})
}

ProgressBar.defaultProps = {
  title: null,
  type: 'positive',
  inline: false,
  style: false,
}

export default ProgressBar
