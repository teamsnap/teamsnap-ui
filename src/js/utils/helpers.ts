import _uniqueId from 'lodash/uniqueId';
import _capitalize from 'lodash/capitalize';

/**
 * @name capitalize
 *
 * @description
 *  This simple method returns a capitalized version of the provided string.
 *  Currently it is a 'wrapper' around the lodash _capitalize method.
 *  There are other utilities we can look into as well, such as `shortid`
 *
 * @example
 *  import { capitalize } from 'utils/helpers
 *
 *  capitalize('name')
 *
 */
export const capitalize: (string: string) => string = (string) =>
  _capitalize(string);

/**
 * @name generateUniqueId
 *
 * @description
 *  This simple method returns a string representing a uniqueID.
 *  Currently it is a 'wrapper' around the lodash uniqueId method.
 *  There are other utilities we can look into as well, such as `shortid`
 *
 * @example
 *  import { generateUniqueId } from 'utils/helpers
 *
 *  generateUniqueId()
 *
 */
export const generateUniqueId = (prefix = '') => _uniqueId(prefix);

/**
 * @name setUniqueId
 *
 * @description
 *  Set a uniqueID on an object if no id is provided.
 *  Accepts an array of objects, the property name to create
 *
 * @example
 *  import { setUniqueId } from 'utils/helpers
 *
 *  setUniqueId([{name: 'item one'}], 'uuid')
 *
 */
export const setUniqueId = (items, property = 'id') => {
  let updatedItems = null;

  // Assume if first row has an id, they all do and just return items
  if (items.length && items[0].hasOwnProperty(property)) {
    updatedItems = items;
  } else {
    updatedItems = items.map((item) => ({
      [property]: generateUniqueId('item-'),
      ...item,
    }));
  }

  return updatedItems;
};

/**
 * @name parseAlphaString
 *
 * @description
 *  Parse alpha characters from a provided string.
 *
 * @example
 *  import { parseAlphaString } from 'utils/helpers
 *
 *  parseAlphaString('abcd 1234 dcba')
 *
 */
export const parseAlphaString = (value) =>
  value
    .toString()
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase();

/**
 * @name parseNumericString
 *
 * @description
 *  Parse Numeric characters, periods and negation from a provided string.
 *
 * @example
 *  import { parseNumericString } from 'utils/helpers
 *
 *  parseNumericString('abcd 1234 dcba')
 *
 */
export const parseNumericString = (value) =>
  parseFloat(value.toString().replace(/[^0-9.-]/g, '')).toFixed(2);

/**
 * @name stringifyArray
 *
 * @description
 *  Used to quickly filter out and join an array by 'truthy' values.
 *
 * @example
 *  import { stringifyArray } from 'utils/helpers
 *
 *  stringifyArray(['Simpson', 'Homer'], ', ')
 *
 */
export const stringifyArray = (array, joinBy = ' ') =>
  array.filter(Boolean).join(joinBy);

/**
 * @name getClassName
 *
 * @description
 *  Takes a base className and calls stringifyArray to merge 'truthy' options into a single string it returns
 *
 * @example
 *  import { getClassName } from 'utils/helpers
 *
 *  getClassName(
 *    'BaseClassName',
 *    isInline && 'InlineModifier',
 *    isActive ? 'ActiveModifier' : 'InactiveModifier'
 *    'some-utility-modifier'
 * )
 *
 */
export const getClassName = (className, ...classModifiers) => {
  const classes = [className, ...classModifiers];

  return stringifyArray(classes);
};
