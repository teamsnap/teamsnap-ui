import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/Feedback/Progress/Progress Bar',
};

const sizeOptions = {
  xsmall: 'xsmall',
  small: 'small',
  default: null,
  large: 'large',
  xlarge: 'xlarge',
};

export const Default = () => <ProgressBar progress={33} />;

export const VerticalBars = () => {
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
};

export const ProgressColors = () => {
  const size = select('size', sizeOptions, null);

  return (
    <div>
      <h4>Neutral</h4>
      <ProgressBar progress={33} color="neutral" size={size} />
      <br />
      <h4>Negative</h4>
      <ProgressBar progress={56} color="negative" size={size} />
      <br />
      <h4>Highlight</h4>
      <ProgressBar progress={66} color="highlight" size={size} />
      <br />
      <h4>Primary Color</h4>
      <ProgressBar progress={88} color="primary" size={size} />
      <br />
      <h4>Default Color</h4>
      <ProgressBar progress={100} size={size} />
      <br />
    </div>
  );
};

export const SquaredBars = () => {
  const size = select('size', sizeOptions, null);
  return (
    <div>
      <h4>Vertical squared Bar</h4>
      <ProgressBar progress={33} size={size} style={{ height: '200px' }} isVertical isSquared />
      <br />
      <h4>Horizontal squared Bar</h4>
      <ProgressBar progress={33} size={size} style={{ height: '20px' }} isSquared />
      <br />
    </div>
  );
};
