import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import RadialProgress from './RadialProgress';

export default {
  title: 'Components/Feedback/Progress/Radial Progress',
};

const sizeOptions = {
  xsmall: 'xsmall',
  small: 'small',
  default: null,
  large: 'large',
  xlarge: 'xlarge',
};

export const Default = () => <RadialProgress progress={33} />;

export const ProgressColors = () => {
  const size = select('size', sizeOptions, null);

  return (
    <div>
      <h4>Neutral</h4>
      <RadialProgress progress={33} color="neutral" size={size} />
      <br />
      <h4>Negative</h4>
      <RadialProgress progress={56} color="negative" size={size} />
      <br />
      <h4>Highlight</h4>
      <RadialProgress progress={66} color="highlight" size={size} />
      <br />
      <h4>Primary</h4>
      <RadialProgress progress={88} color="primary" size={size} />
      <br />
      <h4>Default Color</h4>
      <RadialProgress progress={100} size={size} />
      <br />
    </div>
  );
};
