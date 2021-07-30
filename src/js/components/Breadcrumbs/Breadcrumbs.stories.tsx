import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

const stories = storiesOf('Breadcrumbs', module);

const breadcrumbs = [
  { text: 'Organization', link: '/path-to-organization' },
  { text: '2021 Fall Season', link: '/path-to-season' },
  { text: 'Registration' },
];

stories.add('Default', () => <Breadcrumbs breadcrumbs={breadcrumbs} />);

stories.add('With components', () => {
  const breadcrumbsWithNoLinks = [
    { text: 'Organization', link: 'path-to-organization' },
    { text: '2021 Fall Season', link: 'path-to-season' },
    { text: 'Registration', link: 'path-to-registration' },
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithNoLinks} />;
});

stories.add('With strings', () => {
  const breadcrumbsWithStrings = [
    { text: 'Organization' },
    { text: '2021 Fall Season' },
    { text: 'Registration' },
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithStrings} />;
});

stories.add('With mixed types', () => {
  const breadcrumbsWithMixedTypes = [
    { text: 'Organization', link: 'path-to-organization' },
    { text: '2021 Fall Season', link: '/path-to-season' },
    { text: 'Registration' },
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithMixedTypes} />;
});

stories.add('With custom separator', () => {
  const breadcrumbsWithCustomSeparator = [
    { text: 'Organization' },
    { text: '2021 Fall Season' },
    { text: 'Registration' },
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithCustomSeparator} separator="🔥" />;
});
