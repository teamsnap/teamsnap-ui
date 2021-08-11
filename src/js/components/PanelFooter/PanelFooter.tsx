/**
 * @name PanelFooter
 *
 * @description
 *  A panel footer component is used with the Panel to wrap the footer content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelFooter>
 *    PanelFooter Child Data
 *  </PanelFooter>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.shape({}),
  otherProps: PropTypes.shape({}),
};

type Props = PropTypes.InferProps<typeof propTypes>;

const PanelFooter = ({ children, className, mods, style, otherProps }: Props) => {
  return (
    <footer className={getClassName(className, mods)} style={style} {...otherProps}>
      {children}
    </footer>
  );
};

PanelFooter.defaultProps = {
  className: 'Panel-footer',
  mods: null,
  style: {},
  otherProps: {},
};

export default PanelFooter;
