import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Table from './Table';

const stories = storiesOf('Table', module);

export default {
  title: 'Table',
  component: Table,
};

const columns = [
  { name: 'col1', label: <div>Column One (in a div)</div>, isSortable: true },
  { name: 'col2', label: 'Column Two', isSortable: true },
  { name: 'col3', label: 'Column Three' },
];

const smallDataSet = [
  {
    id: 1,
    col1: 'Row 1 Column One',
    col2: 'Row 1 Column 2',
    col3: 'Row 1 Column 3',
  },
  {
    id: 2,
    col1: 'Row 2 Column One',
    col2: 'Row 2 Column 2',
    col3: 'Row 2 Column 3',
  },
  {
    id: 3,
    col1: 'Row 3 Column One',
    col2: 'Row 3 Column 2',
    col3: 'Row 3 Column 3',
  },
];

stories.add('Default', () => (
  <>
    <Table
      columns={columns}
      rows={smallDataSet}
      isLoading={boolean('isLoading', false)}
    />
    <Table
      style={{ width: '800px' }}
      columns={[
        { name: 'col1', label: 'Name', isSortable: true },
        { name: 'col2', label: 'Role', isSortable: true },
        { name: 'col3', label: 'Contact', isSortable: true },
        { name: 'col4', label: 'Invitation', isSortable: true },
      ]}
      rows={smallDataSet}
      isLoading={boolean('isLoading', false)}
    />
  </>
));
