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
import { getClassName } from '../../utils/helpers'

class ProgressBar extends PureComponent {
  render () {
    const { className, style, title, width, size, type } = this.props

    const progressClasses = getClassName(className, size && `ProgressBar--${size}`, mods)
    const statusClasses = getClassName('ProgressBar-status', `ProgressBar-status--${type}`)

    return (
      <div className={ className } style={ style }>
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
  className: PropTypes.string,
  style: PropTypes.object
}

ProgressBar.defaultProps = {
  width: '0%',
  title: null,
  size: null,
  type: 'positive',
  className: 'ProgressBar',
  mods: null,
  style: {}
}

export default ProgressBar
