import * as _ from 'lodash';
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
  { name: 'team', label: 'Team', isSortable: true, mods: 'u-size1of2' },
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
    team: {
      name: 'Team 1',
      id: 1,
    },
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
    team: {
      name: 'Team 1',
      id: 1,
    },
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
    team: {
      name: 'Team 1',
      id: 1,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 2',
      id: 2,
    },
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
    team: {
      name: 'Team 3',
      id: 3,
    },
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
    team: {
      name: 'Team 3',
      id: 3,
    },
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
    team: {
      name: 'Team 3',
      id: 3,
    },
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
    team: {
      name: 'Team 3',
      id: 3,
    },
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
    team: {
      name: 'Team 3',
      id: 3,
    },
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
function loadData({ page, itemsPerPage, sortBy, sortAsc }) {
  const startIndex = itemsPerPage * page - itemsPerPage;

  let finalData = _.sortBy(data, sortBy);
  if (sortAsc) {
    finalData = _.reverse(finalData);
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(finalData), 500);
  }).then((items: any[]) => {
    const endIndex = Math.min(items.length, startIndex + itemsPerPage);
    return { data: items.slice(startIndex, endIndex), totalItems: items.length };
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
  const filteredItems = data
    .filter(
      (item) => !filter.gender || !filter.gender.length || filter.gender.includes(item.gender)
    )
    .filter(
      (item) => !filter.team || !filter.team.length || filter.team.includes(String(item.team?.id))
    )
    .filter((item) => item.name.search(new RegExp(filter.searchTerm, 'i')) > -1);

  const dateFilteredItems = filter.birthdate
    ? filterBirthDate(filter.birthdate, filteredItems)
    : filteredItems;
  const endIndex = Math.min(dateFilteredItems.length, startIndex + itemsPerPage);
  const items = dateFilteredItems.slice(startIndex, endIndex);

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: items,
          totalItems: dateFilteredItems.length,
        }),
      500
    );
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
    team: item.team?.name,
  };
}

stories.add('Default', () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadData}
    defaultItemsPerPage={2}
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
  />
));

stories.add('Basic Search', () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadSearchData}
    defaultItemsPerPage={2}
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
    filters={[
      PaginatedTable.SelectFilter('role', 'Participants Role', {
        manager: 'Manager',
        nonplayer: 'Non-Player',
        player: 'Player',
        teamOwner: 'Team Owner',
        coach: 'Coach',
        supporter: 'Supporter',
        goalkeeper: 'Goalkeeper',
      }),
      // We understand that this is not a comprehensive list of genders but merely a list to display how these filters can be used
      PaginatedTable.SelectFilter('gender', 'Participants Preferred Gender', {
        m: 'Male',
        f: 'Female',
        other: 'Other',
        unknown: 'Unknown',
      }),
      PaginatedTable.SelectFilter('team', 'Participants Preferred Team', [
        {
          value: '1',
          label: 'Team 1',
          subtext: 'A Division',
        },
        {
          value: '2',
          label: 'Team 2',
          subtext: 'Some Division',
        },
        {
          value: '3',
          label: 'Team 3',
          subtext: 'Another Division',
        },
      ]),
      PaginatedTable.DateFilter(
        'birthdate',
        'Participants Birthdate',
        '[No Birthdate]',
        '2005,2004',
        null,
        new Date().toISOString().split('T')[0]
      ),
    ]}
    paginationPlacement={Placement.Bottom}
    includeBasicSearch
    searchPlaceholder="Search members by name"
  />
));
