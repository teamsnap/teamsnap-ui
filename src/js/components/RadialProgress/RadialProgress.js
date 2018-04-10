import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class RadialProgress extends PureComponent {
  render () {
    const { className, mods, size, color, progress } = this.props

    const degrees = (360 * (progress/100))
    const circle = {}

    if (degrees <= 180) {
      circle.first = `${degrees}deg`
      circle.second = '0deg'
    } else {
      circle.first = '180deg'
      circle.second = `${degrees}deg`
    }


    const radialClassName = getClassName(
      className,
      size && `RadialProgress--${size}`,
      color && `RadialProgress--${color}`,
      mods
    )

    return (
      <div className={ radialClassName }>
        <div className='RadialProgress-circle'>
          <div className='RadialProgress-status' style={{ transform: `rotate(${circle.first})` }} />
          <div className='RadialProgress-status' style={{ transform: `rotate(${circle.second})` }} />
        </div>
      </div>
    )
  }
}

RadialProgress.propTypes = {
  className: PropTypes.string,
  mods: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  progress: PropTypes.number
}

RadialProgress.defaultProps = {
  className: 'RadialProgress',
  mods: null,
  size: null,
  color: null,
  progress: 0
}

export default RadialProgress
