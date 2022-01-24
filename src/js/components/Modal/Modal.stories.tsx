import * as React from 'react';
import Modal from './Modal';
import { Button } from '../Button';
import { ProgressBar } from '../ProgressBar';
import { Loader } from '../Loader';

export default {
  title: 'Components/Surfaces/Modal',
};

export const Default = () => {
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Button onClick={() => setSending(true)}>Test Modal</Button>

      <Modal
        heading={<div className="u-textCenter">Sending</div>}
        show={sending}
        showClose
        closeFn={() => setSending(false)}
      >
        <Loader type="spin" text="Sending" message="Some really long message here" />
      </Modal>
    </>
  );
};

export const ClosingTriggeredByAsyncAction = () => {
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setTimeout(() => {
            setSending(false);
          }, 5000);

          setSending(true);
        }}
      >
        Test Modal
      </Button>

      <Modal heading={<div className="u-textCenter">Self closing modal</div>} show={sending}>
        <Loader type="spin" text="Sending" message="I close in 5 seconds." />
      </Modal>
    </>
  );
};

export const LongBodyText = () => {
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Button onClick={() => setSending(true)}>Test Modal</Button>

      <Modal
        heading="Sending"
        show={sending}
        showClose
        allowOverlayClose
        closeFn={() => setSending(false)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem at{' '}
          <i>Lorem</i> nibh elementum imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris.
          Fusce nec tellus sed augue semper porta. Mauris <b>Praesent</b> massa. Vestibulum{' '}
          <i>sagittis</i> lacinia arcu eget nulla. <i>at</i> Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur <i>massa.</i> sodales
          ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. <i>litora</i> Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas{' '}
          <b>Aenean</b> mattis. <b>Aenean</b> Sed convallis tristique sem. <i>Curabitur</i> Proin ut
          ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, <i>sem</i> iaculis
          vel, suscipit quis, luctus non, massa. Fusce ac <i>dolor.</i> turpis quis ligula lacinia
          aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,{' '}
          <b>aliquet.</b> nibh. <b>ipsum.</b> Quisque volutpat condimentum velit. Class aptent
          taciti sociosqu ad litora torquent <i>ipsum.</i> per conubia nostra, per <i>in,</i>{' '}
          inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, <b>litora</b> urna{' '}
          <i>nibh.</i> non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
          turpis. Nulla facilisi. Ut fringilla. Suspendisse <b>ipsum</b> potenti. Nunc feugiat mi a
          tellus <b>turpis.</b> consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
          <b>consequat</b> Suspendisse in justo eu <b>sapien.</b> magna luctus <i>turpis.</i>{' '}
          suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
          pharetra auctor, sem massa <b>lacus</b> mattis sem, at interdum magna augue eget diam.
          Vestibulum <i>lectus.</i> ante <b>at</b> ipsum <i>Quisque</i> primis <b>augue</b> in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi <i>at</i> lacinia{' '}
          <i>eget</i> molestie dui. Praesent blandit dolor. Sed non quam. In vel <b>lacinia</b> mi
          sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
          lacus <b>augue</b> nunc, <b>sit</b> viverra nec.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem at{' '}
          <i>Lorem</i> nibh elementum imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris.
          Fusce nec tellus sed augue semper porta. Mauris <b>Praesent</b> massa. Vestibulum{' '}
          <i>sagittis</i> lacinia arcu eget nulla. <i>at</i> Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur <i>massa.</i> sodales
          ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. <i>litora</i> Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas{' '}
          <b>Aenean</b> mattis. <b>Aenean</b> Sed convallis tristique sem. <i>Curabitur</i> Proin ut
          ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, <i>sem</i> iaculis
          vel, suscipit quis, luctus non, massa. Fusce ac <i>dolor.</i> turpis quis ligula lacinia
          aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,{' '}
          <b>aliquet.</b> nibh. <b>ipsum.</b> Quisque volutpat condimentum velit. Class aptent
          taciti sociosqu ad litora torquent <i>ipsum.</i> per conubia nostra, per <i>in,</i>{' '}
          inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, <b>litora</b> urna{' '}
          <i>nibh.</i> non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
          turpis. Nulla facilisi. Ut fringilla. Suspendisse <b>ipsum</b> potenti. Nunc feugiat mi a
          tellus <b>turpis.</b> consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
          <b>consequat</b> Suspendisse in justo eu <b>sapien.</b> magna luctus <i>turpis.</i>{' '}
          suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
          pharetra auctor, sem massa <b>lacus</b> mattis sem, at interdum magna augue eget diam.
          Vestibulum <i>lectus.</i> ante <b>at</b> ipsum <i>Quisque</i> primis <b>augue</b> in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi <i>at</i> lacinia{' '}
          <i>eget</i> molestie dui. Praesent blandit dolor. Sed non quam. In vel <b>lacinia</b> mi
          sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
          lacus <b>augue</b> nunc, <b>sit</b> viverra nec.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem at{' '}
          <i>Lorem</i> nibh elementum imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris.
          Fusce nec tellus sed augue semper porta. Mauris <b>Praesent</b> massa. Vestibulum{' '}
          <i>sagittis</i> lacinia arcu eget nulla. <i>at</i> Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur <i>massa.</i> sodales
          ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. <i>litora</i> Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas{' '}
          <b>Aenean</b> mattis. <b>Aenean</b> Sed convallis tristique sem. <i>Curabitur</i> Proin ut
          ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, <i>sem</i> iaculis
          vel, suscipit quis, luctus non, massa. Fusce ac <i>dolor.</i> turpis quis ligula lacinia
          aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,{' '}
          <b>aliquet.</b> nibh. <b>ipsum.</b> Quisque volutpat condimentum velit. Class aptent
          taciti sociosqu ad litora torquent <i>ipsum.</i> per conubia nostra, per <i>in,</i>{' '}
          inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, <b>litora</b> urna{' '}
          <i>nibh.</i> non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
          turpis. Nulla facilisi. Ut fringilla. Suspendisse <b>ipsum</b> potenti. Nunc feugiat mi a
          tellus <b>turpis.</b> consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
          <b>consequat</b> Suspendisse in justo eu <b>sapien.</b> magna luctus <i>turpis.</i>{' '}
          suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
          pharetra auctor, sem massa <b>lacus</b> mattis sem, at interdum magna augue eget diam.
          Vestibulum <i>lectus.</i> ante <b>at</b> ipsum <i>Quisque</i> primis <b>augue</b> in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi <i>at</i> lacinia{' '}
          <i>eget</i> molestie dui. Praesent blandit dolor. Sed non quam. In vel <b>lacinia</b> mi
          sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
          lacus <b>augue</b> nunc, <b>sit</b> viverra nec.
        </p>
      </Modal>
    </>
  );
};

