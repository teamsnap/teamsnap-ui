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
import { _merge } from 'utils/helpers'

const baseAttributes = {
  Loader: { className: 'Loader' },
  LoaderIndicator: { className: 'Loader-indicator' },
  LoaderIndicatorText: { className: 'Loader-indicatorText' },
  LoaderMessage: { className: 'Loader-message' }
}

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
    const { type, text, message, attributes } = this.props

    if (!text && !message) { return this.renderAnimation(type) }

    const customAttribute = type === 'jello' ? { Loader: { className: 'Loader Loader--jello' } } : {}
    const attrs = _merge(baseAttributes, customAttribute, attributes)

    return (
      <div { ...attrs.Loader }>
        <div { ...attrs.LoaderIndicator }>
          { this.renderAnimation(type) }
          { text && <div { ...attrs.LoaderIndicatorText }>{ text }</div> }
        </div>
        { message && <div { ...attrs.LoaderMessage }>{ message }</div> }
      </div>
    )
  }
}

Loader.propTypes = {
  type: PropTypes.oneOf(['jello', 'pulse', 'spin']).isRequired,
  text: PropTypes.string,
  message: PropTypes.string,
  attributes: PropTypes.object
}

Loader.defaultProps = {
  text: null,
  message: null,
  attributes: {}
}

export default Loader
