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

export const Default = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

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

      <Drawer
        style={{ width: '500px' }}
        open={isDrawerOpen}
        onClose={closeDrawer}
        testId={`Drawer-storybook-default`}
      >
        <Panel mods={`u-spaceMd`}>
          <PanelHeader>
            <h3>Default drawer</h3>
          </PanelHeader>

          <PanelBody>
            <PanelRow>
              <p>This is the default implementation of a Drawer component.</p>
              <p>
                It is a fixed position element that can slide in from the left (default), top,
                right, or bottom. It can be configured to close when a click event is registered
                outside of itself (much like a modal dialog). Its width/height can be set explicitly
                via the "style" prop. By default, its width/height is determined by its childrens'
                dimensions.
              </p>
            </PanelRow>
          </PanelBody>

          <PanelFooter>
            <Button onClick={closeDrawer} color="primary">
              Close
            </Button>
          </PanelFooter>
        </Panel>
      </Drawer>
    </>
  );
};

export const RightSideWithExplicitWidth = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

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

      <Drawer
        placement={Placement.Right}
        open={isDrawerOpen}
        style={{ width: '500px' }}
        testId={`Drawer-storybook-default`}
        onClose={closeDrawer}
      >
        <Panel mods={`u-spaceMd`}>
          <PanelHeader>
            <h3>Right side drawer with explicit width</h3>
          </PanelHeader>

          <PanelBody>
            <PanelRow>
              <p>
                This Drawer component slides in from the right side. Below is a ton of text to
                showcase the component's ability to scroll in place with longer content.
              </p>

              <Divider />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint non,
                voluptatum cum placeat distinctio labore, perferendis, magni itaque fuga voluptate
                laborum. Voluptatem voluptates natus alias maiores deleniti quo? Tempore!
              </p>
            </PanelRow>
          </PanelBody>

          <PanelFooter>
            <Button onClick={closeDrawer} color="primary">
              Close
            </Button>
          </PanelFooter>
        </Panel>
      </Drawer>
    </>
  );
};

export const BottomSideWithClickOutsideHandler = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

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

      <Drawer
        placement={Placement.Bottom}
        open={isDrawerOpen}
        onClose={closeDrawer}
        allowOverlayClose
        testId={`Drawer-storybook-default`}
      >
        <Panel mods={`u-spaceMd`}>
          <PanelHeader>
            <h3>Bottom side drawer with modal-like click outside close handler</h3>
          </PanelHeader>

          <PanelBody>
            <PanelRow>
              <p>This drawer will close by clicking outside of the drawer itself.</p>
            </PanelRow>
          </PanelBody>

          <PanelFooter>
            <Button onClick={closeDrawer} color="primary">
              Close
            </Button>
          </PanelFooter>
        </Panel>
      </Drawer>
    </>
  );
};

export const TopSideWithClickOutsideHandler = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

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

      <Drawer
        placement={Placement.Top}
        open={isDrawerOpen}
        onClose={closeDrawer}
        allowOverlayClose
        testId={`Drawer-storybook-default`}
      >
        <Panel mods={`u-spaceMd`}>
          <PanelHeader>
            <h3>Top side drawer with modal-like click outside close handler</h3>
          </PanelHeader>

          <PanelBody>
            <PanelRow>
              <p>This drawer will close by clicking outside of the drawer itself.</p>
            </PanelRow>
          </PanelBody>

          <PanelFooter>
            <Button onClick={closeDrawer} color="primary">
              Close
            </Button>
          </PanelFooter>
        </Panel>
      </Drawer>
    </>
  );
};

export const CustomTransition = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

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

      <Drawer
        placement={Placement.Right}
        open={isDrawerOpen}
        onClose={closeDrawer}
        allowOverlayClose
        style={{ transition: 'transform 500ms ease-in-out 500ms' }}
        testId={`Drawer-storybook-default`}
      >
        <Panel mods={`u-spaceMd`}>
          <PanelHeader>
            <h3>Custom transition with a delayed animation</h3>
          </PanelHeader>

          <PanelBody>
            <PanelRow>
              <p>
                This drawer has a custom transition passed in via the "style" prop. The animation is
                a bit slower and it is delayed by 500ms.
              </p>
            </PanelRow>
          </PanelBody>

          <PanelFooter>
            <Button onClick={closeDrawer} color="primary">
              Close
            </Button>
          </PanelFooter>
        </Panel>
      </Drawer>
    </>
  );
};
