import * as React from "react";
import { storiesOf } from "@storybook/react";
import Toolbar from "./Toolbar";
import { Nav } from "../Nav";

const stories = storiesOf("Toolbar", module);

stories.add("Default", () => (
  <>
    <Toolbar />
  </>
));

stories.add("Ideal toolbar placement", () => {
  return (
    <>
      <div
        className="u-flex"
        style={{
          minHeight: "80vh",
        }}
      >
        <Nav
          headerItem={{
            image:
              "https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png",
            title: "sample",
          }}
          mods="u-size2of12"
        >
          <Nav.Item icon="divisions">Programs</Nav.Item>
        </Nav>
        <main className="u-sizeFill u-flex u-flexJustifyCenter">
          <div style={{ width: "100%" }}>
            <Toolbar />
            <div>Page content here.</div>
          </div>
        </main>
      </div>
    </>
  );
});

stories.add("With Search", () => {
  return (
    <>
      <div
        className="u-flex"
        style={{
          minHeight: "80vh",
        }}
      >
        <Nav
          headerItem={{
            image:
              "https://aa5498032991a101442c-34c0f4eec246050dfc1ee92670a7b97d.ssl.cf1.rackcdn.com/logo-icon-dafd29abff7b6ca55ad71c35bd34d679.png",
            title: "sample",
          }}
          mods="u-size2of12"
        >
          <Nav.Item icon="divisions">Programs</Nav.Item>
        </Nav>
        <main className="u-sizeFill u-flex u-flexJustifyCenter">
          <div style={{ width: "100%" }}>
            <Toolbar showSearch showAccount accountBody={
              <div className="u-padXs">
                <div>You're logged in as Thomas Edison!</div>
                <div><a href="#">Sign Out?</a></div>
              </div>
            }
            helpBody={
              <div className="u-padXs">
               <h1>You can put whatver you want here!</h1>
              </div>
            }
            />
            <div>Page content here.</div>
          </div>
        </main>
      </div>
    </>
  );
});
