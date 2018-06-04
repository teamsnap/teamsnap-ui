import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, withKnobsOptions, text, boolean, number, selectV2, select } from '@storybook/addon-knobs/react';
import Button from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Default', withInfo()(() =>
  <Button mods="u-spaceRightSm"
    isDisabled={boolean('isDisabled', false)}
    isActive={boolean('isActive', false)}>
    Default Button
  </Button>
))
stories.add('Themed Colors', withInfo()(() =>
  <div>
    <Button mods="u-spaceRightSm" 
      isDisabled={boolean('isDisabled', false)}
      isActive={boolean('isActive', false)}
      color="primary">
      Primary Button
    </Button>
    <Button mods="u-spaceRightSm" 
      isDisabled={boolean('isDisabled', false)}
      isActive={boolean('isActive', false)}
      color="negative">
      Negative Button
    </Button>    
  </div>
))
stories.add('TeamSnap Colors', withInfo()(() =>
  <div>
    <Button mods="u-spaceRightSm" 
      isDisabled={boolean('isDisabled', false)}
      isActive={boolean('isActive', false)}
      color="orange">
      Orange Button
    </Button>
    <Button mods="u-spaceRightSm" 
      isDisabled={boolean('isDisabled', false)}
      isActive={boolean('isActive', false)}
      color="blue">
      Blue Button
    </Button>    
  </div>
))
stories.add('Status Colors', withInfo()(() =>
  <div>
    <div class="u-spaceBottomMd">
      <Button mods="u-spaceRightSm" 
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        color="yes">
        yes Button
      </Button>
      <Button mods="u-spaceRightSm" 
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        color="maybe">
        Maybe Button
      </Button>
      <Button mods="u-spaceRightSm" 
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        color="no">
        No Button
      </Button>
    </div>
    <div>
      <Button mods="u-spaceRightSm" 
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        color="yesDefault">
        Yes/Default Button
      </Button>
      <Button mods="u-spaceRightSm" 
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        color="maybeDefault">
        Maybe/Default Button
      </Button>
      <Button mods="u-spaceRightSm" 
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        color="noDefault">
        No/Default Button
      </Button>      
    </div>
  </div>
))
stories.add('Sizes', withInfo()(() =>
  <div>
    <Button mods="u-spaceRightSm" size="small">Small Button</Button>
    <Button mods="u-spaceRightSm" size="smallSquare" icon="dismiss"></Button>
    <Button mods="u-spaceRightSm">Default Button</Button>
    <Button mods="u-spaceRightSm" size="large">Large Button</Button>
    <Button mods="u-spaceRightSm" size="huge">Huge Button</Button>
  </div>
))

const storiesWithTextKnobs = storiesOf('Button', module);
storiesWithTextKnobs.addDecorator(withKnobsOptions({
  timestamps: true // Doesn't emit events while user is typing.
}));


storiesWithTextKnobs.add('with Icon', withInfo(`
    For a full list of icons visit the pattern library: https://teamsnap-ui-patterns.netlify.com/icons.html
  `)(() =>
  <div>
    <Button mods="u-spaceRightSm"
      icon={text('Icon Left', 'home')}>
      Icon Left (default)
    </Button>
    <Button mods="u-spaceRightSm"
      icon={text('Icon Right', 'right')}
      iconPosition="right">
      Icon Right
    </Button>
  </div>
))
  
  


