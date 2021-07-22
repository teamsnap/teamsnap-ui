import * as React from "react";
import { storiesOf } from "@storybook/react";
import Combobox from "./Combobox";

export default {
  title: 'Combobox',
  component: Combobox,
};

storiesOf("Combobox", module)
  .add("Default", () => {
    return (
      <Combobox
        name="birthdate"
        buttonLabel="Birthdate"
        searchLabel="Search for a year"
        items={["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]} />
    )
  })
