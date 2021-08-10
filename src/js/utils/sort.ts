import { parseAlphaString, parseNumericString } from './helpers';

// Sort a,b results by a parsed date
const sortByDate = (a, b) => {
  return Date.parse(a) - Date.parse(b);
};

// Sort by alpha 'string' characters
const sortByAlpha = (a, b) => {
  const aString = a.toLowerCase();
  const bString = b.toLowerCase();

  if (aString === bString) {
    return 0;
  } else {
    return aString < bString ? -1 : 1;
  }
};

// Sort by Numeric parseFloat characters, this will help in sorting number by 'human' methods
const sortByNumeric = (a, b) => {
  const aNumber = parseNumericString(a);
  const bNumber = parseNumericString(b);
  return +aNumber - +bNumber;
};

// Sort alphaNumerically, first find strings with matching alpha characters and
// attempt to then sort by matching numeric characters.  There might be a better algorithm to actually handle this,
// but this quick approach seemed to work fine.
const sortByAlphaNumeric = (a, b) => {
  const aValue = parseAlphaString(a);
  const bValue = parseAlphaString(b);

  // Parsed alpha strings are equal, attempt to sort remaining 'numeric'
  if (aValue === bValue) {
    return sortByNumeric(a, b);
  } else {
    return sortByAlpha(aValue, bValue);
  }
};

// Define sortTypes for easier selection, will default in compare to 'alphaNumeric'
const sortTypes = {
  date: sortByDate,
  alpha: sortByAlpha,
  numeric: sortByNumeric,
  alphaNumeric: sortByAlphaNumeric,
};

// Compare the sortBy results, sorting by the provided type if available.
const compare = (options) => (a, b) => {
  const { name, sortType, sortFn, isReverse } = options;
  let sortValue = null;

  // Check provided values are an object
  const aValue = typeof a === 'object' ? a[name] : a;
  const bValue = typeof b === 'object' ? b[name] : b;

  // Use custom sorting if provided
  if (sortFn) {
    sortValue = sortFn(aValue, bValue);
    // Always sort null array aValue to end, even on reverse
  } else if (!aValue) {
    sortValue = isReverse ? -1 : 1;
    // Always sort null array bValue to end, even on reverse
  } else if (!bValue) {
    sortValue = isReverse ? 1 : -1;
    // Use pre-selected sort order by checking if type is array
  } else if (Array.isArray(sortType)) {
    sortValue = sortType.indexOf(aValue) - sortType.indexOf(bValue);
  } else {
    // Use selected sortType or default 'alphaNumeric'
    const sorter = sortTypes[sortType] || sortTypes['alphaNumeric'];
    sortValue = sorter(aValue, bValue);
  }

  // If reverse (descending), flip sort value
  return sortValue * (isReverse ? -1 : 1);
};

/**
 * @name sortBy
 *
 * @description
 *  The sortBy method allows for multiple sorting types, including a custom sort order and even a custom
 *  sorting method `sortFn`.  This accepts an arrayToSort as well as an object containing custom sort options.
 *
 * @example
 *  import { sortBy } from 'utils/sort
 *
 *  sortBy(arrayToSort, { name: 'createdAt', sortType: 'date', isReverse: true })
 *  sortBy(arrayToSort, { name: 'phonetics', sortType: ['charlie', 'alpha', 'bravo'] })
 *  sortBy(arrayToSort, { name: 'test', sortFn: (a,b) => b - a })
 *
 */
export const sortBy = (array, options = {}) => array.sort(compare(options));
