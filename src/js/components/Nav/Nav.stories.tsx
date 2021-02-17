import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import Nav from "./Nav";
const stories = storiesOf("Nav", module);

stories.add("Default", () => (
  <div
    className="u-flex"
    style={{ backgroundColor: "#FFEFA5", minHeight: "800px" }}
  >
    <Nav
      mods="u-size2of12"
      headerItems={[
        {
          title: text("Team Name", "Boulder Youth Soccer"),
          image: text(
            "Image Source",
            "https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png"
          ),
        },
      ]}
    >
      <Nav.Item icon="dashboard" isActive wrapItem={ ({ children }) => <a href="https://go.teamsnap.com" target="_blank" rel="noreferrer">{ children }</a> }>
        Dashboard
      </Nav.Item>
      <Nav.Item icon="medal" onClick={ () => alert("Fire Custom On Click") }>
        Programs
      </Nav.Item>
      <Nav.Item icon="user">
        Members
      </Nav.Item>
      <Nav.Item icon="star">
        Staff
      </Nav.Item>
      <Nav.Item icon="settings">
        Settings
      </Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{ width: "40%" }}>
        This main and the nav are contained in a div that acts as a frame. The
        left nav is as tall as the frame, which, in this case, has a height
        manually set to 800px. By default, the nav is as wide as its container,
        so we use a grid to scope it to the size that we'd like. In this case,
        It's a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
));

stories.add("Without Header", () => (
  <>
    <h4>
      Removing the header items from the Nav allows us to have a more generic,
      left-aligned collapsible bar. Possible use cases could involve a
      collapsible bar for rich editing experience (possibly drag-and-drop) and
      more.
    </h4>
    <div
      className="u-flex"
      style={{ backgroundColor: "#FFEFA5", minHeight: "800px" }}
    >
      <Nav mods="u-size2of12">
        <Nav.Item icon="tracking" wrapItem={ ({ children }) => <a href="https://www.teamsnap.com" target="_blank" rel="noreferrer">{ children }</a> }>
            TeamSnap Home
          </Nav.Item>
        <Nav.Item icon="money">
          Show me the money
        </Nav.Item>
        <Nav.Item icon="messages" isActive>
          Txt me, maybe?
        </Nav.Item>
      </Nav>
      <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
        <div style={{ width: "40%" }}>
          This main and the nav are contained in a div that acts as a frame. The
          left nav is as tall as the frame, which, in this case, has a height
          manually set to 800px. By default, the nav is as wide as its
          container, so we use a grid to scope it to the size that we'd like. In
          this case, It's a flex grid where the nav is contained in a
          u-size2of12 div.
        </div>
      </main>
    </div>
  </>
));
