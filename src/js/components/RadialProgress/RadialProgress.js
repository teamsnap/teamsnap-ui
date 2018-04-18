import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class RadialProgress extends PureComponent {
  render () {
    const { size, color, progress, className, mods, style, otherProps } = this.props

    const degrees = (360 * (progress/100))
    const circle = {}

    if (degrees <= 180) {
      circle.first = `${degrees}deg`
      circle.second = '0deg'
      circle.className = 'RadialProgress-circle'
    } else {
      circle.first = '180deg'
      circle.second = `${degrees}deg`
      circle.className = 'RadialProgress-circle whole'
    }

    const radialClassName = getClassName(
      className,
      size && `RadialProgress--${size}`,
      color && `RadialProgress--${color}`,
      mods
    )

    return (
      <div className={ radialClassName } style={ style } { ...otherProps }>
        <div className={ circle.className }>
          <div className='RadialProgress-status' style={{ transform: `rotate(${circle.first})` }} />
          <div className='RadialProgress-status' style={{ transform: `rotate(${circle.second})` }} />
        </div>
      </div>
    )
  }
}

RadialProgress.propTypes = {
  progress: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

RadialProgress.defaultProps = {
  progress: 0,
  size: null,
  color: null,
  className: 'RadialProgress',
  mods: null,
  style: {},
  otherProps: {}
}

export default RadialProgress
