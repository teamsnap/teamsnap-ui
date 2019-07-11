/**
 * @name Radio
 *
 * @description
 *  A common radio component that will render the appropriate styles for a html radio element. This calls the shared
 *  components InputControl with all the appropriate options. See the teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/checkbox.html
 *
 * @example
 *  <Radio
 *    name='example'
 *    label='Option One'
 *    group='exampleOptions'
 *    isInline />
 *
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import InputControl from "../InputControl";

class Radio extends React.PureComponent<any, any> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    group: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    isInline: PropTypes.bool,
    className: PropTypes.string,
    mods: PropTypes.string,
    style: PropTypes.object,
    otherProps: PropTypes.object
  };

  static defaultProps = {
    inputProps: {},
    isInline: false,
    className: "Checkbox Checkbox--radio",
    mods: null,
    style: {},
    otherProps: {}
  };

  render() {
    return <InputControl type="radio" {...this.props} />;
  }
}

export default Radio;
