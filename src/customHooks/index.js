// @flow
import { useRef, useState, useEffect } from "react";
import { TABLET_SIZE } from "../consts";

export function useIsMobile(customWidth = TABLET_SIZE) {
  const isClient = typeof window === "object";

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : null,
      height: isClient ? window.innerHeight : null,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  function handleResize() {
    setWindowSize(getSize());
  }

  useEventListener("resize", handleResize);
  useEventListener("orientationchange", handleResize);

  return windowSize.width <= customWidth;
}

export const useOnClickOutside = (ref, handler) => {
  const [isTouchMoved, setTouchMoved] = useState(false);
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    const onTouchEnd = (event) => {
      if (!isTouchMoved) {
        listener(event);
      } else {
        setTouchMoved(false);
      }
    };
    const onTouchMove = () => {
      if (!isTouchMoved) {
        setTouchMoved(true);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchmove", onTouchMove);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, [ref, handler, isTouchMoved]);
};

export const useEventListener = (
  eventName: string,
  handler: (e: T) => void,
  element?: HTMLElement | (Window & typeof globalThis) | null
): void => {
  if (typeof element === "undefined") {
    element = window;
  }

  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler, savedHandler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: T) => savedHandler.current(event);

      // Add event listener
      element?.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element?.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element, savedHandler] // Re-run if eventName or element changes
  );
};
