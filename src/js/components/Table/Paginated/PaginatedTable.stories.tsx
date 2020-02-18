import * as React from "react";
import { storiesOf } from "@storybook/react";
import PaginatedTable from "./PaginatedTable";

const stories = storiesOf("PaginatedTable", module);
const columns = [
  { name: "name", label: "Member Name", isSortable: true },
  { name: "gender", label: "Gender", isSortable: true },
  { name: "age", label: "Age", isSortable: true },
  { name: "programs", label: "Active Programs", isSortable: true }
];

const data = Promise.resolve<any[]>([
  {
    name: "Brad",
    gender: "m",
    age: 12,
    position: "Goalie",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" }
    ]
  },
  {
    name: "Dustin",
    gender: "m",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" }
    ]
  },
  {
    name: "Fred",
    gender: "m",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" }
    ]
  },
  {
    name: "Bobby",
    gender: "m",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" }
    ]
  },
  {
    name: "Christie",
    gender: "f",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" }
    ]
  },
  {
    name: "Jenna",
    gender: "f",
    age: 56,
    position: "Coach",
    activePrograms: [
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" },
      { name: "2019 ACC Academy", subtitle: "(Junior Academy Tryout)" }
    ]
  }
]);

function loadData(page, itemsPerPage, sortBy) {
  return data.then(items => [items[page - 1]]);
}

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
    programs: item.activePrograms.map((p, idx) => <div key={idx}>{p.name}</div>)
  };
}

stories.add("Default", () => (
  <PaginatedTable
    columns={columns}
    mapDataToRow={mapData}
    loadData={loadData}
    defaultItemsPerPage={1}
    totalItems={6} // you'll likely need to calculate this in your component by inspecting the http response.
  />
));
