import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PaginatedTable from './PaginatedTable';
import { Placement } from '../../../types/placement';
import { FilterValue } from './DateFilter';

const eighteenYearsBirthdate = new Date();
eighteenYearsBirthdate.setFullYear(eighteenYearsBirthdate.getFullYear() - 18);

const seventeenYearsBirthdate = new Date();
seventeenYearsBirthdate.setFullYear(seventeenYearsBirthdate.getFullYear() - 17);

const stories = storiesOf('PaginatedTable', module);
/**
 * Columns to configure the table against.
 */
const columns = [
  { name: 'name', label: 'Member Name', isSortable: true, mods: 'u-size1of2' },
  { name: 'gender', label: 'Gender', isSortable: true, mods: 'u-size1of2' },
  { name: 'birthdate', label: 'Birthdate', isSortable: false, mods: 'u-size1of2' },
  { name: 'age', label: 'Age', isSortable: true, mods: 'u-size1of2' },
  {
    name: 'programs',
    label: 'Active Programs',
    isSortable: true,
    mods: 'u-size1of2',
  },
];

/**
 * This mock promise data will likely be replaced with an HTTP request in real world applications.
 */
const data = [
  {
    name: 'Brad',
    gender: 'm',
    birthdate: seventeenYearsBirthdate,
    age: 12,
    position: 'Goalie',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Dustin',
    gender: 'm',
    birthdate: seventeenYearsBirthdate,
    age: 56,
    position: 'Coach',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Fred',
    gender: 'm',
    birthdate: seventeenYearsBirthdate,
    age: 56,
    position: 'Coach',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Bobby',
    gender: 'm',
    birthdate: seventeenYearsBirthdate,
    age: 56,
    position: 'Coach',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Christie',
    gender: 'f',
    birthdate: seventeenYearsBirthdate,
    age: 56,
    position: 'Coach',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Jenna',
    gender: 'f',
    birthdate: seventeenYearsBirthdate,
    age: 56,
    position: 'Coach',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Stacy',
    gender: 'f',
    birthdate: seventeenYearsBirthdate,
    age: 56,
    position: 'Coach',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Joey',
    gender: 'm',
    age: 12,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'William',
    gender: 'm',
    birthdate: eighteenYearsBirthdate,
    age: 13,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Sharron',
    gender: 'f',
    birthdate: eighteenYearsBirthdate,
    age: 14,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Brenda',
    gender: 'f',
    birthdate: eighteenYearsBirthdate,
    age: 13,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Nathan',
    gender: 'm',
    birthdate: eighteenYearsBirthdate,
    age: 12,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Jimmy',
    gender: 'm',
    birthdate: eighteenYearsBirthdate,
    age: 13,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Lester',
    gender: 'm',
    birthdate: eighteenYearsBirthdate,
    age: 14,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Justine',
    gender: 'F',
    birthdate: eighteenYearsBirthdate,
    age: 13,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Cassie',
    gender: 'f',
    birthdate: eighteenYearsBirthdate,
    age: 14,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
  {
    name: 'Jessica',
    gender: 'f',
    age: 12,
    position: 'Player',
    activePrograms: [
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
      { name: '2019 ACC Academy', subtitle: '(Junior Academy Tryout)' },
    ],
  },
];

/**
 * This function is where all of your server calls should occur. Very likely you'll just make a
 * server call and return the list of items. However, this is also a good place where you can
 * inspect the request and determine how many items the server has for this search.
 * @param page  - the table's current page
 * @param itemsPerPage - the table's current number of items per page
 * @param sortBy - the key that the table is sorting by
 * @param sortAsc boolean - true if ascending, false if not.
 */
function loadData({ page, itemsPerPage }) {
  const startIndex = itemsPerPage * page - itemsPerPage;

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  }).then((items: any[]) => {
    const endIndex = Math.min(items.length, startIndex + itemsPerPage);
    return items.slice(startIndex, endIndex);
  });
}

