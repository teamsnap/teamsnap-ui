import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Toolbar from './Toolbar';
import { Field } from '../Field';
import { Icon } from '../Icon';
import { Nav } from '../Nav';
import { Breadcrumbs } from '../Breadcrumbs';

const stories = storiesOf('Toolbar', module);

export default {
  title: 'Toolbar',
  component: Toolbar,
};

const Search = () => (
  <div className="Grid-cell u-flexAuto">
    <Field
      type="input"
      formFieldProps={{
        placeholder: 'Find a program, season, or member',
        leftIcon: <Icon className="Icon" name="search" />,
      }}
      name="Sample"
    />
  </div>
);

stories.add('Default', () => (
  <>
    <Toolbar
      showAccount={boolean('Show Account', true)}
      showAdmin={boolean('Show Admin', true)}
      showHelp={boolean('Show Help', true)}
    >
      <Search />
    </Toolbar>
  </>
));

stories.add('With Flyouts', () => (
  <>
    <Toolbar
      showAccount={boolean('Show Account', true)}
      showAdmin={boolean('Show Admin', true)}
      showHelp={boolean('Show Help', true)}
      helpBody={<p>Help</p>}
      adminBody={<p>Admin</p>}
      accountBody={<p>Account</p>}
    >
      <Search />
    </Toolbar>
  </>
));

stories.add('Ideal toolbar placement', () => (
  <>
    <div
      className="u-flex"
      style={{
        minHeight: '80vh',
      }}
    >
      <Nav
        headerItem={{
          image:
            'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png',
          title: 'sample',
        }}
        mods="u-size2of12"
      >
        <Nav.Item icon="divisions">Programs</Nav.Item>
      </Nav>
      <main className="u-sizeFill u-flex u-flexJustifyCenter">
        <div style={{ width: '100%' }}>
          <Toolbar />
          <div>Page content here.</div>
        </div>
      </main>
    </div>
  </>
));

stories.add('With Search', () => (
  <>
    <div
      className="u-flex"
      style={{
        minHeight: '80vh',
      }}
    >
      <Nav
        headerItem={{
          image:
            'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png',
          title: 'sample',
        }}
        mods="u-size2of12"
      >
        <Nav.Item icon="divisions">Programs</Nav.Item>
      </Nav>
      <main className="u-sizeFill u-flex u-flexJustifyCenter">
        <div style={{ width: '100%' }}>
          <Toolbar
            showAccount
            accountBody={
              <div className="u-padXs">
                <div>You're logged in as Thomas Edison!</div>
                <div>
                  <a href="#">Sign Out?</a>
                </div>
              </div>
            }
            helpBody={
              <div className="u-padXs">
                <h1>You can put whatver you want here!</h1>
              </div>
            }
          >
            <Search />
          </Toolbar>

          <div>Page content here.</div>
        </div>
      </main>
    </div>
  </>
));

stories.add('With Breadcrumbs', () => {
  const breadcrumbs = [
    {
      text: 'Boulder Soccer',
      link: '#boulder-soccer',
    },
    {
      text: 'Competitive',
      link: '#competitive',
    },
    {
      text: '2021 Fall Season',
      link: '#2021-fall-season',
    },
    {
      text: 'Registration',
    },
  ];

  return (
    <Toolbar>
      <div className="Grid-cell u-flexAlignSelfCenter u-sizeFit u-textNoWrap u-textEllipsis u-spaceRightLg">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    </Toolbar>
  );
});

stories.add('With Breadcrumbs and Search', () => {
  const breadcrumbs = [
    {
      text: 'Boulder Soccer',
      link: '#boulder-soccer',
    },
    {
      text: 'Competitive',
      link: '#competitive',
    },
    {
      text: 'Registration',
    },
  ];

  return (
    <Toolbar>
      <div className="Grid-cell u-flexAlignSelfCenter u-sizeFit u-textNoWrap u-textEllipsis u-spaceRightLg">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      <Search />
    </Toolbar>
  );
});
