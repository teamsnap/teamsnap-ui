/**
 * @name Panel
 *
 * @description
 *  A panel component that used to display a panel or table data.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <Panel isStriped>
 *    Panel Child Data
 *  </Panel>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class Panel extends PureComponent {
  render () {
    const { children, className, mods, isStriped, maxSize, panelImage, style, otherProps } = this.props

    const panelClasses = getClassName(
      className,
      maxSize && `Panel--${maxSize}Max-stacked`,
      isStriped && 'Panel--striped',
      mods
    )

    return (
      <div className={ panelClasses } style={ style } { ...otherProps }>
        {panelImage && 
          <div className='Panel-image'>
            <img src={panelImage.Source ? panelImage.Source : panelImage.Placeholder } />
          </div>
        }
        { children }
      </div>
    )
  }
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  isStriped: PropTypes.bool,
  maxSize: PropTypes.string,
  panelImage: PropTypes.object,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

Panel.defaultProps = {
  className: 'Panel',
  isStriped: false,
  maxSize: null,
  panelImage: null,
  mods: null,
  style: {},
  otherProps: {}
}

export default Panel
