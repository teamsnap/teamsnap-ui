import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

const breadcrumbs = [
  {
    text: 'Organization',
    link: '/path-to-organization',
  },
  {
    text: '2021 Fall Season',
    link: '/path-to-season',
  },
  {
    text: 'Registration',
  },
];

const breadcrumbsWithoutLinks = [
  {
    text: 'Organization',
  },
  {
    text: '2021 Fall Season',
  },
  {
    text: 'Registration',
  },
];

const home = { url: 'https://storybook.js.org/' };

const stories = storiesOf('Breadcrumbs', module);

stories.add('Default', () => <Breadcrumbs breadcrumbs={breadcrumbs} />);

stories.add('With Home', () => (
  <Breadcrumbs breadcrumbs={breadcrumbs} home={home} />
));

stories.add('Without links', () => (
  <Breadcrumbs breadcrumbs={breadcrumbsWithoutLinks} home={{}} />
));
