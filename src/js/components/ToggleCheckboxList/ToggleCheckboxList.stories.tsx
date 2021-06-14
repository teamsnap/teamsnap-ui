import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleCheckboxList } from '../ToggleCheckboxList'

const stories = storiesOf('ToggleCheckboxList', module);

const data = [
  {
    'heading': 'Competitive',
    'subheading': '2021 Fall Season',
    'isArchived': true,
    'rows': [
      'Unassigned',
      'BoysU14',
      'BoysU12',
      'GirlsU14',
      'GirlsU12'
    ]
  }, {
    'heading': 'Recreational',
    'subheading': '2021 Fall Season',
    'isArchived': false,
    'rows': [
      'BoysU14',
      'BoysU12',
      'GirlsU14',
      'GirlsU12'
    ]
    }, {
    'heading': 'International',
    'subheading': '2021 Spring Season',
    'isArchived': false,
    'rows': [
      'BoysU14',
      'BoysU12',
      'GirlsU14',
      'GirlsU12'
    ]
  }, {
    "heading": "Alpha Season",
    "subheading": "2021 Fall Season",
    'isArchived': true,
    "rows": [
      "PGirlsU14",
      "DBoysU14",
      "LBoysU12"
    ]
  }, {
    "heading": "Beta Season",
    "subheading": "2021 Summer Season",
    'isArchived': false,
    "rows": [
      "BBoysU12",
      "AGirlsU12"
    ]
  }, {
    "heading": "Micron Program 2",
    "subheading": "2021 Summer Season",
    'isArchived': false,
    "rows": []
  }
];

stories.add('Default', () => {
  const [activeRows, setActiveRows] = React.useState([]);
  const [headerStatus, setHeaderStatus] = React.useState({});

  return (
    <ToggleCheckboxList
      label='Recipients'
      list={ data }
      activeRows={ activeRows }
      headerStatus={ headerStatus }
      setActiveRows={ setActiveRows }
      setHeaderStatus={ setHeaderStatus }
    />
  )
});

stories.add('Error State', () => {
  const [activeRows, setActiveRows] = React.useState([]);
  const [headerStatus, setHeaderStatus] = React.useState({});

  /* We need to spend some time on what the mods attribute should be able to update */
  return (
    <>
      <ToggleCheckboxList
        className='error'
        label='Recipients'
        list={data}
        activeRows={activeRows}
        headerStatus={headerStatus}
        setActiveRows={setActiveRows}
        setHeaderStatus={setHeaderStatus}
      />
      <div style={{ color: '#e26362', marginLeft: '2px', marginTop: '-5px' }}>
        You must select a division for the message.
      </div>
    </>
  )
});

stories.add('Empty', () => {
  const [activeRows, setActiveRows] = React.useState([]);
  const [headerStatus, setHeaderStatus] = React.useState({});

  return (
    <ToggleCheckboxList
      label='Recipients'
      list={[]}
      activeRows={activeRows}
      headerStatus={headerStatus}
      setActiveRows={setActiveRows}
      setHeaderStatus={setHeaderStatus}
    />
  )
});
