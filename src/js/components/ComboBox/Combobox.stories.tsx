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
      <div style={{height: '50vh'}}>
        <Combobox
          mods='u-spaceRightMd'
          name='birthdate'
          buttonLabel="Birthdate"
          items={["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]} />

      <Combobox
          name="gender"
          buttonLabel="Gender"
          items={['Male', 'Female']} />
      </div>
    )
  })
