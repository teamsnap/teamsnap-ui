import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import RadialProgress from "./RadialProgress";

const stories = storiesOf("RadialProgress", module);

const sizeOptions = {
  xsmall: "xsmall",
  small: "small",
  default: null,
  large: "large",
  xlarge: "xlarge"
};

stories.add("Default", () => <RadialProgress isInline progress={33} />);

stories.add(
  "Progress Colors",
  () => {
    const size = select("size", sizeOptions);

    return (
      <div>
        <h4>Neutral</h4>
        <RadialProgress isInline progress={33} color="neutral" size={size} />
        <br />
        <h4>Negative</h4>
        <RadialProgress isInline progress={66} color="negative" size={size} />
        <br />
        <h4>Default Color</h4>
        <RadialProgress isInline progress={100} size={size} />
        <br />
      </div>
    );
  },
  {
    knobs: {
      timestamps: true,
      debounce: { wait: 500, leading: false }
    }
  }
);
