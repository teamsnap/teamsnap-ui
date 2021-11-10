import * as React from 'react';

import Drawer from './Drawer';
import { Placement } from '../../types/placement';

import { Button } from '../Button';
import { Divider } from '../Divider';
import { Pill } from '../Pill';
import { Panel } from '../Panel';
import { PanelHeader } from '../PanelHeader';
import { PanelBody } from '../PanelBody';
import { PanelFooter } from '../PanelFooter';
import { PanelRow } from '../PanelRow';

export default {
  title: 'Components/Surfaces/Drawer',
  component: Drawer,
};

const useDrawerControls = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return { isDrawerOpen, openDrawer, closeDrawer };
};

const DrawerControls = ({ isDrawerOpen, openDrawer, closeDrawer }) => {
  return (
    <>
      <Button onClick={openDrawer} color="primary" mods="u-spaceRightSm">
        Open
      </Button>

      <Button onClick={closeDrawer} color="primary">
        Close
      </Button>

      <Divider />

      <Pill>Drawer is {isDrawerOpen ? 'Open' : 'Closed'}</Pill>
    </>
  );
};

const LoremIpsum = ({ num }) => {
  return (
    <>
      {Array.from(Array(num)).map((_, i) => (
        <p style={{ marginBottom: 16 }}>
          [{i + 1}] Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
          voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
          laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
        </p>
      ))}
    </>
  );
};

const DrawerPanel = ({ header, children, closeDrawer, fixedHeader = false }) => {
  let headerStyle = {
    position: fixedHeader ? 'sticky' : 'static',
    top: '16px',
    backgroundColor: '#fff',
  };

  return (
    <Panel mods={`u-spaceMd`}>
      <PanelHeader style={headerStyle}>
        <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {header}
          <Button onClick={closeDrawer} type="link">
            Close
          </Button>
        </h3>
      </PanelHeader>

      <PanelBody>
        <PanelRow>{children}</PanelRow>
      </PanelBody>

      <PanelFooter>
        <Button onClick={closeDrawer} color="primary">
          Close
        </Button>
      </PanelFooter>
    </Panel>
  );
};

export const Default = () => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerControls();

  return (
    <>
      <DrawerControls {...{ isDrawerOpen, openDrawer, closeDrawer }} />

      <Drawer open={isDrawerOpen} closeFn={closeDrawer} mods="u-size12of24" showOverlay>
        <DrawerPanel header="Default drawer" closeDrawer={closeDrawer}>
          <p>This is the default implementation of a Drawer component.</p>
          <p>
            It is a fixed position element that can slide in from the left (default), top, right, or
            bottom. It can be configured to close when a click event is registered outside of itself
            (much like a modal dialog). Its width/height can be set explicitly via the "style" prop.
            By default, its width/height is determined by its childrens' dimensions.
          </p>
        </DrawerPanel>
      </Drawer>
    </>
  );
};

export const RightSideWithExplicitWidth = () => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerControls();

  return (
    <>
      <DrawerControls {...{ isDrawerOpen, openDrawer, closeDrawer }} />

      <Drawer
        placement={Placement.Right}
        open={isDrawerOpen}
        style={{ width: '500px' }}
        closeFn={closeDrawer}
      >
        <DrawerPanel header="Right side drawer with explicit width" closeDrawer={closeDrawer}>
          <p>
            This Drawer component slides in from the right side. Below is a ton of text to showcase
            the component's ability to scroll in place with longer content.
          </p>

          <Divider />

          <LoremIpsum num={12} />
        </DrawerPanel>
      </Drawer>
    </>
  );
};

export const BottomSideWithClickOutsideHandler = () => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerControls();

  return (
    <>
      <DrawerControls {...{ isDrawerOpen, openDrawer, closeDrawer }} />

      <Drawer placement={Placement.Bottom} open={isDrawerOpen} closeFn={closeDrawer}>
        <DrawerPanel
          header="Bottom side drawer with modal-like click outside close handler"
          closeDrawer={closeDrawer}
        >
          <p>This drawer will close by clicking outside of the drawer itself.</p>
        </DrawerPanel>
      </Drawer>
    </>
  );
};

export const BottomSideWithLongText = () => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerControls();

  return (
    <>
      <DrawerControls {...{ isDrawerOpen, openDrawer, closeDrawer }} />

      <Drawer
        placement={Placement.Bottom}
        open={isDrawerOpen}
        closeFn={closeDrawer}
        style={{ height: '300px' }}
      >
        <DrawerPanel
          header="Bottom side drawer with modal-like click outside close handler"
          closeDrawer={closeDrawer}
          fixedHeader
        >
          <LoremIpsum num={16} />
        </DrawerPanel>
      </Drawer>
    </>
  );
};

export const TopSideWithClickOutsideHandler = () => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerControls();

  return (
    <>
      <DrawerControls {...{ isDrawerOpen, openDrawer, closeDrawer }} />

      <Drawer placement={Placement.Top} open={isDrawerOpen} closeFn={closeDrawer}>
        <DrawerPanel
          header="Top side drawer with modal-like click outside close handler"
          closeDrawer={closeDrawer}
        >
          <p>This drawer will close by clicking outside of the drawer itself.</p>
        </DrawerPanel>
      </Drawer>
    </>
  );
};

export const CustomTransition = () => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerControls();

  return (
    <>
      <DrawerControls {...{ isDrawerOpen, openDrawer, closeDrawer }} />

      <Drawer
        placement={Placement.Right}
        open={isDrawerOpen}
        closeFn={closeDrawer}
        style={{ transition: 'transform 500ms ease-in-out 500ms' }}
      >
        <DrawerPanel header="Custom transition with a delayed animation" closeDrawer={closeDrawer}>
          <p>
            This drawer has a custom transition passed in via the "style" prop. The animation is a
            bit slower and it is delayed by 500ms.
          </p>
        </DrawerPanel>
      </Drawer>
    </>
  );
};
