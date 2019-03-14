import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs, withKnobsOptions, text, boolean, number, selectV2 } from '@storybook/addon-knobs/react';
import Icon from './Icon';

 const stories = storiesOf('Icon', module);

//  stories.addDecorator(withKnobsOptions({
//   // set debounce so you have time to type the new icon name
//   debounce: { wait: 1000, leading: false }, // Same as lodash debounce.
//   timestamps: true // Doesn't emit events while user is typing.
// }));


 stories.add('Default', (() =>
  <Icon 
    name={ 'home' }
  />
))
