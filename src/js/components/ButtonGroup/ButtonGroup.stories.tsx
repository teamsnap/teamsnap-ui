import * as React from 'react';
import ButtonGroup from './ButtonGroup';
import { Button } from '../Button';

export default {
  title: 'Components/Forms/ButtonGroup',
};

export const ButtonChildren = () => {
  return (
    <ButtonGroup>
      <Button>Button1</Button>

      <Button>Button2</Button>
    </ButtonGroup>
  );
};
