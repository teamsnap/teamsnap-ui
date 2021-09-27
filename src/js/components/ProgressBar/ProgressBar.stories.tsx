import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';

const stories = storiesOf('ProgressBar', module);

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

stories.add('Default', () => <ProgressBar progress={33} />);

stories.add(
  'Vertical Bars',
  () => {
    const size = select('size', ProgressBar.SIZE, null);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: '100px' }}
          direction={ProgressBar.DIRECTION.VERTICAL}
          color={`#f90`}
        />
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: '150px' }}
          direction={ProgressBar.DIRECTION.VERTICAL}
        />
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: '200px' }}
          direction={ProgressBar.DIRECTION.VERTICAL}
        />
        <ProgressBar
          progress={33}
          size={size}
          style={{ height: '250px' }}
          direction={ProgressBar.DIRECTION.VERTICAL}
        />
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
  'Variants',
  () => {
    const size = select('size', ProgressBar.SIZE, null);

    return (
      <div>
        <h4>Neutral</h4>
        <ProgressBar progress={33} variant={ProgressBar.VARIANT.NEUTRAL} size={size} />
        <br />
        <h4>Negative</h4>
        <ProgressBar progress={66} variant={ProgressBar.VARIANT.NEGATIVE} size={size} />
        <br />
        <h4>Highlight</h4>
        <ProgressBar progress={66} variant={ProgressBar.VARIANT.HIGHLIGHT} size={size} />
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
