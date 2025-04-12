import { RefObject, useCallback, useSyncExternalStore } from "react";

/**
 * the type of the node element width observer in pixels
 */
export type ElementWidthObserver = number;

/**
 * the options for the useElementSizeObserver hook
 */
export interface ElementWidthObserverOptions {
  /**
   * The parent window or element to listen for resize events
   *
   * @default document.defaultView
   **/
  parent?: HTMLElement | RefObject<HTMLElement>;

  /**
   * Callback function to be called when the size changes
   *
   * @default undefined
   **/
  onResize?: (size: ElementWidthObserver) => void;
}

/**
 * retrieve the width of the node element in pixels based on the window or another node resize event
 *
 * @param ref - the ref of the node element that want to be observed
 * @param options - the options for the useElementSizeObserver hook
 * @returns the width of the node element in pixels
 */
export const useElementWidthObserver = (
  nodeEl: RefObject<HTMLElement>,
  options?: ElementWidthObserverOptions,
): ElementWidthObserver => {
  const { onResize, parent } = options ?? {};

  /**
   * get the parent element of the node element
   * if the parent is not provided, it will default to the document.defaultView
   */
  const getTriggerParentNode = useCallback(
    (
      instance: HTMLElement | RefObject<HTMLElement> | undefined,
    ): HTMLElement | Window => {
      if (instance instanceof HTMLElement) {
        return instance;
      }

      if (
        typeof instance === "object" &&
        "current" in instance &&
        instance.current instanceof HTMLElement
      ) {
        return instance.current;
      }

      return document.defaultView || window;
    },
    [],
  );

  /**
   * get the current width of the container element
   */
  const getSnapshot = useCallback((): ElementWidthObserver => {
    return nodeEl.current?.clientWidth ?? 0;
  }, [nodeEl]);

  /**
   * callback function to be called when the resize event is triggered
   */
  const handleOnResize = useCallback(
    (callback: VoidFunction) => () => {
      onResize?.(getSnapshot());
      callback();
    },
    [onResize],
  );

  const parentEl = getTriggerParentNode(parent);

  /**
   * subscriber to the resize event
   */
  const subscriber = useCallback(
    (onStoreChange: VoidFunction) => {
      parentEl?.addEventListener("resize", handleOnResize(onStoreChange));
      return () => {
        parentEl?.removeEventListener("resize", handleOnResize(onStoreChange));
      };
    },
    [handleOnResize, parentEl],
  );

  return useSyncExternalStore<ElementWidthObserver>(subscriber, getSnapshot);
};
