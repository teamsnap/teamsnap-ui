import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Table from './Table';

export default {
  title: 'Components/Data Display/Table',
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

export const Default = () => (
  <>
    <Table columns={columns} rows={smallDataSet} isLoading={boolean('isLoading', false)} />
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
);

export const NonSortableTable = () => (
  <>
    <Table
      style={{ width: '800px' }}
      columns={[
        { name: 'col1', label: 'Name' },
        { name: 'col2', label: 'Role' },
        { name: 'col3', label: 'Contact' },
        { name: 'col4', label: 'Invitation' },
      ]}
      rows={smallDataSet}
      isLoading={boolean('isLoading', false)}
    />
    <Table
      style={{ width: '800px' }}
      columns={[
        { name: 'col1', label: 'Name', isSortable: false },
        { name: 'col2', label: 'Role', isSortable: false },
        { name: 'col3', label: 'Contact', isSortable: false },
        { name: 'col4', label: 'Invitation', isSortable: false },
      ]}
      rows={smallDataSet}
      isLoading={boolean('isLoading', false)}
    />
  </>
);
