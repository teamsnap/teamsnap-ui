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

class SummaryList extends React.PureComponent<
  PropTypes.InferProps<typeof SummaryList.propTypes>,
  any
> {
  static propTypes = {
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
    otherProps: PropTypes.object,
  };

  static defaultProps = {
    heading: null,
    subHeading: null,
    footer: null,
    className: 'SummaryList',
    mods: null,
    style: {},
    hasBorder: true,
    otherProps: {},
  };

  renderColumn = (value) => <span>{value}</span>;

  renderHeading = () => {
    const { heading, subHeading } = this.props;

    return (
      <h3 className="SummaryList-heading">
        {this.renderColumn(heading)}
        {subHeading && this.renderColumn(subHeading)}
      </h3>
    );
  };

  renderItem = (item) => {
    const listClasses = getClassName(
      'SummaryList-item',
      item.isFooterRow && 'SummaryList-item--footer',
      item.mods
    );

    return (
      <li
        key={item.key || item.description}
        className={listClasses}
        style={item.style}
      >
        {this.renderColumn(item.description)}
        {this.renderColumn(item.value)}
      </li>
    );
  };

  render() {
    const {
      items,
      heading,
      subHeading,
      footer,
      className,
      mods,
      style,
      hasBorder,
      otherProps,
    } = this.props;
    const hasHeading = heading || subHeading;

    const summaryClasses = getClassName(
      className,
      !hasHeading && 'SummaryList--no-heading',
      mods
    );

    const sectionStyle = hasBorder ? {} : { border: 0 };

    return (
      <div className={summaryClasses} style={style} {...otherProps}>
        {hasHeading && this.renderHeading()}

        <ul className="SummaryList-section" style={sectionStyle}>
          {items.map(this.renderItem)}
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
  }
}

export default SummaryList;
