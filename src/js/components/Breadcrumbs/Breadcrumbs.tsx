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
  className: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
      className: PropTypes.string,
      style: PropTypes.object,
    })
  ).isRequired,
  home: PropTypes.shape({ url: PropTypes.string }),
  id: PropTypes.string,
  style: PropTypes.object,
};

const Breadcrumbs: React.FunctionComponent<
  PropTypes.InferProps<typeof propTypes>
> = ({ className, breadcrumbs, home, id, style }) => {
  const renderHome = () => {
    if (!home) {
      return;
    }

    let content = <Icon className="Icon Icon-home" name="home" />;

    if (home.url) {
      content = <a href={home.url || '#'}>{content}</a>;
    }

    return <li>{content}</li>;
  };

  const renderSeparator = () => {
    return (
      <li>
        <Icon className="Icon Icon-separator" name="right" />
      </li>
    );
  };

  const renderCrumb = (crumb: any) => {
    let content = crumb.text;
    if (crumb.link) {
      content = <a href={crumb.link || '#'}>{crumb.text}</a>;
    }

    return (
      <li className={crumb.className} style={crumb.style}>
        {content}
      </li>
    );
  };

  const renderBreadcrumbs = () => {
    if (!breadcrumbs) {
      return;
    }
    return breadcrumbs.map((crumb, idx) => {
      return (
        <React.Fragment key={`${crumb.text}_${idx}`}>
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
    >
      <ul className="Breadcrumb">
        {renderHome()}
        {renderBreadcrumbs()}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = propTypes;

Breadcrumbs.defaultProps = {
  className: null,
  breadcrumbs: [],
  id: null,
  home: null,
  style: null,
};

export default Breadcrumbs;
