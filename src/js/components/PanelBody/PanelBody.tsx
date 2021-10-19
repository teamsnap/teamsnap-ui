/**
 * @name PanelBody
 *
 * @description
 *  A panel body component is used with the Panel to wrap the body content.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 * @example
 *  <PanelBody>
 *    PanelBody Child Data
 *  </PanelBody>
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { getClassName } from '../../utils/helpers';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.shape({}),
  testId: PropTypes.string,
  otherProps: PropTypes.shape({}),
};

type Props = PropTypes.InferProps<typeof propTypes>;

const PanelBody = ({ children, className, mods, role, style, testId, otherProps }: Props) => (
  <div
    className={getClassName(className, mods)}
    role={role}
    style={style}
    data-testid={testId}
    {...otherProps}
  >
    {children}
  </div>
);

PanelBody.defaultProps = {
  className: 'Panel-body',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default PanelBody;
