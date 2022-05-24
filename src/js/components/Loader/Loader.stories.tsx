import * as React from 'react';
import Loader from './Loader';

export default {
  title: 'Components/Feedback/Loader',
};

const size = {
  height: 40,
  width: 40
}

export const Default = () => <Loader type="spin" />;

export const SpinWithSize = () => <Loader type="spin" size={ size } />;

export const Pulse = () => <Loader type="pulse" />;

export const PulseWithSize = () => <Loader type="pulse" size={ size } />;

export const Jello = () => <Loader type="jello" />;

export const JelloWithSize = () => <Loader type="jello" size={ size} />;

export const LoaderWithText = () => <Loader type="spin" text="Loading" />;

export const LoaderWithMessage = () => (
  <Loader type="spin" message="Please while wait we take care of this for you." />
);

export const LoaderWithTextMessage = () => (
  <Loader type="spin" text="Processing" message="Please while wait we take care of this for you." />
);
