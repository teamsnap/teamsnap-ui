import * as React from 'react';
import Combobox from './Combobox';

export default {
  title: 'Components/Forms/Combobox',
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

    <Combobox
      mods="u-spaceRightMd"
      name="status"
      buttonLabel="Payment Status"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Successful',
          value: 'successful',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Unknown',
          value: 'unknown',
        },
      ]}
      tooltip={
        <div style={{ maxWidth: '180px' }}>
          <a href="https://google.com" rel="noreferrer" target="_blank">
            Click to learn more about payment statuses.
          </a>
        </div>
      }
      tooltipLink="https://google.com"
    />

    <Combobox
      mods="u-spaceRightMd"
      name="no-status"
      buttonLabel="Payment Status"
      onChange={(selected) => console.log(selected)}
      items={[]}
    />
  </div>
);

export const ComboboxWithCancelButton = () => (
  <div style={{ height: '50vh' }}>
    <Combobox
      mods="u-spaceRightMd"
      name="cancel-status"
      buttonLabel="Can cancel and close"
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
      canCancel
    />

    <Combobox
      mods="u-spaceRightMd"
      name="cancel-select-all-status"
      buttonLabel="Can cancel and close"
      onChange={(selected) => console.log(selected)}
      showSelectAll
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
      canCancel
    />
  </div>
);

export const ComboboxWithCustomizedDoneButton = () => (
  <div style={{ height: '50vh' }}>
    <Combobox
      mods="u-spaceRightMd"
      name="done-status"
      buttonLabel="With Copy button"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
      ]}
      doneButtonText="Copy"
    />
  </div>
);

export const ComboboxWithSubtextDescription = () => (
  <div style={{ height: '50vh' }}>
    <Combobox
      mods="u-spaceRightMd"
      name="subtext-status"
      buttonLabel="Genders and Colors"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Male',
          value: 'male',
          subtext: 'Gender',
        },
        {
          label: 'Red',
          value: 'red',
          subtext: 'Color',
        },
        {
          label: 'Female',
          value: 'female',
          subtext: 'Gender',
        },
        {
          label: 'Green',
          value: 'green',
          subtext: 'Color',
        },
      ]}
    />
  </div>
);

export const ComboboxWithHyperlinkOriginElement = () => (
  <div style={{ height: '50vh' }}>
    <Combobox
      mods="u-spaceRightMd"
      name="link-status"
      buttonLabel="Genders"
      onChange={(selected) => console.log(selected)}
      showFromHyperlink
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

    <Combobox
      mods="u-spaceRightMd"
      name="link-no-label-status"
      buttonLabel="Genders"
      onChange={(selected) => console.log(selected)}
      selected={['male', 'female']}
      showFromHyperlink
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

    <Combobox
      mods="u-spaceRightMd"
      name="disabled-status"
      buttonLabel="Genders"
      onChange={(selected) => console.log(selected)}
      showFromHyperlink
      disabled
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

export const ComboboxWithSelectAll = () => (
  <div style={{ height: '50vh' }}>
    <Combobox
      mods="u-spaceRightMd"
      name="selected-all-status"
      buttonLabel="Colors"
      onChange={(selected) => console.log(selected)}
      selected={['green', 'red', 'yellow']}
      items={[
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Black',
          value: 'black',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
        {
          label: 'Purple',
          value: 'purple',
        },
        {
          label: 'Pink',
          value: 'pink',
        },
      ]}
      showSelectAll
    />

    <Combobox
      mods="u-spaceRightMd"
      name="select--cancel-status"
      buttonLabel="Colors"
      onChange={(selected) => console.log(selected)}
      selected={['green']}
      items={[
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'White',
          value: 'white',
        },
      ]}
      canCancel
      showSelectAll
    />

    <Combobox
      mods="u-spaceRightMd"
      name="select--two-status"
      buttonLabel="Colors"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Green',
          value: 'green',
        },
      ]}
      showSelectAll
    />

  <Combobox
      mods="u-spaceRightMd"
      name="select--one-status"
      buttonLabel="Colors"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Red',
          value: 'red',
        },
      ]}
      showSelectAll
    />

    <Combobox
      mods="u-spaceRightMd"
      name="no---status"
      buttonLabel="Colors"
      onChange={(selected) => console.log(selected)}
      items={[]}
      showSelectAll
    />

    <Combobox
      mods="u-spaceRightMd"
      name="select--all-status-with-search-bar"
      buttonLabel="Colors"
      onChange={(selected) => console.log(selected)}
      items={[
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Yellow',
          value: 'yellow',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
        {
          label: 'Purple',
          value: 'purple',
        },
        {
          label: 'Pink',
          value: 'pink',
        },
      ]}
      showSelectAll
    />
  </div>
);
