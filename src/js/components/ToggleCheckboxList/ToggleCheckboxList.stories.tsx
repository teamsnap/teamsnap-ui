import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleCheckboxList } from '../ToggleCheckboxList'

const stories = storiesOf('ToggleCheckboxList', module);

const data = [{
  'heading': 'Competitive',
  'subheading': '2021 Fall Season',
  'rows': [
    'Unassigned',
    'BoysU14-1',
    'BoysU12-2',
    'GirlsU14-3',
    'GirlsU12-4'
  ]
}, {
  'heading': 'Recreational',
  'subheading': '2021 Fall Season',
  'rows': [
    'BoysU14-5',
    'BoysU12-6',
    'GirlsU14-7',
    'GirlsU12-8'
  ]
  }, {
  'heading': 'International',
  'subheading': '2021 Spring Season',
  'rows': [
    'BoysU14-9',
    'BoysU12-10',
    'GirlsU14-11',
    'GirlsU12-12'
  ]
}]

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
