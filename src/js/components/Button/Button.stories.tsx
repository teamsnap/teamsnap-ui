import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from '@storybook/addon-knobs';
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

stories.add("Status Colors", () => {
  const isDisabled = boolean("isDisabled", false);
  const isActive = boolean("isActive", false);

  return (
    <div>
      <div className="u-spaceBottomMd">
        <Button
          mods="u-spaceRightSm"
          isDisabled={isDisabled}
          isActive={isActive}
          color="yes"
        >
          yes Button
        </Button>
        <Button
          mods="u-spaceRightSm"
          isDisabled={isDisabled}
          isActive={isActive}
          color="maybe"
        >
          Maybe Button
        </Button>
        <Button
          mods="u-spaceRightSm"
          isDisabled={isDisabled}
          isActive={isActive}
          color="no"
        >
          No Button
        </Button>
      </div>
      <div>
        <Button
          mods="u-spaceRightSm"
          isDisabled={isDisabled}
          isActive={isActive}
          color="yesDefault"
        >
          Yes/Default Button
        </Button>
        <Button
          mods="u-spaceRightSm"
          isDisabled={isDisabled}
          isActive={isActive}
          color="maybeDefault"
        >
          Maybe/Default Button
        </Button>
        <Button
          mods="u-spaceRightSm"
          isDisabled={isDisabled}
          isActive={isActive}
          color="noDefault"
        >
          No/Default Button
        </Button>
      </div>
    </div>
  );
});

stories.add("Sizes", () => (
  <div>
    <Button mods="u-spaceRightSm" size="small">
      Small Button
    </Button>
    <Button mods="u-spaceRightSm" size="smallSquare" icon="dismiss" />
    <Button mods="u-spaceRightSm">Default Button</Button>
    <Button mods="u-spaceRightSm" size="large">
      Large Button
    </Button>
    <Button mods="u-spaceRightSm" size="huge">
      Huge Button
    </Button>
  </div>
));

storiesOf("Button", module).add(
  "with Icon",
  () => (
    <div>
      <Button mods="u-spaceRightSm" icon={text("Icon Left", "home")}>
        Icon Left (default)
      </Button>
      <Button
        mods="u-spaceRightSm"
        icon={text("Icon Right", "right")}
        iconPosition="right"
      >
        Icon Right
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
