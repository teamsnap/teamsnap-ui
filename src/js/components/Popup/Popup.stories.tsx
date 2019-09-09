import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import PopupAction from "./PopupAction";
import PopupConfirm from "./PopupConfirm";

const stories = storiesOf("Popup", module);

const actions = [
  {
    text: "Log to console",
    callback: () => {
      console.log("Logging to console");
    }
  },
  {
    text: "JavaScript Alert",
    callback: () => {
      alert("whoa!");
    }
  }
];

const directionOptions = [
  "default",
  "down",
  "right",
  "left",
  "rightHang",
  "leftHang",
  "overlay"
];
stories.add("PopupActions", () => {
  const dir = select("direction", directionOptions);
  const direction = dir === "default" ? null : dir;
  return (
    <PopupAction
      text="..."
      actions={actions}
      direction={direction}
      popupStyle={{ width: "150px" }}
    />
  );
});

stories.add("PopupConfirm", () => {
  const dir = select("direction", directionOptions);
  const direction = dir === "default" ? null : dir;
  const popupText = (
    <h4>Do you really want to hurt me? Do you really want to make me cry?</h4>
  );
  const onAccept = () => {
    alert("You said yes!");
  };
  const onCancel = () => {
    alert("Good. I dont want to hurt or cry.");
  };
  return (
    <PopupConfirm
      onAccept={onAccept}
      onCancel={onCancel}
      buttonText="Perform the Culture Club!"
      popUpText={popupText}
      direction={direction}
    />
  );
});
