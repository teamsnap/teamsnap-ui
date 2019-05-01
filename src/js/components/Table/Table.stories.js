import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from "@storybook/addon-knobs/react";
import Table from './Table';

 const stories = storiesOf('Table', module);

 const columns = [
  { name: 'col1', label: 'Column One', isSortable: true },
  { name: 'col2', label: 'Column Two', isSortable: true },
  { name: 'col3', label: 'Column Three' }
]

 const smallDataSet = [
    { id: 1, col1: 'Row 1 Column One', col2: 'Row 1 Column 2', col3: 'Row 1 Column 3' },
    { id: 2, col1: 'Row 2 Column One', col2: 'Row 2 Column 2', col3: 'Row 2 Column 3' },
    { id: 3, col1: 'Row 3 Column One', col2: 'Row 3 Column 2', col3: 'Row 3 Column 3' }
  ];

 const dataOptions = {
  'Small Data Set': smallDataSet,
  'Empty Data Set': []
 };

 const defaultDataSet = smallDataSet;

 stories.add('Default', (() =>
  <Table
    columns = { columns }
    rows= { select('Data Sets', dataOptions, defaultDataSet) } 
    isLoading={ boolean("isLoading", false) }  
  />
))
