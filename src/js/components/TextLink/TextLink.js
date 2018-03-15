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
    const { children, className, style, location, routerLink, onClick, disabled } = this.props
    
    // Define anchorTag to be the passed in router 'Link' or 'a' as default.
    const AnchorTag = routerLink || 'a'

    // Various React Routers use the attribute 'to' as opposed to the html anchors default 'href'
    const linkType = { [routerLink ? 'to' : 'href']: location }
    
    return (
      <AnchorTag
        className={ className }
        style={ style } 
        onClick={ onClick } 
        disabled={ disabled }
        children={ children }
        { ...linkType } />
    )
  }
}

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  routerLink: PropTypes.func,
  location: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

TextLink.defaultProps = {
  routerLink: null,
  location: '',
  onClick: null,
  disabled: false,
  className: '',
  style: {}
}

export default TextLink
