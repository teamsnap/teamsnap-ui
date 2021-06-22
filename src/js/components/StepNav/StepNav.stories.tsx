import * as React from "react";
import { storiesOf } from "@storybook/react";
import StepNav from "./StepNav";

const stories = storiesOf("StepNav", module);

export default {
  title: 'StepNav',
  component: StepNav,
};

stories.add("Default", () => (
  <div style={{ padding: 20 + "px" }}>
    <StepNav
      title="Lets get familiar with TeamSnap"
      steps={[
        {
          name: "Check out your dashboard",
          icon: "home",
          linkProps: {
            onClick: e => {
              e.preventDefault();
              console.warn("STEP 1 Click");
            }
          }
        },
        {
          name: "Find your friends int he roster",
          icon: "roster",
          linkProps: {
            onClick: e => {
              e.preventDefault();
              alert("Oh, you clicked me!");
            }
          }
        },
        {
          name: "Message your coach to let them know you're signed up!",
          icon: "messages"
        }
      ]}
    />
  </div>
));

stories.add("Small", () => (
  <div style={{ padding: 20 + "px" }}>
    <StepNav
      isSmall={true}
      title="Lets get familiar with TeamSnap"
      steps={[
        {
          name: "Check out your dashboard",
          icon: "home",
          linkProps: {
            onClick: e => {
              e.preventDefault();
              console.warn("STEP 1 Click");
            }
          }
        },
        {
          name: "Find your friends int he roster",
          icon: "roster",
          linkProps: {
            onClick: e => {
              e.preventDefault();
              alert("Oh, you clicked me!");
            }
          }
        },
        {
          name: "Message your coach to let them know you're signed up!",
          icon: "messages"
        }
      ]}
    />
  </div>
));
