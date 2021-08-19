import * as React from 'react';
import { Grid } from '../Grid';
import { Cell } from '../Cell';
import { Pill } from '../Pill';

type Props = {
  active?: boolean;
  children: React.ReactNode;
};

const AttachmentPill = ({ active, children }: Props) => (
  <Grid>
    <Cell mods="u-size1of1">
      <Pill data-testid="pill" align="ends" active={active}>
        {children}
      </Pill>
    </Cell>
  </Grid>
);

export default AttachmentPill;
