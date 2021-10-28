import * as React from 'react';
import SelectCard from './SelectCard';

export default {
  title: 'Design System/Molecules/SelectCard',
};

export const Default = () => <SelectCard />;

export const CustomizedSelectCardContent = () => (
  <SelectCard style={{ padding: '20px' }}>
    <div>
      <p>Hello!</p>
      <p>Select me!</p>
    </div>
  </SelectCard>
);
