import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import Button from "./Button";

const stories = storiesOf("Button", module);

stories.add("Default", () => (
  <Button
    mods="u-spaceRightSm"
    isDisabled={boolean("isDisabled", false)}
    isActive={boolean("isActive", false)}
  >
    Default Button
  </Button>
));

stories.add("Themed Colors", () => {
  const isDisabled = boolean("isDisabled", false);
  const isActive = boolean("isActive", false);
  return (
    <div>
      <Button
        mods="u-spaceRightSm"
        isDisabled={isDisabled}
        isActive={isActive}
        color="primary"
      >
        Primary Button
      </Button>
      <Button
        mods="u-spaceRightSm"
        isDisabled={isDisabled}
        isActive={isActive}
        color="negative"
      >
        Negative Button
      </Button>
    </div>
  );
});

stories.add("TeamSnap Colors", () => {
  const isDisabled = boolean("isDisabled", false);
  const isActive = boolean("isActive", false);

  return (
    <div>
      <Button
        mods="u-spaceRightSm"
        isDisabled={isDisabled}
        isActive={isActive}
        color="orange"
      >
        Orange Button
      </Button>
      <Button
        mods="u-spaceRightSm"
        isDisabled={isDisabled}
        isActive={isActive}
        color="blue"
      >
        Blue Button
      </Button>
    </div>
  );
});

stories.add("Sizes", () => (
  <div>
    <Button mods="u-spaceRightSm" size="small">
      Small Button
    </Button>
    <Button mods="u-spaceRightSm">Default Button</Button>
    <Button mods="u-spaceRightSm" size="large">
      Large Button
    </Button>
    <Button mods="u-spaceRightSm" size="huge">
      Huge Button
    </Button>
    <h3 style={{marginTop: "20px", paddingTop: "20px", borderTop: "1px solid black"}}>
      Buttons can scale with custom widths.
    </h3>
    <Button style={{width: "100%"}} mods="u-spaceRightSm" size="huge">
      This is a `huge` button with width of 100%
    </Button>
  </div>
));

storiesOf("Button", module).add(
  "with Icon",
  () => (
    <div>
      <Button size="small" isDisabled={boolean("Disabled", false)} mods="u-spaceRightSm" icon={text("Icon Left", "home")}>
      </Button>
      <Button isDisabled={boolean("Disabled", false)} mods="u-spaceRightSm" icon={text("Icon Left", "home")}>
        Icon Left (default)
      </Button>
      <Button
        color="primary"
        mods="u-spaceRightSm"
        icon={text("Icon Right", "right")}
        iconPosition="right"
        isDisabled={boolean("Disabled", false)}
      >
        Primary w/ Icon Right
      </Button>
      <Button
        size="large"
        color="primary"
        mods="u-spaceRightSm"
        icon={text("Icon Right", "right")}
        iconPosition="right"
        isDisabled={boolean("Disabled", false)}
      >
      </Button>
    </div>
  ),
  {
    knobs: {
      timestamps: true,
      debounce: { wait: 2000, leading: false }
    }
  }
);
