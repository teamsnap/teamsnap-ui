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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

class FieldLabel extends React.PureComponent<
  PropTypes.InferProps<typeof FieldLabel.propTypes>,
  any
> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object,
  };

  static defaultProps = {
    name: null,
    className: 'FieldGroup-label',
    mods: null,
    style: {},
    otherProps: {},
  };

  render() {
    const { name, children, className, mods, style, otherProps } = this.props;

    return (
      <label
        htmlFor={name}
        className={getClassName(className, mods)}
        style={style}
        {...otherProps}
      >
        {children}
      </label>
    );
  }
}

export default FieldLabel;
