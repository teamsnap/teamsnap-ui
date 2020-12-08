import * as PropTypes from "prop-types";

export enum CheckboxStates {
  FALSE = "false",
  INDETERMINATE = "indeterminate",
  TRUE = "true"
}

export default class CheckboxState {
  static PropType = PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["false", "indeterminate", "true"])]);
}
