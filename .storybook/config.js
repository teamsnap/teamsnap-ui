import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

// Import css
import "../src/css/teamsnap-ui.scss";
import "./storybook.scss";

addDecorator(withKnobs);

// Make info + component show by default
addDecorator(
  withInfo({
    inline: true
  })
);

// automatically import all files ending in *.stories.js
const req = require.context("../src/js", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
