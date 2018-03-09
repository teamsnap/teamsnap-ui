import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// NOTE: If we aren't using 'webpack' across the board, this method will not work...
// const iconLoader = (name, className) => {
  // eslint-disable-next-line import/no-dynamic-require
  // const svgIcon = require(`!raw-loader!../../../node_modules/@teamsnap/teamsnap-ui/src/assets/icons/${name}.svg`)
  // return { __html: svgIcon.replace('<svg', `<svg class="${ className }"`) }
// }

class Icon extends PureComponent {
  render () {
    const { name, size, color, className, attributes } = this.props
    const attrs = { style: { color, fontSize: size }, ...attributes }

    // return <i { ...attrs } dangerouslySetInnerHTML={ iconLoader(name, className) } />
    return (
      <i { ...attrs } />
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  attributes: PropTypes.object
}

Icon.defaultProps = {
  size: '',
  color: '',
  className: 'Icon',
  attributes: {}
}

export default Icon
