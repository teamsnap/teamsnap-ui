/**
 * @name ScreenReader
 *
 * @description
 *  ScreenReader is a component that visually hides it's children while making them accessible to screen readers.
 *  This is intended to aid in times where there may not be visual elements (like an icon only button).
 *
 * @example
 *  <ScreenReader>
 *    Click Me
 *  </ScreenReader>
 *
 */

 import * as React from 'react';
 import * as PropTypes from 'prop-types';
 import { getClassName } from '../../utils/helpers';

 const propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
   mods: PropTypes.string,
   testId: PropTypes.string,
 };

 type Props = PropTypes.InferProps<typeof propTypes>;

 const ScreenReader = ({
   className,
   mods,
   children,
   testId,
 }: Props) => {
   const cname = getClassName(
     className,
     mods,
     'u-hiddenVisually'
   );


   return (
     <span
       className={cname}
       data-testid={testId}
     >
       {children}
     </span>
   );
 };

 ScreenReader.propTypes = propTypes;

 ScreenReader.defaultProps = {
   children: null,
   className: null,
   mods: null,
   testId: null,
 };

 export default ScreenReader;
