import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import PopupAction from "./PopupAction";
import PopupConfirm from "./PopupConfirm";
import PopUpWrapper from "./PopupWrapper";

const stories = storiesOf("Popup", module);

const actions = [
  {
    text: "Log to console",
    callback: () => {
      console.log("Logging to console");
    },
    requiresConfirmation: true,
    confirmationText: "Do you really want to write to the console?"
  },
  {
    text: "JavaScript Alert",
    callback: () => {
      alert("whoa!");
    }
  }
];

stories.add("PopupActions", () => {
  return (
    <PopupAction
      text="..."
      actions={actions}
      direction={["down", "left"]}
      popupStyle={{ width: "150px" }}
    />
  );
});

stories.add("PopupConfirm", () => {
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
    />
  );
});

stories.add("PopUpWrapper", () => {
  return (
    <PopUpWrapper
      actions={actions}
      direction={["down", "left"]}
      popupStyle={{ width: "150px" }}
    >
      <h1>Pill 1!</h1>
    </PopUpWrapper>
  );
});
