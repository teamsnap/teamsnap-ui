/**
 * @name SummaryList
 *
 * @description
 *  A component to render a 'dot' separated list of items.  See the Teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/summary-list.html
 *
 * @example
 *  <SummaryList
 *    heading='Example Header'
 *    items={[
 *      { description: 'Item One', value: '$75.00' },
 *      { description: 'Item Two', value: '$100.00', isFooterRow: true },
 *    ]}
 *    footer={ {description: 'Balance', '$175.00'} }/>
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import { getClassName } from '../../utils/helpers';

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
      key: PropTypes.string,
      mods: PropTypes.string,
      style: PropTypes.object,
    })
  ).isRequired,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  footer: PropTypes.shape({
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  hasBorder: PropTypes.bool,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes> | any;

const SummaryList = ({
  items,
  heading,
  subHeading,
  footer,
  className,
  mods,
  style,
  hasBorder,
  testId,
  otherProps,
}: Props) => {
  const renderColumn = (value) => <span>{value}</span>;

  const renderHeading = () => {
    return (
      <h3 className="SummaryList-heading">
        {renderColumn(heading)}
        {subHeading && renderColumn(subHeading)}
      </h3>
    );
  };

  const renderItem = (item) => {
    const listClasses = getClassName(
      'SummaryList-item',
      item.isFooterRow && 'SummaryList-item--footer',
      item.mods
    );

    return (
      <li key={item.key || item.description} className={listClasses} style={item.style}>
        {renderColumn(item.description)}
        {renderColumn(item.value)}
      </li>
    );
  };

  const hasHeading = heading || subHeading;

  const summaryClasses = getClassName(className, !hasHeading && 'SummaryList--no-heading', mods);

  const sectionStyle = hasBorder ? {} : { border: 0 };

  return (
    <div className={summaryClasses} style={style} data-testid={testId} {...otherProps}>
      {hasHeading && renderHeading()}

      <ul className="SummaryList-section" style={sectionStyle}>
        {items.map(renderItem)}
      </ul>

      {footer && (
        <div className="SummaryList-footer">
          <h3>
            {footer.description}
            <span>{footer.value}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

SummaryList.defaultProps = {
  heading: null,
  subHeading: null,
  footer: null,
  className: 'SummaryList',
  mods: null,
  style: {},
  hasBorder: true,
  testId: null,
  otherProps: {},
};

export default SummaryList;
