import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Divider from './Divider';


storiesOf('Divider', module)
  .add('Default', withInfo()(() =>
    <Divider />
  ))
  .add('Thick', withInfo()(() =>
    <Divider isThick />
  ))
