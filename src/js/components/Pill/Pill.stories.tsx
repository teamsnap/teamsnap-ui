import * as React from 'react';
import { Icon } from '../Icon';
import { Pill, PillStatus } from '.';
import { AttachmentPill } from '../AttachmentPill';
import { CheckboxPill } from '../CheckboxPill';

export default {
  title: 'Design System/Atoms/Pill',
};

export const Default = () => (
  <Pill>
    <p>Default</p>
  </Pill>
);

export const PillActive = () => (
  <Pill status={PillStatus.ACTIVE}>
    <p>Default</p>
  </Pill>
);

export const PillError = () => (
  <Pill status={PillStatus.ERROR}>
    <p>Default</p>
  </Pill>
);

export const PillStyleOverrides = () => (
  <Pill
    status={PillStatus.ACTIVE}
    mods="u-padXl"
    style={{
      backgroundColor: 'white',
    }}
  >
    <p>Default</p>
  </Pill>
);

export const CenteredContent = () => (
  <Pill align="center">
    <p>Centered Content</p>
  </Pill>
);

export const CheckbokPill = () => <CheckboxPill />;

export const AttatchmentPillInactive = () => (
  <AttachmentPill>
    <p>
      <Icon name="file" /> tournament-registration-flyer.pdf (4.5 MB)
    </p>
    <Icon name="dismiss" />
  </AttachmentPill>
);

export const AttatchmentPillActive = () => (
  <AttachmentPill status={PillStatus.ACTIVE}>
    <p>
      <Icon name="file" /> tournament-registration-flyer.pdf (4.5 MB)
    </p>
    <Icon name="dismiss" />
  </AttachmentPill>
);
