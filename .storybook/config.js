import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

addDecorator(story => (
  <div class="u-padMd">
    {story()}
  </div>
));

import '../dist/css/teamsnap-ui.css';

// addon-info
setDefaults({
  header: true,
  inline: true
});

const req = require.context('../src/js/components', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
