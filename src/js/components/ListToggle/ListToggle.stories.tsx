import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ListToggle } from '.';

const stories = storiesOf('ListToggle', module);

export default {
  title: 'ListToggle',
  component: ListToggle,
};

stories.add('List Toggle', () => {
  const [showContainer, setShowContainer] = React.useState(false);

  return (
    <div>
      <ListToggle onClick={() => setShowContainer(!showContainer)} />
      {showContainer && <div>Open</div>}
    </div>
  );
});
