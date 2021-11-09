import * as React from 'react';

const useOnClickOutside = (ref, handler) => {
  const listener = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler(event);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mouseup', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mouseup', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export { useOnClickOutside };
