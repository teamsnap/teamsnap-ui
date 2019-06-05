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

 stories.add('Default', (() =>
  <Panel mods='u-padMd'>
    Base Panel with padding utility
  </Panel>
))

stories.add('Full Panel', (() =>
  <Panel>
      <PanelHeader>
        <h3 className='Panel-title'>Full Panel, with Nested Child Elements</h3>
      </PanelHeader>
      <PanelBody>
        <PanelRow mods='Grid'>
          <PanelCell mods='Grid-cell u-size'>
            <b>Bill Murray is an American actor...</b>
            <p>
            comedian, and writer. The fifth of nine children, he was born William James 
            Murray in Wilmette, Illinois, to Lucille (Collins), a mailroom clerk, and Edward Joseph Murray II, who sold 
            lumber. He is of Irish descent. Among his siblings are actors Brian Doyle-Murray, Joel Murray, and John Murray. 
            He and most of his siblings worked as caddies, which paid his tuition to Loyola Academy, a Jesuit school. He played 
            sports and did some acting while in that school, but in his words, mostly "screwed off." He enrolled at Regis College 
            in Denver to study pre-med but dropped out after being arrested for marijuana possession. He then joined the National 
            Lampoon Radio Hour with fellow members Dan Aykroyd, Gilda Radner, and John Belushi. However, while those three became 
            the original members of Saturday Night Live (1975), he joined Saturday Night Live with Howard Cosell (1975), which 
            premiered that same year. After that show failed, he later got the opportunity to join Saturday Night Live (1975), 
            for which he earned his first Emmy Award for Outstanding Writing in a Comedy-Variety or Music Series. He later went 
            on to star in comedy films. He also co-directed Quick Change (1990). Murray garnered additional critical acclaim later 
            in his career, starring in Lost in Translation (2003), which earned him a Golden Globe and a BAFTA Award for Best Actor, 
            as well as an Academy Award nomination for Best Actor. He also received Golden Globe nominations for his roles in 
            Ghostbusters, Rushmore (1998), Hyde Park on Hudson (2012), St. Vincent (2014), and the HBO miniseries Olive Kitteridge 
            (2014), for which he later won his second Primetime Emmy Award for Outstanding Supporting Actor in a Limited Series or a Movie.
            </p>
          </PanelCell>
          <PanelCell mods='Grid-cell'>
              <img src='https://www.fillmurray.com/640/360' />
          </PanelCell>
        </PanelRow>
        <PanelRow>
          <p>
          <b>Movies:</b> Meatballs (1979), Caddyshack (1980), Stripes (1981), Tootsie (1982), Ghostbusters 
          (1984), Ghostbusters II (1989), Scrooged (1988), What About Bob? (1991), and Groundhog Day (1993).
          </p>
        </PanelRow>
      </PanelBody>
      <PanelFooter>
        <span className='Button Button--negative'>Cancel Button Placeholder</span>
        <span className='Button Button--primary u-spaceLeftSm'>Confirm Button Placeholder</span>
      </PanelFooter>
  </Panel>
))

stories.add('Panel Image', (() =>
<Panel 
  panelImage={ select('Select Image', imageOptions, noImage) }
  mods='u-lg-size4of12 u-md-size8of12'
>
  <PanelBody>
    <PanelRow>
      <h3 className='Panel-title u-padBottomMd'>Panel Image</h3>
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
