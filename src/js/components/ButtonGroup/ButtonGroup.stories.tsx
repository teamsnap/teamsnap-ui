import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import { Button } from '../Button';

const stories = storiesOf('ButtonGroup', module);

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
};

stories.add('Button Children', () => (
  <ButtonGroup>
    <Button>Button1</Button>

    <Button>Button2</Button>
  </ButtonGroup>
));
