import * as React from 'react';
import * as PropTypes from 'prop-types';

import ExpandableGroup from './ExpandableGroup';
import { PanelCell } from '../PanelCell';

export default {
  title: 'Components/Data Display/ExpandableGroup',
};

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  descrition: PropTypes.string.isRequired,
};

type State = PropTypes.InferProps<typeof propTypes>;

type StateUpdate = {
  state: State[];
  id: number;
  value: string;
  fieldName: string;
};

const updateStatePiece = (state, id, value, fieldName): StateUpdate[] => {
  const newState = state;

  newState[id] = {
    ...newState[id],
    [fieldName]: value,
  };

  return [...newState];
};

export const Default = () => {
  const [groups, setGroups] = React.useState(['Group 1']);

  // First thing we do is loop through the groups and create an array of group objects
  const groupObjectList = [];
  groups.forEach((group, idx) => {
    groupObjectList.push({
      id: idx,
      name: group,
      description: '',
    });
  });

  const [groupList, setGroupList] = React.useState(groupObjectList);

  return groupList.map((group) => (
    <ExpandableGroup
      key={group.id}
      label={group.name}
      onLabelChange={(value) =>
        setGroupList((prevState) => updateStatePiece(prevState, group.id, value, 'name'))
      }
      onDelete={() => setGroupList(groupList.filter((currGroup) => currGroup.id !== group.id))}
    >
      <PanelCell className="Panel-cell u-padTopNone u-spaceSidesLg">
        <p className="u-fontSizeLg u-spaceBottomXs">Description</p>

        <textarea
          style={{ height: 'auto' }}
          className="Input u-colorNeutral8"
          value={group.description}
          name="locationNotesInput"
          id="locationNotesInput"
          cols={30}
          rows={3}
          onChange={(e) =>
            setGroupList((prevState) =>
              updateStatePiece(prevState, group.id, e.target.value, 'description')
            )
          }
          placeholder="Description about the group for registrants to veiw"
        />

        <span className="u-fontSizeSm u-colorNeutral8">
          Description will display for registrants when they select groups to register for.
        </span>
      </PanelCell>
    </ExpandableGroup>
  ));
};

export const ExpandableGroupList = () => {
  const [groups, setGroups] = React.useState([
    'Group 1',
    'Group 2',
    'Group 3',
    'Group 4',
    'Group 5',
    'Group 6',
  ]);

  // First thing we do is loop through the groups and create an array of group objects
  const groupObjectList = [];
  groups.forEach((group, idx) => {
    groupObjectList.push({
      id: idx,
      name: group,
      description: '',
    });
  });

  const [groupList, setGroupList] = React.useState(groupObjectList);

  return groupList.map((group) => (
    <ExpandableGroup
      key={group.id}
      label={group.name}
      onLabelChange={(value) =>
        setGroupList((prevState) => updateStatePiece(prevState, group.id, value, 'name'))
      }
      onDelete={() => setGroupList(groupList.filter((currGroup) => currGroup.id !== group.id))}
    >
      <PanelCell className="Panel-cell u-padTopNone u-spaceSidesLg">
        <p className="u-fontSizeLg u-spaceBottomXs">Description</p>

        <textarea
          style={{ height: 'auto' }}
          className="Input u-colorNeutral8"
          value={group.description}
          name="locationNotesInput"
          id="locationNotesInput"
          cols={30}
          rows={3}
          onChange={(e) =>
            setGroupList((prevState) =>
              updateStatePiece(prevState, group.id, e.target.value, 'description')
            )
          }
          placeholder="Description about the group for registrants to veiw"
        />

        <span className="u-fontSizeSm u-colorNeutral8">
          Description will display for registrants when they select groups to register for.
        </span>
      </PanelCell>
    </ExpandableGroup>
  ));
};
