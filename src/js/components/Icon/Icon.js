import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const svgIcon = (name) => require(`../../icons/${name}`)

class Icon extends PureComponent {
  render () {
    const { name, size: fontSize, color, className, style } = this.props
    const svg = svgIcon(name)

    return (
      <i style={{ color, fontSize }}>
        <svg className={ className } style={ style } { ...svg.metadata } dangerouslySetInnerHTML={ svg.source } />
      </i>
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
  size: 'inherit',
  color: 'inherit',
  className: 'Icon',
  style: {}
}

export default Icon
