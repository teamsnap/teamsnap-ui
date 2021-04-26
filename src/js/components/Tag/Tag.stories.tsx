import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from './Tag'

const stories = storiesOf('Tag', module);

stories.add("Default", () => (
  <>
    <Tag text='2021 Fall Season' />
  </>
));
