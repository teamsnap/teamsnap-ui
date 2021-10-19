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

import { Loader } from '../Loader';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Icon = ({ name, className, mods, style, testId, otherProps }: Props) => {
  const [icon, setIcon] = React.useState(null);

  const loadImage = (iconName: string) => {
    import(`../../icons/${iconName}`).then((svg) => {
      setIcon(svg.default);
    });
  };

  loadImage(name);

  if (icon) {
    return (
      <svg
        width="24"
        height="24"
        className={getClassName(className, mods)}
        style={style}
        data-testid={testId}
        {...icon.metadata}
        {...otherProps}
        dangerouslySetInnerHTML={{ __html: icon.source }}
      />
    );
  }

  return <Loader type="spin" />;
};

Icon.defaultProps = {
  className: 'Icon',
  mods: null,
  style: {},
  otherProps: {},
};

export default Icon;
