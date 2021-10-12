import * as React from 'react';
import { ListToggle } from '.';

export default {
  title: 'ListToggle',
};

export const Default = () => {
  const [showContainer, setShowContainer] = React.useState(false);

  return (
    <div>
      <ListToggle onClick={() => setShowContainer(!showContainer)} />
      {showContainer && <div>Open</div>}
    </div>
  );
};
