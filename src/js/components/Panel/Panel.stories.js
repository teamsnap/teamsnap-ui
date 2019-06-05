import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from "@storybook/addon-knobs/react";
import Panel from './Panel';
import PanelHeader from '../PanelHeader';
import PanelBody from '../PanelBody';
import PanelFooter from '../PanelFooter';
import PanelRow from '../PanelRow'; 
import PanelCell from '../PanelCell'; 

const stories = storiesOf('Panel', module);

 const noImage = { Source: null, Placeholder: 'http://via.placeholder.com/640x360' };
 const billMurrayImage = { Source: 'https://www.fillmurray.com/640/360', Placeholder: 'http://via.placeholder.com/640x360' };
 const catImage = { Source: 'https://loremflickr.com/800/300', Placeholder: 'http://via.placeholder.com/300x300' };
 const randomImage = { Source: 'http://lorempixel.com/300/300', Placeholder: 'http://via.placeholder.com/300x300' };
 const animalImage = { Source: 'http://placeimg.com/500/200/animals', Placeholder: 'http://via.placeholder.com/500x200' };
 const brownBearImage = { Source: 'https://placebear.com/1000/750', Placeholder: 'http://via.placeholder.com/1000x750' };
 const beardImage = { Source: 'https://placebeard.it/100x150', Placeholder: 'http://via.placeholder.com/100x150' };
 const architectureImage = { Source: 'http://placeimg.com/300/800/architecture', Placeholder: 'http://via.placeholder.com/300x800' };

 const imageOptions = {
  'None': noImage,
  'Bill Murray (640x360)': billMurrayImage,
  'Cats (800x300)': catImage,
  'Random (300x300)': randomImage,
  'Animal (500x200)': animalImage,
  'Brown Bear (1000x750)': brownBearImage,
  'Beards (100x150)': beardImage,
  'Architecture (300x800)': architectureImage
 };

stories.add('Defaults', (() =>
  <Panel>
    <PanelHeader title='Panel with Header, Body, Rows, Cells, and Footer' />
    <PanelBody>
      <PanelRow>
        <PanelCell>
          Panel Cell Content
        </PanelCell>
        <PanelCell>
        Panel Cell Content
        </PanelCell>
      </PanelRow>
      <PanelRow>
        Second Panel Row Content
      </PanelRow>
    </PanelBody>
    <PanelFooter>
      Panel Footer Content
    </PanelFooter>
  </Panel>
))

stories.add('Full Panel', (() =>
  <Panel>
    <PanelHeader title='Full Panel, with Nested Child Elements' />
    <PanelBody>
      <PanelRow isWithCells>
        <PanelCell mods='u-size4of24 u-flexGrow0' isTitle isHeader>
          Bill Murray Bio
        </PanelCell>
        <PanelCell mods='u-size12of24'>
          Bill Murray is an American actor, comedian, and writer. The fifth of nine children, he was born William James Murray in Wilmette, 
          Illinois, to Lucille (Collins), a mailroom clerk, and Edward Joseph Murray II, who sold lumber. He is of Irish descent. Among 
          his siblings are actors Brian Doyle-Murray, Joel Murray, and John Murray. He and most of his siblings worked as caddies, which 
          paid his tuition to Loyola Academy, a Jesuit school. He played sports and did some acting while in that school, but in his words, 
          mostly "screwed off." He enrolled at Regis College in Denver to study pre-med but dropped out after being arrested for marijuana 
          possession. He then joined the National Lampoon Radio Hour with fellow members Dan Aykroyd, Gilda Radner, and John Belushi.
        </PanelCell>
        <PanelCell mods='u-size8of24'>
          <img src='https://www.fillmurray.com/640/360' />
        </PanelCell>
      </PanelRow>
      <PanelRow isWithCells>
        <PanelCell mods='u-size4of24 u-flexGrow0' isTitle isHeader>
          Bill Murray Movies
        </PanelCell>
        <PanelCell mods='u-size4of24'>
          Meatballs (1979), Caddyshack (1980), Stripes (1981), Tootsie (1982), Ghostbusters 
          (1984), Ghostbusters II (1989), Scrooged (1988), What About Bob? (1991), and Groundhog Day (1993).
        </PanelCell>
      </PanelRow>
    </PanelBody>
    <PanelFooter>
      <span className='Button Button--negative'>Cancel Button Placeholder</span>
      <span className='Button Button--primary u-spaceLeftSm'>Confirm Button Placeholder</span>
    </PanelFooter>
  </Panel>
))

stories.add('Image Header Panel', (() =>
<Panel mods='u-lg-size4of12 u-md-size8of12'>
  <PanelHeader 
    headerImage={ select('Select Image', imageOptions, noImage) } 
    title='Panel with Image Header'
    />
  <PanelBody>
    <PanelRow>
        <p>
          Select different panel images to place in the space above. You may also adjust the size of the
          image too, to ensure it scales properly to the space.
        </p>
      </PanelRow>
  </PanelBody>
  <PanelFooter>
  <span className='Button Button--primary u-size1of1 u-textCenter'>Action Button Placeholder</span>
  </PanelFooter>
</Panel>
))
