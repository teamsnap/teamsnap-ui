import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectCard } from '../SelectCard';


const stories = storiesOf('SelectCard', module);

export default {
  title: 'SelectCard',
  component: SelectCard,
};

stories.add('Default', () => (
  <SelectCard />
));

stories.add('Customized Select Card content', () => (
  <SelectCard style={{padding: '20px'}}>
    <div>
      <p>Hello!</p>
      <p>Select me!</p>
    </div>
  </SelectCard>
));
