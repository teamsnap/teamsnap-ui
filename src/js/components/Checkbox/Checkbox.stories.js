import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

const stories = storiesOf("Checkbox", module);

stories.add("Default", () => (
  <Checkbox name='example' label='Check Me' isInline />
  ))

stories.add("Alternates", () => (
  <div>
    <Checkbox name='checkbox' label='Check Me' />
    <Checkbox name='checked' label='Checked' inputProps={{ checked: true }} />  
    <Checkbox name='disabled' label='Disabled' inputProps={{ disabled: true }} /> 
    <Checkbox name='disabled-and-checked' label='Disabled and Checked' inputProps={{ disabled: true, checked: true }} />
  </div>
))
