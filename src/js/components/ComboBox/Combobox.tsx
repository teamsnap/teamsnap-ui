/**
 * @name Checkbox
 *
 * @description
 *  A common checkbox component that will render the appropriate styles. This calls the shared components InputControl
 *  with all the appropriate options. See the teamsnap patterns library for more information.
 *    https://teamsnap-ui-patterns.netlify.com/patterns/components/checkbox.html
 *
 * @example
 *  <Checkbox name='example' label='Check Me' isInline />
 *
 */

 import * as React from "react";
 import * as PropTypes from "prop-types";

 const propTypes = {
   name: PropTypes.string.isRequired,
   buttonLabel: PropTypes.node,
   searchLabel: PropTypes.node,
   items: PropTypes.arrayOf(
     PropTypes.oneOfType([
       PropTypes.node,
       PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string
        })
      ])
   ),
   onChange: PropTypes.func,
   className: PropTypes.string,
   mods: PropTypes.string,
   style: PropTypes.object,
   otherProps: PropTypes.object,
   disabled: PropTypes.bool
 };

 type ComboBoxType = React.FunctionComponent<
   PropTypes.InferProps<typeof propTypes>
 >;
 const ComboBox: ComboBoxType = (props) => {
   const {
     name,
     buttonLabel,
     searchLabel,
     items,
     style,
     otherProps,
     disabled

   } = props;
   return (
    <div
    style={style}
    {...otherProps}
  >
    <button
      className="SelectBox-options"
      name={name}
      id={name}
      disabled={disabled}
    >
      {buttonLabel}
    </button>
  </div>
   );
 };

 ComboBox.propTypes = propTypes;

 ComboBox.defaultProps = {
   mods: null,
   style: {},
   otherProps: {},
 };

 export default ComboBox;
