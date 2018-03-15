/**
 * Loader
 * 
 * A loader component that supports different animations such as Spin, Pulse and Jello.
 * 
 * Example:
 *  <Loader
 *    type='jello'
 *    text='loading' />
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Loader extends PureComponent {
  renderSpinAnimation = () => <span className='SpinAnimation' />

  renderPulseAnimation = () => (
    <span className='PulseAnimation'>
      <span className='PulseAnimation-dot' />
      <span className='PulseAnimation-dot' />
      <span className='PulseAnimation-dot' />
    </span>
  )

  renderJelloAnimation = () => (
    <span className='JelloAnimation'>
      <span className='JelloAnimation-shadow' />
      <span className='JelloAnimation-box' />
    </span>
  )

  renderAnimation = (type) => {
    if (type === 'jello') { return this.renderJelloAnimation() }
    else if (type === 'pulse') { return this.renderPulseAnimation() }
    else if (type === 'spin') { return this.renderSpinAnimation() }
  }

  render () {
    const { type, text, message, className, style } = this.props

    if (!text && !message) { return this.renderAnimation(type) }

    const loaderClasses = getClassName(
      className,
      type === 'jello' && 'Loader--jello',
      mods
    )

    return (
      <div className={ loaderClasses } style={ style }>
        <div className='Loader-indicator'>
          { this.renderAnimation(type) }
          { text && <div className='Loader-indicatorText'>{ text }</div> }
        </div>
        { message && <div className='Loader-message'>{ message }</div> }
      </div>
    )
  }
}

Loader.propTypes = {
  type: PropTypes.oneOf(['jello', 'pulse', 'spin']).isRequired,
  text: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

Loader.defaultProps = {
  text: null,
  message: null,
  className: 'Loader',
  mods: null,
  style: {}
}

export default Loader
