import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const iconLoader = (name, className) => {
  const svgIcon = require(`../../../assets/icons/${name}.svg`)
  return { __html: svgIcon.replace('<svg', `<svg class="${ className }"`) }
}

class Icon extends PureComponent {
  render () {
    const { name, size: fontSize, color, className, style, ...otherProps } = this.props

    return (
      <i
        style={{ color, fontSize, ...style }}
        { ...otherProps } 
        dangerouslySetInnerHTML={ iconLoader(name, className) } />
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

Icon.defaultProps = {
  size: '',
  color: '',
  className: 'Icon',
  style: {}
}

export default Icon
