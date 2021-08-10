import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../Icon';
import { Pill, CheckboxPill } from '.';
import { AttachmentPill } from './AttachmentPill';

const stories = storiesOf('Pill', module);

export default {
  title: 'Pill',
  component: Pill,
};

stories.add('Default', () => (
  <Pill>
    <p>Default</p>
  </Pill>
));

stories.add('Pill -- Active', () => (
  <Pill active>
    <p>Default</p>
  </Pill>
));

stories.add('Pill -- style/ mod overrides', () => (
  <Pill
    active
    mods="u-padXl"
    style={{
      backgroundColor: 'white',
    }}
  >
    <p>Default</p>
  </Pill>
));

stories.add('Centered Content', () => (
  <Pill align="center">
    <p>Centered Content</p>
  </Pill>
));

stories.add('Checkbok Pill', () => <CheckboxPill />);

stories.add('Attatchment Pill -- Inactive', () => (
  <AttachmentPill>
    <p>
      <Icon name="file" /> tournament-registration-flyer.pdf (4.5 MB)
    </p>
    <Icon name="dismiss" />
  </AttachmentPill>
));

stories.add('Attatchment Pill -- Active', () => (
  <AttachmentPill active>
    <p>
      <Icon name="file" /> tournament-registration-flyer.pdf (4.5 MB)
    </p>
    <Icon name="dismiss" />
  </AttachmentPill>
));
