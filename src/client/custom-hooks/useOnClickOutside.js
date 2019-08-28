// @flow
import * as React from 'react';

export const useOnClickOutside = (
  ref: React.ElementRef<any>,
  cb: () => any
) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      cb();
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, cb]);
};
