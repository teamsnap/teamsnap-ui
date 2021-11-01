import * as React from 'react';
import Loader from './Loader';

export default {
  title: 'Components/Feedback/Loader',
};

export const Default = () => <Loader type="spin" />;

export const Pulse = () => <Loader type="pulse" />;

export const Jello = () => <Loader type="jello" />;

export const LoaderWithText = () => <Loader type="spin" text="Loading" />;

export const LoaderWithMessage = () => (
  <Loader type="spin" message="Please while wait we take care of this for you." />
);

export const LoaderWithTextMessage = () => (
  <Loader type="spin" text="Processing" message="Please while wait we take care of this for you." />
);
