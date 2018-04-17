/**
 * @name TextLink
 *
 * @description
 * A common link component that will render the appropriate styles for a link.  Accepts a routerLink which would be the
 * <Link /> function from a library like react-router.
 *
 * @example
 *  <TextLink
 *    routerLink={ Link }
 *    location="/home"
 *    style={{ color: 'red'}} />
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class TextLink extends PureComponent {
  render () {
    const { children, location, routerLink, onClick, disabled, className, mods, style, otherProps } = this.props

    // Define anchorTag to be the passed in router 'Link' or 'a' as default.
    const AnchorTag = routerLink || 'a'

    // Various React Routers use the attribute 'to' as opposed to the html anchors default 'href'
    const linkType = { [routerLink ? 'to' : 'href']: location }

    return (
      <AnchorTag
        className={ getClassName(className, mods) }
        style={ style }
        onClick={ onClick }
        disabled={ disabled }
        { ...linkType }
        { ...otherProps }>
        { children }
      </AnchorTag>
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
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object
}

TextLink.defaultProps = {
  routerLink: null,
  location: '',
  onClick: null,
  disabled: false,
  className: '',
  mods: null,
  style: {},
  otherProps: {}
}

export default TextLink
