/**
 * @name FieldLabel
 *
 * @description
 *  A field label component is used to render the html label for a form input. See the teamsnap patterns
 *  library for more information. https://teamsnap-ui-patterns.netlify.com/patterns/components/field-group.html
 *
 * @example
 *  <FieldLabel name='example'>Test Field Label</FieldLabel>
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '../../utils/helpers'

class FieldLabel extends PureComponent {
  render () {
    const { name, children, className, mods, style } = this.props

    return (
      <label htmlFor={ name } className={ getClassName(className, mods) } style={ style }>
        { children }
      </label>
    )
  }
}

FieldLabel.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object
}

FieldLabel.defaultProps = {
  name: null,
  className: 'FormGroup-label',
  mods: null,
  style: {}
}

export default FieldLabel
