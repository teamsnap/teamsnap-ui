import * as PropTypes from "prop-types";

export default class Routable {
  static getPropTypes(required: boolean) {
    return {
      location: required ? PropTypes.string.isRequired : PropTypes.string,
      locationProps: required ? PropTypes.string.isRequired : PropTypes.string,
    }
  }
}
