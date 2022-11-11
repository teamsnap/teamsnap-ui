import * as React from 'react';
import { EditText } from 'react-edit-text';
import * as PropTypes from 'prop-types';

// Local imports
import { Icon } from '../Icon';
import { ListToggle } from '../ListToggle';
import { Panel } from '../Panel';
import { PanelCell } from '../PanelCell';

const propTypes = {
  isExpanded: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onLabelChange: PropTypes.func.isRequired,
  onLabelBlur: PropTypes.func,
  children: PropTypes.node.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ExpandableGroup = ({
  isExpanded,
  label,
  onDelete,
  onLabelChange,
  onLabelBlur,
  children,
}: Props) => {
  const [expanded, setExpanded] = React.useState<boolean>(isExpanded ?? false);
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
    height: '29px',
    background: '#FFFFFF',
    borderRadius: '5px',
    border: '1px solid inherit',
  };

  if (error) {
    styles = {
      ...styles,
      border: '1px solid red',
    };
  }

  return (
    <Panel mods={`${error ? 'u-padBottomSm' : ''} expandable-group`}>
      <PanelCell mods="u-flex u-flexAlignItemsCenter u-flexJustifyBetween">
        <div className="u-size7of12 u-flex u-flexAlignItemsCenter u-flexAlignContentCenter">
          <div className="expandable-group--carat">
            <ListToggle onClick={() => setExpanded(!expanded)} />
          </div>

          <div style={{ position: 'relative' }}>
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
              <span style={{ position: 'absolute', top: 30, left: 8 }} className="u-colorNegative">
                You must enter a name for the group.
              </span>
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
          className="u-size1of12 u-flex u-flexJustifyEnd"
          onClick={onDelete}
        >
          <Icon mods="expandable-group--trash" name="trash" style={{ width: 24, height: 24 }} />
        </div>
      </PanelCell>

      {expanded && children}
    </Panel>
  );
};

export default ExpandableGroup;
