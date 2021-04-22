import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ToggleCheckboxList } from '../ToggleCheckboxList'

const stories = storiesOf("ToggleCheckboxList", module);

const data = [{
  "productName": "Competitive",
  "seasonName": "2021 Fall Season",
  "divisions": [
    "Unassigned",
    "BoysU14",
    "BoysU12",
    "GirlsU14",
    "GirlsU12"
  ]
}, {
  "productName": "Recreational",
  "seasonName": "2021 Fall Season",
  "divisions": [
    "BoysU14",
    "BoysU12",
    "GirlsU14",
    "GirlsU12"
  ]
}]

stories.add("Default", () => (
  <ToggleCheckboxList
    list={ data }
  />
));
