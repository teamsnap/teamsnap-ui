import * as React from "react";
import { storiesOf } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

const stories = storiesOf("Breadcrumbs", module);

const breadcrumbs = [
  <a href="/path-to-organization">Organization</a>,
  <a href="/path-to-season">2021 Fall Season</a>,
  <span>Registration</span>,
];

stories.add("Default", () => <Breadcrumbs breadcrumbs={breadcrumbs} />);

const Link = ({ text, href }) => {
  return (<a href={href}>{text}</a>);
};

stories.add("With components", () => {
  const breadcrumbsWithComponents = [
    <Link text="Organization" href="#" />,
    <Link text="2021 Fall Season" href="#" />,
    <Link text="Registration" href="#" />,
  ];

  return (
    <Breadcrumbs breadcrumbs={breadcrumbsWithComponents} />
  );
});


stories.add("With strings", () => {
  const breadcrumbsWithStrings = [
    'Organization',
    '2021 Fall Season',
    'Registration',
  ];

  return (
    <Breadcrumbs breadcrumbs={breadcrumbsWithStrings} />
  );
});


stories.add("With mixed types", () => {
  const breadcrumbsWithMixedTypes = [
    <a href="#">Organization</a>,
    <Link text="2021 Fall Season" href="#" />,
    'Registration',
  ];

  return (
    <Breadcrumbs breadcrumbs={breadcrumbsWithMixedTypes} />
  );
});

stories.add("With custom separator", () => {
  const breadcrumbsWithCustomSeparator = [
    'Organization',
    '2021 Fall Season',
    'Registration',
  ];

  return (
    <Breadcrumbs breadcrumbs={breadcrumbsWithCustomSeparator} separator="🔥" />
  );
});
