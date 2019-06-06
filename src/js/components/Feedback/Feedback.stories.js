import React from 'react';
import { storiesOf } from '@storybook/react';
import Feedback from './Feedback';

const stories = storiesOf("Feedback", module);

stories.add("Default", () => (
  <div>
    <Feedback
      icon="star"
      message="Look, a Feedback component with no title!"
    />

    <Feedback
      icon="star"
      title="Excellent Feedback"
      message="Look, a Feedback component with a title!"
    />
  </div>
));

stories.add("Colors and Icons", () => (
  <div>
    <Feedback
      icon="check"
      color="positive"
      title="Success!"
      message="This Feedback component would be great to indicate success."
    />

    <Feedback
      icon="alert"
      color="negative"
      title="Error"
      message="Doesn't this look like an error message?"
    />

    <Feedback
      icon="notifications"
      color="highlight"
      title="Warning"
      message="This color indicates that action may need to be taken soon."
    />
  </div>
));

stories.add("Alternates", () => (
  <div>
    <Feedback
      icon="check"
      color="positive"
      title="Success!"
      message="You can click the X to close this when you're ready."
      isDismissible={ true }
      handleClose={ () => 'closing' }
    />

    <Feedback
      icon="notifications"
      color="highlight"
      title="Warning"
      message="Something has to be finished. "
      isDismissible={ true }
      handleClose={ () => 'closing' } >
      <a href='#'>Click this to finish something!</a>    
    </Feedback>
  </div>
));
