import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { Icon } from "../Icon";
import PopupAction from "./PopupAction";
import PopupConfirm from "./PopupConfirm";

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
      popupStyle={{ width: "150px", left: "-16px" }}
    />
  );
});

stories.add("PopupConfirm", () => {
  const popupText = (
    <h4>Do you really want to hurt me? Do you really want to make me cry?</h4>
  );
  const negativePopUpText = (
    <div class="u-textCenter">
      <h3>Delete this Row?</h3>
      <p>This action cannot be undone.</p>
    </div>
  );
  const onAccept = () => {
    alert("You said yes!");
  };
  const onCancel = () => {
    alert("Good. I dont want to hurt or cry.");
  };
  return (
    <>
      <PopupConfirm
        direction={["down", "left"]}
        popupStyle={{ left: "-16px", width: "270px" }}
        onAccept={onAccept}
        onCancel={onCancel}
        buttonText={<Icon name="trash" style={{ color: '#e26362' }} />}
        cancelButtonText="Cancel"
        cancelButtonMods=""
        confirmButtonText="Delete"
        confirmButtonMods="Button--no"
        popUpText={negativePopUpText}
        popUpMods="Popup--hover"
      />
      <PopupConfirm
        popUpMods="u-spaceSidesMd"
        direction={["down"]}
        onAccept={onAccept}
        onCancel={onCancel}
        buttonText={"Negative Button, Down"}
        buttonMods="Button--negative"
        cancelButtonText="Cancel"
        cancelButtonMods=""
        confirmButtonText="Confirm"
        confirmButtonMods="Button--no"
        popUpText={negativePopUpText}
      />
      <PopupConfirm
        onAccept={onAccept}
        onCancel={onCancel}
        buttonText={"Default"}
        popUpText={popupText}
      />
    </>
  );
});
