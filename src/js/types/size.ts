import * as PropTypes from 'prop-types';

export enum Sizes {
  SMALL = 'small',
  LARGE = 'large',
}
export default class Size {
  static PropType = PropTypes.oneOf(['small', 'large']);
}