export const Fullscreen = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Test Modal</Button>
      <Modal
        heading="Full bleed"
        showClose
        closeButton={<Button onClick={() => setIsOpen(false)} size='large'>Save and Exit</Button>}
        show={isOpen}
        allowOverlayClose={false}
        closeFn={() => setIsOpen(false)}
        fullscreen
      >
        <div className="u-padLg"
          style={{
            flex: '1',
            overflow: 'auto'
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem at{' '}
            <i>Lorem</i> nibh elementum imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris <b>Praesent</b> massa. Vestibulum{' '}
            <i>sagittis</i> lacinia arcu eget nulla. <i>at</i> Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur <i>massa.</i> sodales
            ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. <i>litora</i> Curabitur
            tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas{' '}
            <b>Aenean</b> mattis. <b>Aenean</b> Sed convallis tristique sem. <i>Curabitur</i> Proin ut
            ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, <i>sem</i> iaculis
            vel, suscipit quis, luctus non, massa. Fusce ac <i>dolor.</i> turpis quis ligula lacinia
            aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,{' '}
            <b>aliquet.</b> nibh. <b>ipsum.</b> Quisque volutpat condimentum velit. Class aptent
            taciti sociosqu ad litora torquent <i>ipsum.</i> per conubia nostra, per <i>in,</i>{' '}
            inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, <b>litora</b> urna{' '}
            <i>nibh.</i> non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla. Suspendisse <b>ipsum</b> potenti. Nunc feugiat mi a
            tellus <b>turpis.</b> consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
            <b>consequat</b> Suspendisse in justo eu <b>sapien.</b> magna luctus <i>turpis.</i>{' '}
            suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
            pharetra auctor, sem massa <b>lacus</b> mattis sem, at interdum magna augue eget diam.
            Vestibulum <i>lectus.</i> ante <b>at</b> ipsum <i>Quisque</i> primis <b>augue</b> in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi <i>at</i> lacinia{' '}
            <i>eget</i> molestie dui. Praesent blandit dolor. Sed non quam. In vel <b>lacinia</b> mi
            sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
            lacus <b>augue</b> nunc, <b>sit</b> viverra nec.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem at{' '}
            <i>Lorem</i> nibh elementum imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris <b>Praesent</b> massa. Vestibulum{' '}
            <i>sagittis</i> lacinia arcu eget nulla. <i>at</i> Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur <i>massa.</i> sodales
            ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. <i>litora</i> Curabitur
            tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas{' '}
            <b>Aenean</b> mattis. <b>Aenean</b> Sed convallis tristique sem. <i>Curabitur</i> Proin ut
            ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, <i>sem</i> iaculis
            vel, suscipit quis, luctus non, massa. Fusce ac <i>dolor.</i> turpis quis ligula lacinia
            aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,{' '}
            <b>aliquet.</b> nibh. <b>ipsum.</b> Quisque volutpat condimentum velit. Class aptent
            taciti sociosqu ad litora torquent <i>ipsum.</i> per conubia nostra, per <i>in,</i>{' '}
            inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, <b>litora</b> urna{' '}
            <i>nibh.</i> non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla. Suspendisse <b>ipsum</b> potenti. Nunc feugiat mi a
            tellus <b>turpis.</b> consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
            <b>consequat</b> Suspendisse in justo eu <b>sapien.</b> magna luctus <i>turpis.</i>{' '}
            suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
            pharetra auctor, sem massa <b>lacus</b> mattis sem, at interdum magna augue eget diam.
            Vestibulum <i>lectus.</i> ante <b>at</b> ipsum <i>Quisque</i> primis <b>augue</b> in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi <i>at</i> lacinia{' '}
            <i>eget</i> molestie dui. Praesent blandit dolor. Sed non quam. In vel <b>lacinia</b> mi
            sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
            lacus <b>augue</b> nunc, <b>sit</b> viverra nec.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem at{' '}
            <i>Lorem</i> nibh elementum imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta. Mauris <b>Praesent</b> massa. Vestibulum{' '}
            <i>sagittis</i> lacinia arcu eget nulla. <i>at</i> Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur <i>massa.</i> sodales
            ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. <i>litora</i> Curabitur
            tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas{' '}
            <b>Aenean</b> mattis. <b>Aenean</b> Sed convallis tristique sem. <i>Curabitur</i> Proin ut
            ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, <i>sem</i> iaculis
            vel, suscipit quis, luctus non, massa. Fusce ac <i>dolor.</i> turpis quis ligula lacinia
            aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,{' '}
            <b>aliquet.</b> nibh. <b>ipsum.</b> Quisque volutpat condimentum velit. Class aptent
            taciti sociosqu ad litora torquent <i>ipsum.</i> per conubia nostra, per <i>in,</i>{' '}
            inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, <b>litora</b> urna{' '}
            <i>nibh.</i> non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla. Suspendisse <b>ipsum</b> potenti. Nunc feugiat mi a
            tellus <b>turpis.</b> consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
            <b>consequat</b> Suspendisse in justo eu <b>sapien.</b> magna luctus <i>turpis.</i>{' '}
            suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae
            pharetra auctor, sem massa <b>lacus</b> mattis sem, at interdum magna augue eget diam.
            Vestibulum <i>lectus.</i> ante <b>at</b> ipsum <i>Quisque</i> primis <b>augue</b> in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi <i>at</i> lacinia{' '}
            <i>eget</i> molestie dui. Praesent blandit dolor. Sed non quam. In vel <b>lacinia</b> mi
            sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
            lacus <b>augue</b> nunc, <b>sit</b> viverra nec.
          </p>
        </div>
        <div
          style={ {
            flex: '0 0 100px',
          } }
        >
          <ProgressBar
            color="primary"
            progress='50'
            isSquared
            size="small"
          />

          <div
            className="u-flex u-flexJustifyBetween u-flexAlignItemsCenter u-spaceSidesLg"
            style={ {
              height: '100%'
            } }
          >
            <Button
              icon="left"
              iconPosition="left"
              size="large"
            >Back
            </Button>
            <Button
              color="primary"
              icon="right"
              iconPosition="right"
              size="large"
            >Next
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const WithDescriptors = () => {
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Button onClick={() => setSending(true)}>Test Modal</Button>

      <Modal
        heading="Sending"
        show={sending}
        showClose
        allowOverlayClose
        closeFn={() => setSending(false)}
        style={{ width: '80vw' }}
      >
        <div>
          <div className="u-border u-padSidesLg u-padEndsMd u-spaceBottomMd u-borderRadiusMd">
            <h3>Organization Admin</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. </p>
          </div>
          <div className="u-border u-padSidesLg u-padEndsMd u-borderRadiusMd">
            <h3>Program Admin</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const WithCloseButton = () => {
  const [sending, setSending] = React.useState(false);

  return (
    <>
      <Button onClick={() => setSending(true)}>Test Modal</Button>

      <Modal
        heading={<div className="u-textCenter">Sending</div>}
        show={sending}
        closeFn={() => setSending(false)}
      >
        <Loader type="spin" text="Sending" message="Some really long message here" />
        <div className="Modal-footer u-textCenter">
          <Button color="negative" onClick={() => setSending(false)} icon="dismiss">
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};
