/**
 * @name Breadcrumbs
 *
 * @description
 *  A breadcrumbs component that will render the appropriate styles for breadcrumbs.
 *
 *
 * @example
 *  <Breadcrumbs breadcrumbs={breadcrumbs} home={home} />
 *
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(PropTypes.node).isRequired,
  style: PropTypes.object,
  separator: PropTypes.node,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const Breadcrumbs = ({ className, breadcrumbs, id, style, separator }: Props) => {
  const Separator = () => <>{separator}</>;

  const renderSeparator = () => {
    return (
      <li>
        <Separator />
      </li>
    );
  };

  const renderCrumb = (crumb: any) => {
    const Crumb = () => <>{crumb}</>;

    return (
      <li className={crumb.className} style={crumb.style}>
        <Crumb />
      </li>
    );
  };

  const renderBreadcrumbs = () => {
    if (!breadcrumbs) {
      return null;
    }
    return breadcrumbs.map((crumb, idx) => {
      return (
        <React.Fragment key={`breadcrumb_${idx}`}>
          {renderCrumb(crumb)}
          {idx !== breadcrumbs.length - 1 && renderSeparator()}
        </React.Fragment>
      );
    });
  };

  return (
    <nav id={id} aria-label="Breadcrumb" className={className ?? 'Nav-breadcrumb'} style={style}>
      <ul className="Breadcrumb">{renderBreadcrumbs()}</ul>
    </nav>
  );
};

Breadcrumbs.propTypes = propTypes;

Breadcrumbs.defaultProps = {
  className: null,
  id: null,
  style: null,
  separator: <Icon className="Icon Icon-separator" name="right" />,
};

export default Breadcrumbs;
