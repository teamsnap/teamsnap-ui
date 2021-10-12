import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Nav from './Nav';

export default {
  title: 'Nav',
};

export const Default = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: text('Team Name', 'Boulder Youth Soccer'),
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithSubheading = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: text('Team Name', 'Boulder Youth Soccer'),
        subtitle: text('Season', '2021 Fall Season'),
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
      flyoutSections={[
        {
          heading: 'Organizations',
          tree: [
            {
              title: 'Boulder Sports',
              tree: [
                {
                  title: 'Organization Home',
                  wrapItem: ({ children }: { children: React.ReactNode }) => (
                    <a
                      href="https://organization.teamsnap.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                },
                {
                  title: 'Soccer Start',
                  useBadge: true,
                  tree: [
                    {
                      title: '2021 Spring Season',
                    },
                    {
                      title: '2021 Spring Playoffs',
                    },
                  ],
                },
                {
                  title: '6U-8U Rec',
                  useBadge: true,
                },
                {
                  title: '9U Rec',
                  useBadge: true,
                },
              ],
            },
            {
              title: 'Colorado Soccer',
            },
          ],
        },
        {
          heading: 'Teams',
          tree: [
            {
              title: 'Strikers',
              useBadge: true,
            },
            {
              title: 'Panthers',
              useBadge: true,
            },
            {
              title: 'Bobcats',
              useBadge: true,
            },
          ],
        },
      ]}
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithContentOverlay = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: text('Team Name', 'Boulder Youth Soccer'),
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
      flyoutSections={[
        {
          tree: [
            {
              title: 'Boulder Sports',
              tree: [
                {
                  title: 'Organization Home',
                  wrapItem: ({ children }: { children: React.ReactNode }) => (
                    <a
                      href="https://organization.teamsnap.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                },
                {
                  title: 'Soccer Start',
                  useBadge: true,
                  tree: [
                    {
                      title: '2021 Spring Season',
                    },
                    {
                      title: '2021 Spring Playoffs',
                    },
                  ],
                },
                {
                  title: '6U-8U Rec',
                  useBadge: true,
                },
                {
                  title: '9U Rec',
                  useBadge: true,
                },
              ],
            },
            {
              title: 'Colorado Soccer',
            },
          ],
        },
        {
          heading: 'Teams',
          tree: [
            {
              title: 'Strikers',
              useBadge: true,
            },
            {
              title: 'Panthers',
              useBadge: true,
            },
            {
              title: 'Bobcats',
              useBadge: true,
            },
          ],
        },
      ]}
      includeOverlay
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithAllItemsOpen = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: text('Team Name', 'Boulder Youth Soccer'),
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
      flyoutSections={[
        {
          heading: 'Organizations',
          tree: [
            {
              title: 'Boulder Sports',
              tree: [
                {
                  title: 'Spectacular Amazing Soccer Start',
                  useBadge: true,
                  tree: [
                    {
                      title: '2021 Spring Spectacular Amazing Season',
                    },
                    {
                      title: '2021 Spring Spectacular Amazing Playoffs',
                    },
                  ],
                },
                {
                  title: '6U-8U Rec',
                  useBadge: true,
                },
                {
                  title: '9U Rec',
                  useBadge: true,
                },
              ],
            },
            {
              title: 'Colorado Soccer',
            },
          ],
        },
        {
          heading: 'Teams',
          tree: [
            {
              title: 'Strikers',
              useBadge: true,
            },
            {
              title: 'Panthers',
              useBadge: true,
            },
            {
              title: 'Llamas',
              useBadge: true,
            },
            {
              title: 'Tigers',
              useBadge: true,
            },
            {
              title: 'Bobcats',
              useBadge: true,
            },
          ],
        },
      ]}
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }: { children: React.ReactNode }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithNavChildClass = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: text('Team Name', 'Boulder Youth Soccer'),
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
      flyoutSections={[
        {
          heading: 'Organizations',
          tree: [
            {
              title: 'Boulder Sports',
              tree: [
                {
                  title: 'Organization Home',
                  wrapItem: ({ children }: { children: React.ReactNode }) => (
                    <a
                      className="Nav-child"
                      href="https://organization.teamsnap.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                },
                {
                  title: 'Spectacular Amazing Soccer Start',
                  useBadge: true,
                  tree: [
                    {
                      title: '2021 Spring Spectacular Amazing Season',
                    },
                    {
                      title: '2021 Spring Spectacular Amazing Playoffs',
                    },
                  ],
                },
                {
                  title: '6U-8U Rec',
                  useBadge: true,
                },
                {
                  title: '9U Rec',
                  useBadge: true,
                },
              ],
            },
            {
              title: 'Colorado Soccer',
            },
          ],
        },
        {
          heading: 'Teams',
          tree: [
            {
              title: 'Strikers',
              useBadge: true,
            },
            {
              title: 'Panthers',
              useBadge: true,
            },
            {
              title: 'Llamas',
              useBadge: true,
            },
            {
              title: 'Tigers',
              useBadge: true,
            },
            {
              title: 'Bobcats',
              useBadge: true,
            },
          ],
        },
      ]}
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }: { children: React.ReactNode }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithNavSelectedClass = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: 'Soar Hockey Club',
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
      flyoutSections={[
        {
          tree: [
            {
              title: 'Soar Hockey Club',
              tree: [
                {
                  title: 'Spectacular Amazing Travel',
                  useBadge: true,
                  tree: [
                    {
                      title: 'Spectacular Amazing Spring 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          className="Nav-selected"
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                    {
                      title: 'Spectacular Amazing Fall 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                    {
                      title: 'Summer 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  ],
                },
                {
                  title: 'House',
                  useBadge: true,
                  tree: [
                    {
                      title: 'Spring 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]}
      includeOverlay
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }: { children: React.ReactNode }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithSingleOrganization = () => (
  <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
    <Nav
      mods="u-size3of12"
      headerItem={{
        title: 'Soar Hockey Club',
        image: text(
          'Image Source',
          'https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png'
        ),
      }}
      flyoutSections={[
        {
          tree: [
            {
              title: 'Soar Hockey Club',
              tree: [
                {
                  title: 'Spectacular Amazing Travel',
                  useBadge: true,
                  tree: [
                    {
                      title: 'Spectacular Amazing Spring 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          className="Nav-selected"
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                    {
                      title: 'Spectacular Amazing Fall 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                    {
                      title: 'Summer 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  ],
                },
                {
                  title: 'House',
                  useBadge: true,
                  tree: [
                    {
                      title: 'Spring 2021',
                      wrapItem: ({ children }: { children: React.ReactNode }) => (
                        <a
                          href="https://organization.teamsnap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]}
      includeOverlay
    >
      <Nav.Item
        icon="dashboard"
        isActive
        wrapItem={({ children }: { children: React.ReactNode }) => (
          <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={() => alert('Fire Custom On Click')}>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">Members</Nav.Item>
      <Nav.Item icon="star">Staff</Nav.Item>
      <Nav.Item icon="settings">Settings</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: '40%' }}>
        This main and the nav are contained in a div that acts as a frame. The left nav is as tall
        as the frame, which, in this case, has a height manually set to 800px. By default, the nav
        is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
        In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
);

export const WithoutHeader = () => (
  <>
    <h4>
      Removing the header items from the Nav allows us to have a more generic, left-aligned
      collapsible bar. Possible use cases could involve a collapsible bar for rich editing
      experience (possibly drag-and-drop) and more.
    </h4>
    <div className="u-flex" style={{ backgroundColor: '#FFEFA5', minHeight: '800px' }}>
      <Nav mods="u-size3of12">
        <Nav.Item
          icon="tracking"
          wrapItem={({ children }) => (
            <a href="https://www.teamsnap.com" target="_blank" rel="noreferrer">
              {children}
            </a>
          )}
        >
          TeamSnap Home
        </Nav.Item>
        <Nav.Item icon="money">Show me the money</Nav.Item>
        <Nav.Item icon="messages" isActive>
          Txt me, maybe?
        </Nav.Item>
      </Nav>
      <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
        <div style={{ width: '40%' }}>
          This main and the nav are contained in a div that acts as a frame. The left nav is as tall
          as the frame, which, in this case, has a height manually set to 800px. By default, the nav
          is as wide as its container, so we use a grid to scope it to the size that we&apos;d like.
          In this case, It&apos;s a flex grid where the nav is contained in a u-size2of12 div.
        </div>
      </main>
    </div>
  </>
);
