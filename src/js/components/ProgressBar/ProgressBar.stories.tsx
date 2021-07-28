import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';

const stories = storiesOf('ProgressBar', module);

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

const sizeOptions = {
  xsmall: 'xsmall',
  small: 'small',
  default: null,
  large: 'large',
  xlarge: 'xlarge',
};

stories.add('Default', () => <ProgressBar progress={33} />);

stories.add(
  'Vertical Bars',
  () => {
    const size = select('size', sizeOptions, null);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <ProgressBar progress={33} size={size} style={{ height: '100px' }} isVertical />
        <ProgressBar progress={33} size={size} style={{ height: '150px' }} isVertical />
        <ProgressBar progress={33} size={size} style={{ height: '200px' }} isVertical />
        <ProgressBar progress={33} size={size} style={{ height: '250px' }} isVertical />
      </div>
    );
  },
  {
    knobs: {
      timestamps: true,
      debounce: { wait: 500, leading: false },
    },
  }
);

stories.add(
  'Progress Colors',
  () => {
    const size = select('size', sizeOptions, null);

    return (
      <div>
        <h4>Neutral</h4>
        <ProgressBar progress={33} color="neutral" size={size} />
        <br />
        <h4>Negative</h4>
        <ProgressBar progress={66} color="negative" size={size} />
        <br />
        <h4>Highlight</h4>
        <ProgressBar progress={66} color="highlight" size={size} />
        <br />
        <h4>Default Color</h4>
        <ProgressBar progress={100} size={size} />
        <br />
      </div>
    );
  },
  {
    knobs: {
      timestamps: true,
      debounce: { wait: 500, leading: false },
    },
  }
);
