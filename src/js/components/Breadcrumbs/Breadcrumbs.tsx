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
import Icon from '../Icon/Icon';

type Props = {
  id?: string
  className?: string
  breadcrumbs: React.ReactNode[]
  style?: object
  separator?: React.ReactNode
  testId?: string
};

const Breadcrumbs = ({ className, breadcrumbs, id, style, separator, testId }: Props) => {
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
      <li>
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
    <nav
      id={id}
      aria-label="Breadcrumb"
      className={className ?? 'Nav-breadcrumb'}
      style={style}
      data-testid={testId}
    >
      <ul className="Breadcrumb">{renderBreadcrumbs()}</ul>
    </nav>
  );
};

Breadcrumbs.defaultProps = {
  className: null,
  id: null,
  style: null,
  separator: <Icon className="Icon Icon-separator" name="right" />,
  testId: null,
};

export default Breadcrumbs;