const filterBirthDate = (filter: FilterValue, items: any[]) => {
  if (filter.kind === 'years') {
    return items.filter((item) => {
      const birthdateYear = new Date(item.birthdate).getFullYear();
      return filter.value.includes(birthdateYear.toString());
    });
  }

  if (filter.kind === 'noDate') {
    return items.filter((item) => {
      return item.birthdate === undefined;
    });
  }

  const { from, to } = filter.value;
  return items.filter((item) => {
    const birthdateYear = new Date(item.birthdate);
    birthdateYear.setHours(0);
    birthdateYear.setMinutes(0);
    birthdateYear.setSeconds(0);
    birthdateYear.setMilliseconds(0);
    const greaterThanFromDate = !filter.value.from || birthdateYear >= from;
    const lesserThanToDate = !filter.value.to || birthdateYear <= to;

    return greaterThanFromDate && lesserThanToDate;
  });
};

/**
 * This function is where all of your server calls should occur. Commonly likely just make a
 * server call and return the list of items. However, this is also a good place where you can
 * inspect the request and determine how many items the server has for this search.
 * @param page  - the table's current page
 * @param itemsPerPage - the table's current number of items per page
 * @param sortBy - the key that the table is sorting by
 * @param sortAsc boolean - true if ascending, false if not.
 * @param filter objec - extra info to provide custom search.
 */
function loadSearchData({ page, itemsPerPage, filter }) {
  const startIndex = itemsPerPage * page - itemsPerPage;
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  }).then((items: any[]) => {
    const filteredItems = items
      .filter((item) => !filter.gender || filter.gender.includes(item.gender))
      .filter((item) => item.name.search(new RegExp(filter.searchTerm, 'i')) > -1);

    const dateFilteredItems = filter.birthdate
      ? filterBirthDate(filter.birthdate, filteredItems)
      : filteredItems;
    const endIndex = Math.min(dateFilteredItems.length, startIndex + itemsPerPage);
    return dateFilteredItems.slice(startIndex, endIndex);
  });
}

/**
 * this function is defined to map a single data item into a single row item.
 * It is passed in to the paginated table below.
 * @param item the data item to be mapped to row data
 */
function mapData(item) {
  return {
    id: item.name,
    name: (
      <div>
        <div>{item.name}</div>
        <div>{item.position}</div>
      </div>
    ),
    gender: item.gender,
    birthdate: item.birthdate ? item.birthdate.toLocaleDateString('en-US') : 'undefined',
    age: `${item.age}`,
    programs: item.activePrograms.map((p, idx) => <div key={idx}>{p.name}</div>),
  };
}

stories.add('Default', () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadData}
    defaultItemsPerPage={2}
    totalItems={data.length} // you'll likely need to calculate this in your component by inspecting the http response.
    paginationPlacement={Placement.Bottom}
  />
));

stories.add('Selectable Rows', () => (
  <PaginatedTable
    columns={columns}
    rowsAreSelectable
    bulkActions={[
      {
        label: 'Log Selected',
        onSelected: (selected) => {
          console.log(selected);
        },
      },
      {
        label: 'Alert Selected IDs',
        onSelected: (selected) => {
          console.log(alert(selected.map((e) => e.id).join(',')));
        },
      },
    ]}
    mapDataToRow={mapData}
    loadData={loadData}
    includeBasicSearch
    searchPlaceholder="Search members by name"
    defaultItemsPerPage={2}
    totalItems={data.length} // you'll likely need to calculate this in your component by inspecting the http response.
  />
));

stories.add('Basic Search', () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadSearchData}
    defaultItemsPerPage={2}
    totalItems={data.length} // you'll likely need to calculate this in your component by inspecting the http response.
    includeBasicSearch
    searchPlaceholder="Search members by name"
  />
));

stories.add('With Search Filters', () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadSearchData}
    defaultItemsPerPage={2}
    totalItems={data.length} // you'll likely need to calculate this in your component by inspecting the http response.
    filters={[
      PaginatedTable.Filter('role', 'Participants Role', {
        manager: 'Manager',
        nonplayer: 'Non-Player',
        player: 'Player',
        teamOwner: 'Team Owner',
        coach: 'Coach',
        supporter: 'Supporter',
        goalkeeper: 'Goalkeeper',
      }),
      // We understand that this is not a comprehensive list of genders but merely a list to display how these filters can be used
      PaginatedTable.Filter('gender', 'Participants Preferred Gender', {
        m: 'Male',
        f: 'Female',
        other: 'Other',
        unknown: 'Unknown',
      }),
      PaginatedTable.Filter('birthdate', 'Participants Birthdate', undefined, 'date'),
    ]}
    paginationPlacement={Placement.Bottom}
    includeBasicSearch
    searchPlaceholder="Search members by name"
  />
));
