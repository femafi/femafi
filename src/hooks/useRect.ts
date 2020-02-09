import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';
import { ResizeObserver } from '@juggle/resize-observer';

const getRect = <T extends HTMLElement>(element?: T): DOMRect => {
  let rect: DOMRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    toJSON: () => { /* empty */ },
    top: 0,
    width: 0,
    x: 0,
    y: 0
  };

  if (element) {
    rect = element.getBoundingClientRect();
  }

  return rect;
};

const useRect = <T extends HTMLElement>(ref: React.RefObject<T>): DOMRect => {
  const [rect, setRect] = useState<DOMRect>(ref && ref.current ? getRect(ref.current) : getRect());

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return;
    }
    setRect(getRect(ref.current));
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    handleResize();

    let resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(element);
    return () => {
      if (!resizeObserver) {
        return;
      }
      resizeObserver.disconnect();
      resizeObserver = null;
    };
  }, [ref.current]);

  return rect;
};

export default useRect;
