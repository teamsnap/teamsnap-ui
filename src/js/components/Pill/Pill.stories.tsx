import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../Icon';
import { Pill, PillStatus } from '.';
import { AttachmentPill } from '../AttachmentPill';
import { CheckboxPill } from '../CheckboxPill';

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
  <Pill status={PillStatus.ACTIVE}>
    <p>Default</p>
  </Pill>
));

stories.add('Pill -- Error', () => (
  <Pill status={PillStatus.ERROR}>
    <p>Default</p>
  </Pill>
));

stories.add('Pill -- style/ mod overrides', () => (
  <Pill
    status={PillStatus.ACTIVE}
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
  <AttachmentPill status={PillStatus.ACTIVE}>
    <p>
      <Icon name="file" /> tournament-registration-flyer.pdf (4.5 MB)
    </p>
    <Icon name="dismiss" />
  </AttachmentPill>
));
