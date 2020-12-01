import * as React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from "@storybook/addon-knobs/react";
import Nav from "./Nav";
const stories = storiesOf("Nav", module);

stories.add("Default", () => (
  <div className="u-flex" style={{backgroundColor: "#FFEFA5", minHeight: "800px"}}>
    <Nav mods="u-size2of12">
      <a href="https://www.teamsnap.com"><Nav.Item key="row1" icon="tracking">TeamSnap Home</Nav.Item></a>
      <Nav.Item key="row2" icon="money">Show me the money</Nav.Item>
      <Nav.Item key="row3" icon="messages" isActive>Txt me, maybe?</Nav.Item>
    </Nav>
    <main className="u-sizeFill u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
      <div style={{width: "40%"}}>
        This main and the nav are contained in a div that acts as a frame.
        The left nav is as tall as the frame, which, in this case, has a height manually set to 800px.
        By default, the nav is as wide as its container, so we use a grid to scope it to the size that we'd like.
        In this case, It's a flex grid where the nav is contained in a u-size2of12 div.
      </div>
    </main>
  </div>
));
