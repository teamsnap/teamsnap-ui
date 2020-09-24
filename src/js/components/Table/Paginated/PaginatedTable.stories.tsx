import * as React from "react";
import { storiesOf } from "@storybook/react";
import PaginatedTable from "./PaginatedTable";

const stories = storiesOf("PaginatedTable", module);
/**
 * Columns to configure the table against.
 */
const columns = [
  { name: "name", label: "Member Name", isSortable: true, mods: "u-size1of2" },
  { name: "gender", label: "Gender", isSortable: true, mods: "u-size1of2"},
  { name: "age", label: "Age", isSortable: true, mods: "u-size1of2" },
  { name: "programs", label: "Active Programs", isSortable: true, mods: "u-size1of2" },
];

/**
 * This mock promise data will likely be replaced with an HTTP request in real world applications.
 */
const data = [
  {
    name: "Brad",
    gender: "m",
    age: 12,
    position: "Goalie",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Dustin",
    gender: "m",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Fred",
    gender: "m",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Bobby",
    gender: "m",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Christie",
    gender: "f",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Jenna",
    gender: "f",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Stacy",
    gender: "f",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Joey",
    gender: "m",
    age: 12,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "William",
    gender: "m",
    age: 13,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Sharron",
    gender: "f",
    age: 14,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Brenda",
    gender: "f",
    age: 13,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Nathan",
    gender: "m",
    age: 12,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Jimmy",
    gender: "m",
    age: 13,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Lester",
    gender: "m",
    age: 14,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Justine",
    gender: "F",
    age: 13,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Cassie",
    gender: "f",
    age: 14,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
  {
    name: "Jessica",
    gender: "f",
    age: 12,
    position: "Player",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
    ],
  },
];

/**
 * This function is where all of your server calls should occur. Commonly likely just make a
 * server call and return the list of items. However, this is also a good place where you can
 * inspect the request and determine how many items the server has for this search.
 * @param page  - the table's current page
 * @param itemsPerPage - the table's current number of items per page
 * @param sortBy - the key that the table is sorting by
 * @param isAscending boolean - true if ascending, false if not.
 */
function loadData(page, itemsPerPage, sortBy, isAscending) {
  const startIndex = itemsPerPage * page - itemsPerPage;

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500)
  }).then((items:any[]) => {
    const endIndex = Math.min(items.length, startIndex + itemsPerPage);
    return items.slice(startIndex, endIndex);
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
    age: `${item.age}`,
    programs: item.activePrograms.map((p, idx) => (
      <div key={idx}>{p.name}</div>
    )),
  };
}

stories.add("Default", () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadData}
    defaultItemsPerPage={2}
    totalItems={data.length} // you'll likely need to calculate this in your component by inspecting the http response.
  />
));


stories.add("Selectable Rows", () => (
  <PaginatedTable
    columns={columns}
    rowsAreSelectable={true}
    mapDataToRow={mapData}
    loadData={loadData}
    defaultItemsPerPage={2}
    totalItems={data.length} // you'll likely need to calculate this in your component by inspecting the http response.
  />
));
