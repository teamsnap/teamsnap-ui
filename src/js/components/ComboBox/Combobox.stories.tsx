import * as React from 'react';
import Combobox from './Combobox';

export default {
  title: 'Combobox',
};

export const Default = () => (
  <div style={{ height: '50vh' }}>
    <Combobox
      mods="u-spaceRightMd u-size2of12"
      name="birthdate"
      buttonLabel="Birthdate"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: '2006',
          value: '2006',
        },
        {
          label: '2007',
          value: '2007',
        },
        {
          label: '2008',
          value: '2008',
        },
        {
          label: '2009',
          value: '2009',
        },
        {
          label: '2010',
          value: '2010',
        },
        {
          label: '2011',
          value: '2011',
        },
        {
          label: '2012',
          value: '2012',
        },
        {
          label: '2014',
          value: '2014',
        },
        {
          label: '2015',
          value: '2015',
        },
        {
          label: '2016',
          value: '2016',
        },
        {
          label: '2017',
          value: '2017',
        },
        {
          label: '2018',
          value: '2018',
        },
      ]}
    />

    <Combobox
      mods="u-spaceRightMd"
      name="gender"
      buttonLabel="Gender"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ]}
    />
  </div>
);
