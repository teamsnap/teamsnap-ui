import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs/react";
import Table from "./Table";

const stories = storiesOf("Table", module);

const columns = [
  { name: "col1", label: <div>Column One (in a div)</div>, isSortable: true },
  { name: "col2", label: "Column Two", isSortable: true },
  { name: "col3", label: "Column Three" }
];

const smallDataSet = [
  {
    id: 1,
    col1: "Row 1 Column One",
    col2: "Row 1 Column 2",
    col3: "Row 1 Column 3"
  },
  {
    id: 2,
    col1: "Row 2 Column One",
    col2: "Row 2 Column 2",
    col3: "Row 2 Column 3"
  },
  {
    id: 3,
    col1: "Row 3 Column One",
    col2: "Row 3 Column 2",
    col3: "Row 3 Column 3"
  }
];

const jsxDataSet = [
  {
    id: 1,
    col1: <span>This is a span</span>,
    col2: <h1>This is an h1</h1>,
    col3: <b>This is b tag</b>
  }
];
const dataOptions = {
  "Small Data Set": smallDataSet,
  "Empty Data Set": [],
  "JSX Data Set": jsxDataSet
};

const defaultDataSet = smallDataSet;

stories.add("Default", () => (
  <>
    <Table
      columns={columns}
      rows={select("Data Sets", dataOptions, defaultDataSet)}
      isLoading={boolean("isLoading", false)}
    />
    <Table
    style={{width: "800px"}}
      columns={[
        { name: "col1", label: "Name", isSortable: true },
        { name: "col2", label: "Role", isSortable: true },
        { name: "col3", label: "Contact", isSortable: true },
        { name: "col4", label: "Invitation", isSortable: true}
      ]}
      rows={select("Data Sets", dataOptions, defaultDataSet)}
      isLoading={boolean("isLoading", false)}
    />
  </>
));
