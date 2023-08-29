import * as React from 'react';
import { EditText } from 'react-edit-text';
import * as PropTypes from 'prop-types';

// Local imports
import { Icon } from '../Icon';
import { ListToggle } from '../ListToggle';
import { Panel } from '../Panel';
import { PanelCell } from '../PanelCell';
import { getClassName } from '../../utils/helpers';

const propTypes = {
  id: PropTypes.number,
  isExpanded: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onLabelChange: PropTypes.func,
  onLabelBlur: PropTypes.func,
  children: PropTypes.node.isRequired,
  mods: PropTypes.string,
  groupHelperText: PropTypes.string || PropTypes.node,
  hasError: PropTypes.bool,
  onExpandedChange: PropTypes.func,
  testId: PropTypes.string
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ExpandableGroup = ({
  id,
  isExpanded,
  label,
  onDelete,
  onLabelChange,
  onLabelBlur,
  children,
  mods,
  groupHelperText,
  onExpandedChange,
  testId
}: Props, ref) => {
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (label.length > 0) {
      setError(false);
    }
  }, [label]);

  let styles = {
    marginLeft: 10,
    paddingLeft: 4,
    width: '314px',
    background: '#FFFFFF',
    borderRadius: '5px',
    border: '1px solid inherit',
  };

  if (error) {
    styles = {
      ...styles,
      border: '1px solid #D63333',
    };
  }

  const className = getClassName('expandable-group', error && 'u-padBottomSm', mods);

  return (
    <Panel mods={className} testId={testId}>
      <PanelCell mods="u-flex u-flexAlignItemsCenter u-flexJustifyBetween">
        <div className="u-size7of12 u-flex u-flexAlignItemsCenter u-flexAlignContentCenter">
          <div className="expandable-group--carat">
            <ListToggle isExpanded={isExpanded} onClick={() => onExpandedChange(id)} />
          </div>

          <div style={{ position: 'relative' }} ref={ref}>
            {onLabelChange ? (
              <>
                <EditText
                  className="u-fontSize1x u-textBold u-spaceLeftSm"
                  value={label}
                  inline
                  onChange={(e) => onLabelChange(e.target.value)}
                  onBlur={() => {
                    if (onLabelBlur) {
                      onLabelBlur();
                    }

                    if (label.length === 0) {
                      setError(true);
                    } else {
                      setError(false);
                    }
                  }}
                  style={styles}
                />
                {error ? (
                  <span
                    style={{ position: 'absolute', top: 30, left: 8 }}
                    className="u-colorNegative"
                  >
                    You must enter a name for the group.
                  </span>
                ) : (
                  ''
                )}
              </>
            ) : (
              <button
                type="button"
                className="u-fontSize1x u-textBold u-spaceLeftSm u-borderNone u-padNone"
                style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                onClick={() => onExpandedChange(id)}
              >
                {label}
              </button>
            )}
          </div>
        </div>

        {!isExpanded && groupHelperText && (
          <div className="u-size4of12 u-flex u-flexJustifyEnd u-colorNeutral7">
            {groupHelperText}
          </div>
        )}

        {onDelete ? (
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className="u-size1of12 u-flex u-flexJustifyEnd"
            onClick={onDelete}
          >
            <Icon mods="expandable-group--trash" name="trash" style={{ width: 24, height: 24 }} />
          </div>
        ) : null}
      </PanelCell>

      {isExpanded && children}
    </Panel>
  );
};

export default React.forwardRef(ExpandableGroup);
