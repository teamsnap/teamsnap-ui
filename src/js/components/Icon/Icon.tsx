/**
 * @name Icon
 *
 * @description
 *  An icon component used to render inline SVG icons in the html.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/icon.html
 *
 *  For a full list of available icons - https://teamsnap-ui-patterns.netlify.com/icons.html
 *
 * @example
 *  <Icon name='location' />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { getClassName } from '../../utils/helpers';

const svgIcon = (name) => require(`../../icons/${name}`);

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  otherProps: PropTypes.object,
};
const Icon = (props: PropTypes.InferProps<typeof propTypes>) => {
  const { name, className, mods, style, otherProps } = props;
  const svg = svgIcon(name) || {};

  return (
    <svg
      width="24"
      height="24"
      className={getClassName(className, mods)}
      style={style}
      {...svg.metadata}
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: svg.source }}
    />
  );
};
Icon.defaultProps = {
  className: 'Icon',
  mods: null,
  style: {},
  otherProps: {},
};

export default Icon;
