import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './Divider';


 storiesOf('Divider', module)
  .add('Default', (() =>
    <Divider />
  ))
  .add('Thick', (() =>
    <Divider isThick />
  ))
