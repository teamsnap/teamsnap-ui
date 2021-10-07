import * as React from 'react';
import { Grid } from '../Grid';
import { Cell } from '../Cell';
import { Pill, PillStatus } from '../Pill';

type Props = {
  status?: PillStatus.ACTIVE | PillStatus.ERROR;
  children: React.ReactNode;
};

const AttachmentPill = ({ status, children }: Props) => (
  <Grid>
    <Cell mods="u-size1of1">
      <Pill align="ends" status={status}>
        {children}
      </Pill>
    </Cell>
  </Grid>
);

export default AttachmentPill;
