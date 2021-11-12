/**
 * @name PanelRowExpandable
 *
 * @description
 *  An expandable panel row is used to show/hide nested table data.  See the teamsnap patterns
 *  library for more information https://teamsnap-ui-patterns.netlify.com/patterns/components/panel.html
 *
 *  This component accepts an array of objects as `parentColumns` and `childColumns`.  These columns will spread the
 *  object out on the <PanelCell /> by default, unless a `renderColumn` function is passed.
 *
 * @example
 *  <PanelRowExpandable
 *    parentColumns={[{ children: 'Homer Simpson', mods: 'u-size1of2' }, { children: 'Marge Simpson', mods: 'u-size1of2' }]}
 *    childColumns={[{ children: 'Bart Simpson', mods: u-size1of2' }, { children: 'Lisa Simpson', mods: 'u-size1of2' }]}
 *    renderColumn={ column => <div style={{ outline: '1px dashed red' }} { ...column }></div> } />
 *
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PanelRow } from '../PanelRow';
import { PanelCell } from '../PanelCell';
import { Icon } from '../Icon';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  parentColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  childColumns: PropTypes.arrayOf(PropTypes.object),
  renderColumn: PropTypes.func,
  className: PropTypes.string,
  mods: PropTypes.string,
  style: PropTypes.object,
  testId: PropTypes.string,
  otherProps: PropTypes.object,
};

type Props = PropTypes.InferProps<typeof propTypes> | any;

const PanelRowExpandable = ({
  parentColumns,
  childColumns,
  renderColumn,
  className,
  mods,
  style,
  testId,
  otherProps,
}: Props) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const handleRowClick = (e) => {
    e.preventDefault();

    setIsExpanded(!isExpanded);
  };

  const renderChildLink = (children) => {
    const linkClasses = getClassName('Panel-expandableControl', isExpanded && 'is-expanded');

    return (
      <button
        type="button"
        onClick={handleRowClick}
        className={linkClasses}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        <span className="Panel-expandableControlIcon">
          <Icon name="right" />
        </span>
        {children}
      </button>
    );
  };

  const renderColumns = (columns, includeLink = false) => {
    return columns.map((column, index) => {
      const { children: columnChildren, ...props } = column;
      const children =
        includeLink && index === 0 ? renderChildLink(columnChildren) : columnChildren;

      return renderColumn ? (
        renderColumn({ key: index, children, ...props })
      ) : (
        <PanelCell key={index} {...props}>
          {children}
        </PanelCell>
      );
    });
  };

  const renderChildColumns = (childCols) => {
    return (
      <div className={getClassName('Panel-childRows', isExpanded && 'is-expanded')}>
        <PanelRow isWithCells>{renderColumns(childCols)}</PanelRow>
      </div>
    );
  };

  const hasChildren = childColumns && childColumns.length > 0;

  return (
    <div
      className={getClassName(className, mods)}
      style={style}
      data-testid={testId}
      {...otherProps}
    >
      <PanelRow isWithCells isParent>
        {renderColumns(parentColumns, hasChildren)}
      </PanelRow>

      {hasChildren && renderChildColumns(childColumns)}
    </div>
  );
};

PanelRowExpandable.defaultProps = {
  childColumns: null,
  renderColumn: null,
  className: 'Panel-expandableRow',
  mods: null,
  style: {},
  testId: null,
  otherProps: {},
};

export default PanelRowExpandable;
