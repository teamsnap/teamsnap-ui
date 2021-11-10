import * as React from 'react';

const useBodyScrollLock = (
  isInitiallyLocked: boolean = false,
  scrollLockClass: string = 'scroll-lock'
) => {
  const [isBodyScrollLocked, setIsBodyScrollLocked] = React.useState(isInitiallyLocked);

  document.body.classList.toggle(scrollLockClass, isBodyScrollLocked);

  return { isBodyScrollLocked, setIsBodyScrollLocked };
};

export { useBodyScrollLock };
