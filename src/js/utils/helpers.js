/**
 * @name stringifyArray
 * 
 * @description
 *  Used to quickly filter out and join an array by 'truthy' values.
 *
 * @example
 *  import { stringifyArray } from 'utils/helpers
 * 
 *  stringifyArray(['a', 'b', 'c'])
 *
 */
export const stringifyArray = (array, joinBy = ' ') => array.filter(Boolean).join(joinBy)

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
  const classes = [
    className,
    ...classModifiers
  ]

  return stringifyArray(classes)
}
