import * as React from 'react';
import StepNav from './StepNav';

export default {
  title: 'StepNav',
};

export const Default = () => (
  <div style={{ padding: '20px' }}>
    <StepNav
      title="Lets get familiar with TeamSnap"
      steps={[
        {
          name: 'Check out your dashboard',
          icon: 'home',
          linkProps: {
            onClick: (e) => {
              e.preventDefault();
              console.warn('STEP 1 Click');
            },
          },
        },
        {
          name: 'Find your friends int he roster',
          icon: 'roster',
          linkProps: {
            onClick: (e) => {
              e.preventDefault();
              alert('Oh, you clicked me!');
            },
          },
        },
        {
          name: 'Message your coach to let them know you are signed up!',
          icon: 'messages',
        },
      ]}
    />
  </div>
);

export const Small = () => (
  <div style={{ padding: '20px' }}>
    <StepNav
      isSmall
      title="Lets get familiar with TeamSnap"
      steps={[
        {
          name: 'Check out your dashboard',
          icon: 'home',
          linkProps: {
            onClick: (e) => {
              e.preventDefault();
              console.warn('STEP 1 Click');
            },
          },
        },
        {
          name: 'Find your friends int he roster',
          icon: 'roster',
          linkProps: {
            onClick: (e) => {
              e.preventDefault();
              alert('Oh, you clicked me!');
            },
          },
        },
        {
          name: 'Message your coach to let them know you are signed up!',
          icon: 'messages',
        },
      ]}
    />
  </div>
);
