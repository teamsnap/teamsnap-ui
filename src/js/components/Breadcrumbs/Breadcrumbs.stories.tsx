import * as React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
};

interface Props {
  text: string;
  href: string;
}

const breadcrumbs = [
  <a href="/path-to-organization">Organization</a>,
  <a href="/path-to-season">2021 Fall Season</a>,
  <span>Registration</span>,
];

export const Default = () => <Breadcrumbs breadcrumbs={breadcrumbs} />;

const Link = ({ text, href }: Props) => {
  return <a href={href}>{text}</a>;
};

export const WithComponents = () => {
  const breadcrumbsWithComponents = [
    <Link text="Organization" href="#org" />,
    <Link text="2021 Fall Season" href="#season" />,
    <Link text="Registration" href="#registration" />,
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithComponents} />;
};

export const WithStrings = () => {
  const breadcrumbsWithStrings = ['Organization', '2021 Fall Season', 'Registration'];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithStrings} />;
};

export const WithMixedTypes = () => {
  const breadcrumbsWithMixedTypes = [
    <a href="#org">Organization</a>,
    <Link text="2021 Fall Season" href="#season" />,
    'Registration',
  ];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithMixedTypes} />;
};

export const WithCustomSeparator = () => {
  const breadcrumbsWithCustomSeparator = ['Organization', '2021 Fall Season', 'Registration'];

  return <Breadcrumbs breadcrumbs={breadcrumbsWithCustomSeparator} separator="🔥" />;
};
