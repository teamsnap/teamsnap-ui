import { configure, addDecorator } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

// Import css
import '../src/css/teamsnap-ui.scss'

// automatically import all files ending in *.stories.js
const req = require.context('../src/js/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(withInfo);
// addDecorator(withKnobs);

// import '../dist/css/teamsnap-ui.css';

configure(loadStories, module);
