import * as PropTypes from "prop-types";

export enum Statuses {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export default class Status {
  static PropType = PropTypes.oneOf(["success", "error", "warning"]);
}
