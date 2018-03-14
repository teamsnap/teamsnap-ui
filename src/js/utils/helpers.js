/**
 * Helpers
 * 
 * Quick helper methods from lodash, used throughout various components
 * 
 */

export const stringifyArray = (array, joinBy = ' ') => array.filter(Boolean).join(joinBy)

export const getClassName = (className, ...classModifiers) => {
  const classes = [
    className,
    ...classModifiers
  ]

  return stringifyArray(classes)
}
