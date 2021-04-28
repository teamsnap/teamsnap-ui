import * as React from 'react';
import { Grid } from '../../Grid';
import { Cell } from '../../Cell';
import { Pill } from '../';

type Props = {
  active?: boolean;
  children: React.ReactNode;
};

const AttachmentPill: React.FunctionComponent<Props> = ({ active, children }: Props) => (
  <Grid>
    <Cell mods="u-size1of1">
      <Pill
        align='ends'
        active={ active }
      >
        { children }
      </Pill>
    </Cell>
  </Grid>
);

export default AttachmentPill;
