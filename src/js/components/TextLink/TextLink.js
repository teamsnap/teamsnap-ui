/**
 * TextLink
 * 
 * A common link component that will render the appropriate styles for a link.
 * 
 * Example:
 *  <TextLink
 *    routerLink={ Link }
 *    location="/home"
 *    className="LinkTest"
 *    style={{ color: 'red'}} />
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class TextLink extends PureComponent {
  render () {
    const { className, style, children, location, routerLink, ...other } = this.props
    
    // Define anchorTag to be the passed in router 'Link' or 'a' as default.
    const AnchorTag = routerLink || 'a'
    
    return (
      <AnchorTag 
        className={ className }
        style={ style }
        { [routerLink ? 'to' : 'href']: location }
        { ...other }>
        { children }
      </AnchorTag>
    )
  }
}

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  routerLink: PropTypes.func,
  location: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shapeOf({})
}

TextLink.defaultProps = {
  routerLink: null,
  location: '',
  className: '',
  style: {}
}

export default TextLink
