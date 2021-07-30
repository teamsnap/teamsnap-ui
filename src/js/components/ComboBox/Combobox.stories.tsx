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
          onChange={() => {}}
          items={[
            {
              label: "2006",
              value: "2006",
            }, 
            {
              label: "2007",
              value: "2007",
            }, 
            {
              label: "2008",
              value: "2008",
            }, 
            {
              label: "2009",
              value: "2009",
            }, 
            {
              label: "2010",
              value: "2010",
            }, 
            {
              label: "2011",
              value: "2011",
            }, 
            {
              label: "2012",
              value: "2012",
            }, 
            {
              label: "2013",
              value: "2013",
            }
          ]} />

      <Combobox
        mods='u-spaceRightMd'
        name="gender"
        buttonLabel="Gender"
        onChange={() => {}}
        items={[
          {
            label: 'Male',
            value: 'male',
          }, 
          {
            label: 'Female',
            value: 'female',
          }
        ]}
      />
      </div>
    )
  })
