/**
 * TextLink
 * 
 * A common link component that will render the appropriate styles for a link.
 * 
 * Example:
 *  <Link
 *    text="Click Me"
 *    routerLink={ Link }
 *    location="/home"
 *    attributes={{ className: "LinkTest", style: { color: 'red'}}} />
 * 
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class TextLink extends PureComponent {
  onLinkClick = (e) => {
    const { handleClick } = this.props
    if (!handleClick) return

    e.preventDefault()
    handleClick()
  }

  render () {
    const { children, text, location, routerLink, className, style, attributes } = this.props
    
    // Define anchorTag to be the passed in router 'Link' or 'a' as default.
    const AnchorTag = routerLink || 'a'
    
    // Most react routers use the 'to' prop with their `Link` components, href is used for the base anchor tag.
    const baseAttributes = { className, style, onClick: this.onLinkClick, [routerLink ? 'to' : 'href']: location }
    const attrs = { ...baseAttributes, ...attributes }

    return (
      <AnchorTag { ...attrs }>
        { children || text }
      </AnchorTag>
    )
  }
}

TextLink.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  routerLink: PropTypes.func,
  location: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  attributes: PropTypes.object
}

TextLink.defaultProps = {
  children: null,
  text: '',
  routerLink: null,
  location: '',
  handleClick: null,
  className: '',
  style: {},
  attributes: {}
}

export default TextLink
