/**
 * @name ButtonGroup
 *
 * @description
 *  A ButtonGroup component that that wraps multiple buttons.  You can either pass individual buttons as children
 *  or as a set of objects in the buttons array prop.  See the teamsnap patterns library for more information
 *  https://teamsnap-ui-patterns.netlify.com/patterns/components/button-group.html
 *
 * @example
 *  <ButtonGroup>
 *    <Button color='primary'>Button One</Button>
 *    <Button color='negative'>Button Two</Button>
 *  </Button>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '../Button';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.array,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ButtonGroup = ({ buttons, children, className, mods, style, otherProps }: Props) => {
  const renderButtons = () => {
    return buttons.map((button, index) => <Button key={index} {...button} />);
  };

  return (
    <div className={getClassName(className, mods)} style={style} {...otherProps}>
      {children || renderButtons()}
    </div>
  );
};

ButtonGroup.defaultProps = {
  children: null,
  buttons: [],
  className: 'ButtonGroup',
  mods: null,
  style: {},
  otherProps: {},
};

export default ButtonGroup;
