import * as React from 'react';

export const convertObjsToValueLabel = (items: { [key: string]: string }) =>
  Object.entries(items).reduce((acc, cur) => {
    const [value, label] = cur;
    return [...acc, { value, label }];
  }, []);

export const getLastPageIndex = (totalItems: number, itemsPerPage: number): number => {
  const index = Math.ceil(totalItems / itemsPerPage);
  return Math.max(1, index);
};

export const usePagination = (defaultItemsPerPage: number, defaultCurrentPage: number) => {
  const itemsPerPageStateHooks = React.useState(defaultItemsPerPage);
  const currentPageStateHooks = React.useState(defaultCurrentPage);

  return [itemsPerPageStateHooks, currentPageStateHooks];
};
