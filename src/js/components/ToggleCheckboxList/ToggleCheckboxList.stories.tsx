import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleCheckboxList } from '../ToggleCheckboxList'
import { Tag } from '../Tag'

const stories = storiesOf('ToggleCheckboxList', module);

const data = [
  {
    "heading": "007 Blue Dodgeball",
    "subheading": "Legacy - Blue",
    tags: [
      <Tag key='1' text="Legacy - Blue" mods='u-spaceLeftSm' />,
      <Tag key='2' icon='archive' text='Archived' mods='u-spaceLeftSm' />
    ],
    "rows": [
      "Unassigned",
      "1st Level Div"
    ],
  },
  {
    "heading": "007 Blue Dodgeball",
    "subheading": "New - Blue",
    "tags": [<Tag key='1' text="New - Blue" mods='u-spaceLeftSm' />],
    "rows": [
      "Unassigned",
      "1st Level Div - New Blue",
      "Div 2",
      "Div 3"
    ],
  },
  {
    "heading": "007 Blue Dodgeball",
    "subheading": "Flat - Blue",
    "tags": [<Tag key='1' text="Flat - Blue" mods='u-spaceLeftSm' />],
    "rows": [
      "Unassigned"
    ]
  },
  {
    "heading": "007 Red Dodgeball",
    "subheading": "Legacy - Red",
    "tags": [
      <Tag key='1' text="Legacy - Red" mods='u-spaceLeftSm' />,
      <Tag key='2' icon='archive' text='Archived' mods='u-spaceLeftSm' />
    ],
    "rows": [
      "Unassigned"
    ]
  },
  {
    "heading": "007 Red Dodgeball",
    "subheading": "Flat - Red",
    "tags": [<Tag key='1' text="Flat - Red" mods='u-spaceLeftSm' />],
    "rows": [
      "Unassigned"
    ]
  },
  {
    "heading": "007 Red Dodgeball",
    "subheading": "New - Red",
    "tags": [
      <Tag key='1' text="New - Red" mods='u-spaceLeftSm' />,
      <Tag key='2' text="New - Red 2" mods='u-spaceLeftSm' />,
      <Tag key='4' text="Archived" mods='u-spaceLeftSm' />
    ],
    "rows": [
      "Unassigned",
      "Red Boys Green",
      "Red Boys 2002",
      "Red Boys 2003",
      "Red Boys 2004",
      "Red Boys 2005",
      "Red Girls Green",
      "Red Girls 2002",
      "Red Girls 2003",
      "Red Girls 2004",
      "Red Girls 2005"]
  },
  {
    "heading": "007 Green Dodgeball",
    "subheading": "Green Season 1",
    tags: [<Tag key='1' text="Green Season 1" mods='u-spaceLeftSm' />],
    "rows": [
      "Unassigned",
    ]
  }
]

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
